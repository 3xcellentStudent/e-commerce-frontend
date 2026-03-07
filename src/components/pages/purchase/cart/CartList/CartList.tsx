'use client'

import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks"


export default function CartList(){

  const dispatch = useAppDispatch();
  const store = useAppSelector(store => store.cart);

  return(
    <ul>
      {store.map(({variationName, collectionName, stockInfo, productOptions, image}) => {
        return(
          <li>
            <div></div>
          </li>
        )
      })}
    </ul>
  )
}