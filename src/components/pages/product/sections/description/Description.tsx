import DescriptionContent from './parts/DescriptionContent/DescriptionContent'
import DescriptionText from './parts/DescriptionText/DescriptionText'
import { useSelector } from 'react-redux'
import { Typography } from '@mui/material'
// import { ProductDataType } from '@/types/main/productData.type'
import SectionTitle from '@/components/common/SectionTitle/SectionTitle'
import styles from "./styles.module.scss"
import { GlobalDataType } from '@/types/main/globalData.type'
import { ProductGetRecursiveDto } from '@/types/dto/mongodb/product/product.get.recursive.dto'

export default function Description(){

  const {presentable, mediaContent} = useSelector(({
    productData: {descriptions, mediaContent}
  }: {productData: ProductGetRecursiveDto}) => ({...descriptions, mediaContent}))

  return(
    <section  className={`w-full ${styles.section}`}>
      <div className={`${styles.wrapper}`}>
        <DescriptionText description={presentable} />
        <DescriptionContent descriptionVideo={mediaContent?.titleContent?.descriptionVideo} />
      </div>
      {/* <SectionTitle>Product Description</SectionTitle> */}
    </section>
  )
}