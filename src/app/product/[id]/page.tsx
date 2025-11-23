import CartList from "@/components/common/CartList/CartList"
import DrawerComponent from "@/components/common/DrawerComponent/DrawerComponent"
import Description from "@/components/pages/product/sections/description/Description"
import Details from "@/components/pages/product/sections/details/Details"
import Overview from "@/components/pages/product/sections/overview/Overview"
import Reviews from "@/components/pages/product/sections/reviews/Reviews"
import { ProductFullModel } from "@/types/global/model/product/product.full.model"
import styles from "./styles.module.scss"
import ProductApi from "@/api/database/product/product.api"
import ReduxProvider from "@/components/common/Redux/ReduxProvider"
import StoreProvider from "./StoreProvider"


interface Props {
  params: {
    id: string
  }
}

export default async function Page({
  params: {id}
}: Props){

  const productObject: Promise<ProductFullModel> = await ProductApi.getOneByIdRecursive(id, "essential-oils");
  

  const {
    id: productId, 
    mediaContent, 
    descriptions, 
    specifications,
    rating,
    reviewsSnapshot,
    reviewsId
  } = await productObject;

  return(
    <main className={styles.main}>
      <Overview props={await productObject} />
      <Description mediaContent={mediaContent} presentable={descriptions.presentable} />
      <Details specifications={specifications} />
      <Reviews rating={rating} reviewsSnapshot={reviewsSnapshot} reviewsId={reviewsId} />
      {/* <StoreProvider>
        <DrawerComponent anchor='right'>
          <CartList />
        </DrawerComponent>
      </StoreProvider> */}
    </main>
  )

}