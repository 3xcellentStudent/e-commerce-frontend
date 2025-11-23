import { GlobalDataType } from '@/types/main/globalData.type';
// import { useEffect } from 'react';
import { useSelector } from 'react-redux';

interface Props {
  rating: string
  content?: string
  iconSize?: number
}

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://.../data`)
  const data = await res.json()
 
  // Pass data to the page via props
  return { props: { data } }
}

export default function RatingComp({rating, content, iconSize: fontSize}: Props){
  
  // const {elementsOptionalBg, primaryText} = useSelector(({
  //   globalData: {colors: {backgrounds, text}}
  // }: {globalData: GlobalDataType}) => ({...backgrounds, ...text}))

  // useEffect(() => document.querySelectorAll(".css-1c99szj-MuiRating-icon")
  // .forEach(selector => selector.setAttribute("style", `color: rgba(${elementsOptionalBg.rgb});`)), [elementsOptionalBg])

  return (
    <div className="h-min flex items-center">
      {/* <Stack>
        <Rating value={+rating} precision={0.1} readOnly
        icon={<StarRoundedIcon sx={{fontSize, color: "#000", stroke: "#fff"}} />} 
        emptyIcon={<StarBorderRoundedIcon sx={{fontSize, color: "#000", stroke: "#fff"}} />} 
        />
      </Stack>
      <Typography className='ml-2.5 whitespace-nowrap text-xl' sx={{color: "#ccc"}} component="span">{content}</Typography> */}
    </div>
  )
}
