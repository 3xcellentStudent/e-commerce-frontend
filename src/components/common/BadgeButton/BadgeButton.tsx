// import { Badge, styled} from "@mui/material"
import { ReactNode } from "react"
import { useDispatch, useSelector } from "react-redux"
import { CartObjectType } from "@/types/cartTypes/cartObject.types"

import { GlobalDataType } from "@/types/main/globalData.type"

interface Props {
  className?: string
  children: ReactNode
}

// interface CustomBadgeThemeType {color: string, backgroundcolor: string}

// const CustomBadge = styled(Badge)(({backgroundcolor, color}: CustomBadgeThemeType) => ({
// const CustomBadge = styled(Badge)(() => ({
//   "& .MuiBadge-badge": {
//     // backgroundColor: backgroundcolor,
//     // color: color,
//   },
// }));

export default function BadgeButton({className, children}: Props){

  // const dispatch = useDispatch()

  // const {cart: {length}} = useSelector(({cartObject}: {cartObject: CartObjectType}) => cartObject)

  // const {secondaryBg, primaryText} = useSelector(({
  //   globalData: {colors: {backgrounds, text}}
  // }: {globalData: GlobalDataType}) => ({...backgrounds, ...text}))

  function handleClick(){
    // dispatch(actionCallCartState({type: CART_IS_OPEN_SAVE_CONST, payload: null}))
  }

  return(
    <button onClick={handleClick}>
      {/* <CustomBadge className={className} 
      badgeContent={length}>
        {children}
      </CustomBadge> */}
    </button>
  )
}