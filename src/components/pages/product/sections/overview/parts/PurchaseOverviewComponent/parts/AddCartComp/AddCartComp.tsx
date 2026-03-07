'use client'

// import Button from "@/components/common/Buttons/Button";
import { add } from "@/lib/redux/cart/reducers";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import { enqueueSnackbar } from "@/lib/redux/snackbar/reducers";
import { ProductVariationModel } from "@/types/api/product/variation/product.variation.model";

import styles from "./styles.module.scss"
import PlusSVG from "@/components/SVG/simple/PlusSVG";

export default function AddCartComp({product}: {product: ProductVariationModel}){

  const dispatch = useAppDispatch();
  const store = useAppSelector(store => store.cart)

  const isInStock = !!product.stockInfo.quantityAvailable;

  function handleClick(){
    dispatch(add(product))
    dispatch(enqueueSnackbar({message: `${product.variationName} added to the cart !`, severity: "success"}))
  }

  return(
    <button className={`relative items-center flex ${styles.button_add_to_cart} ${true ? "bg-gold" : "bg-coffee"}`}
    onClick={handleClick}>
      <span className="relative z-[2]">Add to cart</span>
      <PlusSVG svgClass={`${styles.button_add_to_cart_svg} absolute`} fill="fill-light" stroke="stroke-light" iconSize={24} strokeWidth={.5} />
    </button>
  );
}