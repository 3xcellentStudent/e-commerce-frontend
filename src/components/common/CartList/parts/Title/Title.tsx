import Link from "next/link";
import { useSelector } from "react-redux";
import styles from "./styles.module.scss"
import styled from "styled-components";
// import { GlobalDataType } from "@/types/main/globalData.type";

interface Props {
  productId: string
  productName: string
}

const CustomLink = styled(Link)({
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  fontWeight: "bold"
})

export default function Title({productId, productName}: Props){

  // const {optionalText} = useSelector(({
  //   globalData: {colors: {text}}
  // }: {globalData: GlobalDataType}) => (text))

  return(
    <div className="h-[50%]">
      <h6 className="w-min flex items-center text-base overflow-hidden">
        {/* <CustomLink href={`http://localhost:3000/pages/product/${productId}`} className="truncate duration-200" 
        sx={{"&:hover": {color: optionalText.hex, [`& .${styles.underline}`]: {left: 0}}}} >
          {productName}
          <OpenInNewIcon className="ml-1 w-4 h-5 pb-0.5" />
          <Box className={styles.underline} sx={{backgroundColor: optionalText.hex}} />
        </CustomLink> */}
      </h6>
    </div>
  )
}