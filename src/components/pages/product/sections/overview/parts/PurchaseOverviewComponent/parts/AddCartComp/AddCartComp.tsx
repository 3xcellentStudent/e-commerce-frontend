'use client'

import Button from "@/components/common/Buttons/Button";
import { add } from "@/lib/redux/cart/reducers";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import { enqueueSnackbar } from "@/lib/redux/snackbar/reducers";
import { ProductVariationModel } from "@/types/global/model/product/variation/product.variation.model";
import { GlobalDataType } from "@/types/main/globalData.type";

import styles from "./styles.module.scss"

// interface Props {
//   parentId: string
//   productName: ProductFullModel["productName"];
//   collectionName: ProductFullModel["collectionName"];
//   rating: ProductFullModel["rating"];
//   price: ProductVariationModel["stockInfo"]["price"]
//   variationId: string
// }

// export default function AddCartComp({action, inStockStatus}: Props){
export default function AddCartComp(product: ProductVariationModel){

  // const btnCls = `relative duration-200 rounded-md px-5 py-3 uppercase whitespace-nowrap overflow-hidden
  // before:absolute before:block before:left-[-175%] before:top-0 before:h-full before:w-[200%] 
  // before:duration-300 before:z-[0] hover:before:left-0 w-[45%]`;
  // const btnCls = `relative duration-200 rounded-md px-5 py-3 uppercase whitespace-nowrap overflow-hidden
  // before:absolute before:block before:left-[-175%] before:top-0 before:h-full before:w-[200%] 
  // before:duration-300 before:z-[0] hover:before:left-0 w-[45%]`; 

  const dispatch = useAppDispatch();
  const state = useAppSelector(store => store.snackbar)

  const isInStock = !!product.stockInfo.quantityAvailable;

  function handleClick(){
    // dispatch(add(product))
    dispatch(enqueueSnackbar({message: `${product.variationName} added to the cart !`, severity: "success"}))
  }

  return(
    // <div className={`${isInStock ? "pointer-events-auto" : "pointer-events-none"} flex items-center justify-between w-[100%] mt-3`} >
    <div className={` flex items-center justify-between w-[100%] mt-3`} >
      {/* <button disabled={isInStock} onClick={handleClick} 
      className={`${btnCls} ${isInStock ? "bg-gold" : "bg-coffee"}`}>
        <span className="relative z-[2]">Add to cart</span>
      </button>   */}
      <button onClick={handleClick} className={`${styles.button_add_to_cart} ${isInStock ? "bg-gold" : "bg-coffee"}`}>
        <span className="relative z-[2]">Add to cart</span>
      </button>
      <a className={`${isInStock ? "pointer-events-auto cursor-pointer" : "pointer-events-none cursor-default"}`} href={"#"}>
        <button disabled={!isInStock} className={`${styles.button_buy_now} ${isInStock ? "bg-gold" : "bg-coffee"}`}>
          <span className="relative z-[2]">Buy Now</span>
        </button>
      </a>
      {/* <Button disabled={!isInStock} sx={{backgroundColor: elementsPrimaryBg.hex, color: secondaryText.hex, 
      "&:hover": isInStock ? {backgroundColor: elementsOptionalBg.hex, color: secondaryText.hex} : {}}} 
      className={btnCls} handleClick={action}>
        <span className="relative z-[2]">Add to cart</span>
      </Button>
      <Button disabled={!isInStock} sx={{backgroundColor: elementsPrimaryBg.hex, color: secondaryText.hex, 
      "&:hover": isInStock ? {backgroundColor: elementsOptionalBg.hex, color: secondaryText.hex} : {}}} 
      className={`${btnCls} ml-2`} handleClick={action}>
        <span className="relative z-[2]">Buy Now</span>
      </Button> */}
    </div>
  );
}