'use client'

import { useAppSelector } from "@/lib/hooks"
import CartItem from "../item/CartItem";



export default function CartList(){

  const cart = useAppSelector(({cart}) => cart);

  return(
    <ul>
      {[...cart.entries()].map((entrie) => {
        console.log("Entries: ", entrie[0], entrie[1])
        return(
          <CartItem {} />
          <></>
        )
      })}
    </ul>
  )
}