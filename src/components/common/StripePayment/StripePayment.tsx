'use client'

import CheckoutCreateSessionServerResponse from "@/types/stripe/sessions.create";
import { EmbeddedCheckout, EmbeddedCheckoutProvider } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useEffect, useState } from "react";
import styles from "./styles.module.scss"
import StripeApi from "@/api/stripe/checkout";
import ProductOptionsDto from "@/api/stripe/dto/ProductOptionsDto";
import { CartProductVariationModel } from "@/types/cart/variation/cart.variation.types";
import { useAppSelector } from "@/lib/redux/hooks";
import { ProductVariationModel } from "@/types/api/product/variation/product.variation.model";
import { CheckoutDtoType } from "@/types/stripe/stripe.checkout.types";


export default function StripePayment(){

  const stripePromise = loadStripe(
    "pk_test_51PxA1M04u95jjINWkcCJ5cngtac7Got20xwgrQHLhQnOu7LhsOKl6hZPkzcnO7VkJiOOPsjHNfuhMneTxrXqgUn30078WzF7oH", 
    {betas: ['custom_checkout_beta_6'],}
  );

  const cart = useAppSelector(({cart}) => cart);

  const [clientSecret, setClientSecret] = useState<string | null>(null)
  // useEffect(() => {
  //   if(!!requestBody.length){
  //     console.log("ASLKJDLKASJDLKASJDLJASLKDJALKSDLKADLASDKLJDLKASDJALSKDJLKASJDLKASD")
  //     StripeApi.fetchClientSecret(setClientSecret, requestBody);
  //   }
  // }, [requestBody])

  useEffect(() => {
    console.log(clientSecret)
  }, [clientSecret])

  useEffect(() => {
    if(!!cart.length){
      getRequestDto()
    }
  }, [cart])

  function getRequestDto(){
    // const cartItemsDto = cart.map((entity) => {
      // const value = object.fields[0].value
      // const stockStatus = object.fields[0].stockStatus

      // const productOptionsDto = new ProductOptionsDto({...entity})

    //   return productOptionsDto;
    // })

    const entities: CheckoutDtoType[] = cart.map(({collectionName, id, customerSelectedQuantity}) => ({collectionName, productId: id, quantity: customerSelectedQuantity}));
    StripeApi.fetchClientSecret(setClientSecret, entities);
  }

  // async function fetchClientSecret(){
  //   const request = await fetch("http://localhost:5000/api/stripe/checkout/sessions/create", {
  //     method: "POST",
  //     body: JSON.stringify({
  //       productName: "Product Name",
  //       unitAmount: "10000",
  //       quantity: "1",
  //     })
  //   })
  //   const response: CheckoutCreateSessionServerResponse = await request.json()
    
  //   setClientSecret(response.client_secret)
  // };

  return(
    <section id="payment-methods" className={`${styles.container}`}>
      <div id="checkout">
        {
          clientSecret ? 
          <div className={`${styles.stripe_container}`}>
            <EmbeddedCheckoutProvider stripe={stripePromise} options={{clientSecret}}>
              <EmbeddedCheckout />
            </EmbeddedCheckoutProvider>
          </div> : <div></div>
          // <Backdrop sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })} open>
          //   <CircularProgress color="inherit" />
          // </Backdrop>
        }
      </div>
    </section>
  )
}