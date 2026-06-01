import CheckoutCreateSessionServerResponseDto from "@/types/stripe/sessions.create"
import ProductOptionsDto from "./dto/ProductOptionsDto"
import { CheckoutDtoType } from "@/types/stripe/stripe.checkout.types"

export default class StripeApi {
  
  // public static async fetchClientSecret(action: (response: string) => void, requestBody: ProductOptionsDto[]){
  public static async fetchClientSecret(action: (response: string) => void, entities: CheckoutDtoType[]){
    // console.log(requestBody)
    const request = await fetch("http://localhost:5000/api/stripe/checkout/sessions/create", {
      method: "POST",
      // body: JSON.stringify({data: requestBody}),
      body: JSON.stringify(entities),
      headers: {"Content-Type": "application/json"}
    })
    const response: CheckoutCreateSessionServerResponseDto = await request.json()

    console.log(response)
    
    action(response.client_secret)
  };
}