'use client'

import { useAppDispatch, useAppSelector } from "@/lib/hooks"
import CartItem from "./item/CartItem";
import { ProductVariationModel } from "@/types/schema/product/variation/product.variation.type";
import {add} from "@/lib/slices/cartSlice"
import { useEffect } from "react";



export default function CartList({data}: {data: ProductVariationModel[]}){

  const dispatch = useAppDispatch();

  useEffect(() => {
    data.forEach(item => dispatch(add({...item, customerQuantity: 1})))
  }, [])
  const cart = useAppSelector(({cart}) => cart);

  return(
    <ul>
      {Object.values(cart).map((entity) => {
        console.log("Entries: ", entity)
        return(
          <CartItem {...entity} key={entity.id} />
          // <></>
        )
      })}
    </ul>
  )
}