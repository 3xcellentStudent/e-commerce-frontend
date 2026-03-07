import { ReactNode } from "react"
import styles from "./styles.module.scss"

interface Props {
  className?: string;
  children: ReactNode;
  bgColor?: string;
  textColor?: string;
}

// interface CustomBadgeThemeType {color: string, backgroundcolor: string}

// const CustomBadge = styled(Badge)(({backgroundcolor, color}: CustomBadgeThemeType) => ({
// const CustomBadge = styled(Badge)(() => ({
//   "& .MuiBadge-badge": {
//     // backgroundColor: backgroundcolor,
//     // color: color,
//   },
// }));

export default function BadgeButton({className, children, bgColor, textColor}: Props){

  // const dispatch = useDispatch()

  // const {cart: {length}} = useSelector(({cartObject}: {cartObject: CartObjectType}) => cartObject)

  // const {secondaryBg, primaryText} = useSelector(({
  //   globalData: {colors: {backgrounds, text}}
  // }: {globalData: GlobalDataType}) => ({...backgrounds, ...text}))

  function handleClick(){
    // dispatch(actionCallCartState({type: CART_IS_OPEN_SAVE_CONST, payload: null}))
  }

  return(
    <button className={`relative ${className}`} onClick={handleClick}>
      {children}
      <span className={`${styles.badge} absolute top-[-.25rem] right-[-.25rem] ${bgColor || "bg-black"} ${textColor || "text-white"}`}></span>
    </button>
  )
}