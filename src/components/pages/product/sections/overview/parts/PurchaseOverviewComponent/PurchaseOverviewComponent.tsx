import { useSelector } from "react-redux"
import SelectionComp from "./parts/SelectionComponent/SelectionComp"
import TitleComp from "./parts/TitleComponent/TitleComp"
import styles from "./styles.module.scss"
// import { useState } from "react";
import AddCartComp from "./parts/AddCartComp/AddCartComp";
import { ProductFullModel } from "@/types/global/model/product/product.full.model";
import { ProductVariationModel } from "@/types/global/model/product/variation/product.variation.model";
import StoreProvider from "@/app/product/[id]/StoreProvider";
import { CartStateType } from "@/lib/redux/cart/types";

interface Props {
  parentId: string
  descriptions: ProductFullModel["descriptions"]
  countOfReviews: ProductFullModel["reviewsSnapshot"]["total"];
  productName: ProductFullModel["productName"];
  collectionName: ProductFullModel["collectionName"];
  rating: ProductFullModel["rating"];
  price: ProductVariationModel["stockInfo"]["price"]
  productVariations: ProductVariationModel[]
}

export default function PurchaseOverviewComponent({props}: {props: Props}){

  const {} = props;

  const cartObject: CartStateType = {}

  // const [inStockStatus, setInstockStatus] = useState<boolean>(true)

  // const {descriptions} = useSelector(({productData}: {productData: ProductFullModel}) => productData);

  // function dispatchToCart(){
  //   const {name, value, index} = fieldsRef.current[0]
    
  //   const fields = createFieldsArray();
    
  //   const resultObj: CartProduct = {
  //     productName: productData?.title,
  //     productId,
  //     productImg: productData?.mediaContent?.images[index],
  //     quantity: quantityRef.current,
  //     quantityMax: productData.stockInfo?.quantityMax,
  //     price: productData?.stockInfo?.price,
  //     fields: fields[0].value ? fields : fieldsRefFunction(),
  //     displayedField: {name, value},
  //     checked: false,
  //   }

  //   dispatch(actionCallCartState({type: CART_ADD_ITEM_SAVE_CONST, payload: resultObj}))
  // }

  return(
    <div className={`${styles.container}`}>
      <div>
        <TitleComp props={props} />

        {/* <SelectionComp carouselState={carouselState} setTotalObj={setTotalObj} /> */}
      </div>
      {/* <div clasclsName="mt-3"> */}
        {/* <Quantity action={(result: number) => quantityRef.current = result} 
        quantityMax={quantityMax} text="amt." btnSize={30} theme={colors} 
        quantity={quantityRef?.current} /> */}
      {/* </div> */}

      <div id="in-stock-status" className="flex items-center font-bold">
        {/* {
          inStockStatus ? 
          <>
            <div className={`${styles.instock_status}`}></div>
            <div>In stock: All orders shipping with UPS</div>
          </>
          :
          <>
            <div className={`${styles.not_instock_status}`}></div>
            <div>Not in stock</div>
          </>
        } */}
      </div>

      {/* <AddCartComp props={() => {
        const {countOfReviews, descriptions, productVariations, ...remains} = props;
        const variationId = productVariations[0].
      }} /> */}
      {/* <StoreProvider> */}
        <AddCartComp {...props.productVariations[0]} />
      {/* </StoreProvider> */}
      {/* <AddCartComp inStockStatus={inStockStatus} action={dispatchToCart} /> */}

      <p className="text-lg mt-10">{props.descriptions.summary}</p>
      {props.descriptions.presentable.map((string, index) => <p key={index} className="text-lg mt-10">{string}</p>)}
    </div>
  )
}