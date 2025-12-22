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
          return <DoubleSidesDropSVG mode="filled" color='gold' iconSize={iconSize} />
        } else if(index + 1 > Math.round(+rating) || Number.isInteger(+rating)) {
          return <DoubleSidesDropSVG mode="emtpy" color='gold' iconSize={iconSize} />
        } else {
          return <DoubleSidesDropSVG mode="half" color='gold' iconSize={iconSize} />
        }
      })}
      <span>{rating}</span>
    </div>
  )
}
