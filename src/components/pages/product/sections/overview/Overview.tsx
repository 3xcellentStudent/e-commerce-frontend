import styles from "./styles.module.scss";
import Purchase from './parts/PurchaseOverviewComponent/Purchase';
import BigSlider from './parts/CarouselOverviewComponent/BigCarousel/BigCarousel';
import SmallSlider from './parts/CarouselOverviewComponent/SmallCarousel/SmallCarousel';
// import { useState } from 'react';
import { GlobalDataType } from '@/types/main/globalData.type';
import PurchaseOverviewComponent from './parts/PurchaseOverviewComponent/PurchaseOverviewComponent';
import { ProductFullModel } from '@/types/global/model/product/product.full.model';

export default function Overview({
  props: {descriptions, productVariations, id: parentId, reviewsSnapshot: {total: countOfReviews}, productName, collectionName, rating}
}: {props: ProductFullModel}){

  // const [carouselIndex, setCarouselIndex] = useState<number>(0)

  return(
    <section className='styles.section'>
      <div className={`${styles.wrapper}`}>
        <div className={`w-[50%] ${styles.slider_container}`} >
          <div className='w-full flex flex-row' >
            {/* <SmallSlider carouselIndex={carouselIndex} setCarouselIndex={setCarouselIndex} />
            <BigSlider carouselIndex={carouselIndex} setCarouselIndex={setCarouselIndex} /> */}
          </div>
        </div>
        <PurchaseOverviewComponent props={{descriptions, productVariations, parentId, countOfReviews, productName, rating, price: "0.0", collectionName}} />
      </div>
    </section>
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
  )
}