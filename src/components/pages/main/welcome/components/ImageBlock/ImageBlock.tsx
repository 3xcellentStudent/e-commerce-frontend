import WelcomeSchema from "@/data.models/pages/main/sections/welcome/schema"
import styles from "./styles.module.scss"
import Image from "next/image"

interface Props {
  data: WelcomeSchema["imageBlock"]
}

export default function ImageBlock({data}: Props){

  return(
    <div className={`${styles.container}`}>
      <div className={`${styles.image_wrapper} w-full h-full relative`}>
        <picture>
          <Image className={`${styles.picture} absolute top-0 left-0 w-full h-full`} width={1920} height={1080} 
          src="/images/bkind12-modif-LIGHT-0(1).png" alt={data.alt} />
        </picture>
      </div>
    </div>
  )
}