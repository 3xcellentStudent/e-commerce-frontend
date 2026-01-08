import styles from "./styles.module.scss";
import Purchase from './parts/PurchaseOverviewComponent/Purchase';
import LargeCarousel from './parts/CarouselOverview/LargeCarousel/LargeCarousel';
import SmallCarousel from './parts/CarouselOverview/SmallCarousel/SmallCarousel';
// import { useState } from 'react';
import { GlobalDataType } from '@/types/main/globalData.type';
import PurchaseOverviewComponent from './parts/PurchaseOverviewComponent/PurchaseOverviewComponent';
import { ProductFullModel } from '@/types/global/model/product/product.full.model';
import ProductApi from "@/api/database/product/product.api";

// export default function Overview({
//   props: {descriptions, productVariations, id: parentId, reviewsSnapshot: {total: countOfReviews}, productName, collectionName, rating}
// }: {props: ProductFullModel}){
export default async function Overview({id}: {id: string}){

  const productObject: Promise<ProductFullModel> = await ProductApi.getOneByIdRecursive(id, "essential-oils");

  const {productVariations, descriptions, reviewsSnapshot: {total: countOfReviews}, productName, rating, collectionName} = await productObject;
  // const [carouselIndex, setCarouselIndex] = useState<number>(0)

  // console.log(productObject)
  if(productVariations.length === 1){
    return(
      <section className={`top_section`}>
        <div className={`${styles.wrapper}`}>
          <div className="w-[65%] flex flex-row" >
            {/* <SmallSlider carouselIndex={carouselIndex} setCarouselIndex={setCarouselIndex} />
            <BigSlider carouselIndex={carouselIndex} setCarouselIndex={setCarouselIndex} /> */}
            <SmallCarousel images={productVariations[0].image} />
            <LargeCarousel images={productVariations[0].image} />
            {/* <picture className={`${styles.images_container}`}>
              {productVariations[0].image.map(({media, src}) => {
                if(media !== ""){
                  return <source className="absolute w-full h-full object-scale-down left-0 top-0" key={src} media={media} srcSet={src} />
                } else {
                  return <img className="absolute w-full h-full object-scale-down left-0 top-0" key={src} src={src} alt="Product variation image" />
                }
              })}
            </picture> */}
          </div>
          <div className="w-[45%] h-full relative">
            <div className="sticky top-[7rem]">
              <PurchaseOverviewComponent id={id} />
            </div>
          </div>
        </div>
      </section>
    )
  } else {
    return(
      // <section className='styles.section'>
      //   <div className={`${styles.wrapper}`}>
      //     <div className={`w-[50%] ${styles.slider_container}`} >
      //       <div className='w-full flex flex-row' >
      //         {/* <SmallSlider carouselIndex={carouselIndex} setCarouselIndex={setCarouselIndex} />
      //         <BigSlider carouselIndex={carouselIndex} setCarouselIndex={setCarouselIndex} /> */}
      //         <BigSlider images={productVariations} />
      //       </div>
      //     </div>
      //     <PurchaseOverviewComponent props={{descriptions, productVariations, parentId, countOfReviews, productName, rating, price: "0.0", collectionName}} />
      //   </div>
      // </section>
      <div>Doesn't work with many variations</div>
    )
  }

  // return(
  //   <section className='styles.section'>
  //     <div className={`${styles.wrapper}`}>
  //       <div className={`w-[50%] ${styles.slider_container}`} >
  //         <div className='w-full flex flex-row' >
  //           {/* <SmallSlider carouselIndex={carouselIndex} setCarouselIndex={setCarouselIndex} />
  //           <BigSlider carouselIndex={carouselIndex} setCarouselIndex={setCarouselIndex} /> */}
  //           <BigSlider images={productVariations} />
  //         </div>
  //       </div>
  //       <PurchaseOverviewComponent props={{descriptions, productVariations, parentId, countOfReviews, productName, rating, price: "0.0", collectionName}} />
  //     </div>
  //   </section>
    // <Typography component="section" sx={{
    //   "&:before": {backgroundColor: optionalBg.hex}, background: `linear-gradient(to right, ${elementsSecondaryBg.hex} 50%, transparent 50%)`
    // }} className={`${styles.section}`}>
      // <div className={`${styles.wrapper}`}>
      //   <Box className={`w-[50%] ${styles.slider_container}`} >
      //     <div className='w-full flex flex-row' >
      //       {/* <SmallSlider carouselIndex={carouselIndex} setCarouselIndex={setCarouselIndex} />
      //       <BigSlider carouselIndex={carouselIndex} setCarouselIndex={setCarouselIndex} /> */}
      //     </div>
      //   </Box>
      //   <PurchaseOverviewComponent productId={productId as string} />
      // </div>
    // </Typography>
  // )
}