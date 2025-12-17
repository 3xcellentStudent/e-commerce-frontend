import DoubleSidesDropSVG from '@/components/SVG/drops/DoubleSidesDropSVG';
import { GlobalDataType } from '@/types/main/globalData.type';

interface Props {
  rating: number
  iconSize: "large" | "medium" | "small"
}

export default function RatingComp({rating, iconSize}: Props){
  
  return(
    <div className='flex flex-row items-center'>
      {Array.from({length : 5}).map((_, index) => {
        if(index + 1 <= rating){
          console.log("index < rating")
          return <DoubleSidesDropSVG mode="filled" color='gold' iconSize={iconSize} />
        } else if(index + 1 > Math.round(+rating) || Number.isInteger(+rating)) {
          console.log("index > rating && Number.isInteger(rating)")
          return <DoubleSidesDropSVG mode="emtpy" color='gold' iconSize={iconSize} />
        } else {
          console.log("else")
          return <DoubleSidesDropSVG mode="half" color='gold' iconSize={iconSize} />
        }
        // <DoubleSidesDropSVG mode={index < rating ? "filled" : Number.isInteger(rating) ? "emtpy"} />
      })}
      <span>{rating}</span>
    </div>
  )
}
