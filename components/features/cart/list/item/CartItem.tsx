import CartCheckbox from "@/components/ui/cart/checkbox/CartCheckbox";
import { useAppDispatch } from "@/lib/hooks";
import { StoreProductVariationModel } from "@/lib/slices/cartSlice";
import Image from "next/image";
import { useRef } from "react";
import {increase, decrease, remove} from '@/lib/slices/cartSlice'
import { X as DeleteIcon, Plus as PlusIcon, Minus as MinusIcon } from "@animateicons/react/lucide";
import {Separator} from "radix-ui"

export default function CartItem({
  id, customerQuantity, image, variationName, variationOptions, stockInfo: {priceInCents, amountAvailable, currency}
}: StoreProductVariationModel){

  const dispatch = useAppDispatch();
  
  function handleDecrease(){
    dispatch(decrease(id));
  }
  function handleIncrease(){
    dispatch(increase(id))
  }

  const imageSizeRef = useRef<number>(16 * 4).current;

  return(
    <li className="w-full py-4">
      <article className="flex items-center w-full gap-4">
        <CartCheckbox/>
        <figure className={``}>
          <Image src={image[0]?.src || ""} alt={variationName} width={imageSizeRef} height={imageSizeRef} loading="eager" />
        </figure>
        <div className="flex flex-col flex-1 gap-2">
          <div className="flex flex-row justify-between w-full">
            <div className="flex flex-col">
              <h3 id={`product-title-${variationName}`} className="cart-product__title">
                <a href="/products/cuticle-elixir">{variationName}</a>
              </h3>
              <div>
                <p className="text-xs text-foreground-muted">{variationOptions.value}</p>
              </div>
            </div>
            <button onClick={() => dispatch(remove(id))} type="button" className="flex items-start" aria-label="Delete from cart">
              <DeleteIcon/>
            </button>
          </div>
          <div className="flex flex-row justify-between">
            <fieldset className="flex flex-row">
              {/* <legend className="visually-hidden" >Change product quantity</legend> */}
              
              <button type="button" onClick={handleDecrease} className="quantity-btn" aria-label="Decrease quantity">
                <MinusIcon/>
              </button>
              <span className="w-[2rem] text-center">{customerQuantity}</span>              
              {/* <input type="number"
              disabled 
              name="quantity"
              value={customerQuantity} 
              min="1" max={amountAvailable} 
              aria-label="Product quantity" 
              className="w-[2rem] text-center"/> */}

              <button type="button" onClick={handleIncrease} className="quantity-btn" aria-label="Increase quantity">
                <PlusIcon/>
              </button>
            </fieldset>

            <div className="cart-product__price-block">
              <span>
                <data className="whitespace-nowrap" value={priceInCents / 100}>{priceInCents / 100} {currency}</data>
              </span>
            </div>
          </div>
        </div>
        {/* <div className="cart-product__name">
          
          <p className="cart-product__description">{`${variationOptions.name}: ${variationOptions.value}`}</p>
        </div> */}
      </article>
      <Separator.Root className="bg-muted mx-4 h-[1px]" />
    </li>
  )
}