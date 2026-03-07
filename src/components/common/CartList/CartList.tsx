'use client'

import { useDispatch, useSelector } from "react-redux"
import { useEffect, useRef } from "react"
// import { Box, List, ListItem, Tooltip } from '@mui/material'
import Title from "./parts/Title/Title"
import ViewCartButton from "./parts/ViewCartButton/ViewCartButton"
import { usePathname } from "next/navigation"
import { CartObjectType } from "@/types/cartTypes/cartObject.types"
import styles from "./styles.module.scss"
import Quantity from "../Quantity/Quantity"
import InternalCircleSVG from "../Radio/InternalCircleSVG"
import { GlobalDataType } from "@/types/main/globalData.type"
import { ProductFullModel } from "@/types/api/product/product.full.model"
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks"
import {add, remove} from "@/lib/redux/cart/reducers"
import { ProductVariationModel } from "@/types/api/product/variation/product.variation.model"


export default function CartList(){

  // const {cart, response} = useSelector(({
  //   cartObject
  // }: {productData: ProductFullModel, cartObject: CartObjectType}) => ({...cartObject}))

  // const pathname = usePathname()
  // const dispatch = useDispatch()

  const dispatch = useAppDispatch();

  const cart = useAppSelector(state => state.cart)

  const itemRef = useRef(null)

  function deleteHandleClick(index: number){
    dispatch(remove(index))
  }

  function dispatchQuantity(quantity: number, index: number){
    const payload = {quantity: +quantity, index}
    // dispatch(actionCallCartState({type: CART_CHANGE_QUANTITY_SAVE_CONST, payload}))
  }

  return(
    <div className="h-full">
      <ul className={`${styles.list} py-4 h-[calc(100%-49px)] overflow-y-auto relative backdrop-blur-xl`}>
        {
          cart?.length ? (
            cart?.map((product, index) => {

              // const {} = obj

              return(
                  <li ref={itemRef} key={index} 
                  className={`w-[calc(100%-16px)] rounded-xl flex flex-row justify-between items-center m-2 p-2 pr-4 ${styles.container}`}>
                    
                    <div className="flex flex-row h-full">
                      <div className={`relative h-full ${styles.image_container}`}>
                        <img className="absolute w-full h-full object-scale-down" src={""} alt="logo" />
                      </div>

                      <div className="h-full p-2 border-stone-500 border-r-[1px]">
                        <Title productId={product.parentId} productName={product.productName} />

                        <div className="h-[50%] flex items-end">
                          <div className="w-full w-min font-bold">${product.price}</div>
                        </div>
                      </div>

                      {/* <div className="h-full px-2 flex items-center">
                        <ul className="flex flex-row" key={index} >
                          {fields.map(({value, background}, idx) => {
                            if(idx === fields.length - 1){
                              return(
                                <Tooltip key={idx} title={value} placement='top' arrow disableInteractive>
                                  <div className={styles.product_options_container}>
                                    <InternalCircleSVG fill={background} />
                                  </div>
                                </Tooltip>
                              )
                            }
                            else return <li key={idx} >{value}</li>;
                          })}
                        </ul>
                      </div> */}
                    </div>


                    <div className="flex flex-row w-min justify-between items-center">
                      <Quantity inputProps={{disabled: true}} elemIndex={index} action={dispatchQuantity} btnSize={24} quantity={product.quantity} />
                      
                      <div className="ml-4">
                        <button onClick={() => deleteHandleClick(index)} ></button>
                      </div>
                    </div>
                  </li>
              )
            })
          ) : 
          <li className="w-full h-full font-bold flex justify-center items-center uppercase">
            <div>Shopping cart is empty</div>
          </li>
        }
        {cart.length > 0 && <ViewCartButton/>}
      </ul>

    </div>
  )
}