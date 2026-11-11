'use client'

import { useAppSelector } from "@/lib/hooks"
import CartItem from "../item/CartItem";
import { ProductVariationModel } from "@/types/schema/product/variation/product.variation.type";



export default function CartList({data}: {data: ProductVariationModel[]}){

  console.log(data)

  const cart = useAppSelector(({cart}) => cart);

  return(
    <ul>
      {[...cart.entries()].map((entrie) => {
        console.log("Entries: ", entrie[0], entrie[1])
        return(
          // <CartItem {} />
          <></>
        )
      })}
    </ul>
  )
}