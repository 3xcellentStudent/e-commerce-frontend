import ReviewFullStar from "@/components/ui/icon/review-star/ReviewFullStar"
import { RatingSummary } from "@/types/schema/product/parent/product.parent.type"
import { Fragment } from "react/jsx-runtime";

interface Props {
  ratingSummary: RatingSummary;
  styles?: {
    list?: string;
    star?: string;
  }
}

export default function RatingStars({ratingSummary, styles}: Props){

  return(
    <ul className={styles?.list}>
      {
        [...Array(5)].map((_, idx) => {
          const star = idx + 1;
          return(
            <li className={styles?.star} key={Math.random() + "-is-" + ratingSummary.averageRating}>
              {
                star === Math.round(ratingSummary.averageRating) || star <= ratingSummary.averageRating 
                ? <ReviewFullStar key={star} styles={{svg: "fill-amber-400 stroke-amber-400 stroke-2 h-4 w-4"}} />
                : <ReviewFullStar key={star} styles={{svg: "fill-muted/50 stroke-muted stroke-2 h-4 w-4"}} />
              }            
            </li>
          )
          // if(star === Math.round(ratingSummary.averageRating)){
          //   return <ReviewFullStar key={star} styles={{svg: "fill-amber-400 stroke-amber-400 h-4 w-4"}} />
          // } else if(star  <= ratingSummary.averageRating){
          //   return <ReviewFullStar key={star} styles={{svg: "fill-amber-400 stroke-amber-400 h-4 w-4"}} />
          // } else {
          //   return <ReviewFullStar key={star} styles={{svg: "fill-none stroke-amber-400 h-4 w-4"}} />
          // }
        })
      }
    </ul>
  )
}