import RatingComp from "@/components/pages/product/common/RatingComp/RatingComp";
import { GlobalDataType } from "@/types/main/globalData.type";
import { useSelector } from "react-redux";
import styles from "./styles.module.scss"
import NextPlanIcon from '@mui/icons-material/NextPlan';
import { Slider, Stack } from "@mui/material";
import Scale from "./parts/Scale/Scale";
import { ProductFullModel } from "@/types/global/model/product/product.full.model";

interface Props {
  reviewsSnapshot: ProductFullModel["reviewsSnapshot"];
  rating: ProductFullModel["rating"];
}

export default function ReviewAnalyticsPanel({reviewsSnapshot, rating}: Props){

  // const {productVariations, reviewsSnapshot, rating} = useSelector(({
  //   productData: {productVariations, rating, reviewsSnapshot}
  // }: {productData: ProductFullModel}) => ({productVariations, rating, reviewsSnapshot}))

  return(
    <div className={`flex sticky ${styles.container}`}>
      <div>
        <div className={`${styles.reviews_count_container}`}>
          <p className="text-3xl">
            Based on <span className="text-6xl font-bold underline">
              {Object.values(reviewsSnapshot).reduce((acc, value) => acc + value, 0)}
            </span> reviews
          </p>
        </div>

        <div className="mb-4 pr-8 whitespace-nowrap w-min font-bold relative">
          Overall rating
          <div className={`${styles.arrow_icon}`}>
            {/* <NextPlanIcon sx={{fill: elementsOptionalBg.hex}} /> */}
          </div>
        </div>

        <div className='flex flex-row'>
          <div className='mr-4 text-7xl'>{rating}</div>
          <div className='flex flex-col justify-end'>
            <RatingComp iconSize={60} rating={rating || "5"}/>
          </div>
        </div>

        <Stack>
          <Scale rating={5} value={reviewsSnapshot.five} max={reviewsSnapshot.total} />
          <Scale rating={4} value={reviewsSnapshot.four} max={reviewsSnapshot.total} />
          <Scale rating={3} value={reviewsSnapshot.three} max={reviewsSnapshot.total} />
          <Scale rating={2} value={reviewsSnapshot.two} max={reviewsSnapshot.total} />
          <Scale rating={1} value={reviewsSnapshot.one} max={reviewsSnapshot.total} />
        </Stack>
      </div>
    </div>
  )
}