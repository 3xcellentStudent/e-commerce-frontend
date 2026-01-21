import WelcomeSchema from "@/data.models/pages/main/sections/welcome/schema"
import styles from "./styles.module.scss"

interface Props {
  data: WelcomeSchema["imageBlock"]
}

export default function ImageBlock({data}: Props){

  return(
    <div className={`${styles.container}`}>
      <div className={`${styles.image_wrapper} w-full h-full relative`}>
        <picture>
          <img className={`${styles.picture} absolute top-0 left-0 object-scale-down w-full h-full`} src={data.src} srcSet={data.srcset} alt={data.alt} />
        </picture>
      </div>
    </div>
  )
}