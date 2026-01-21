import styles from "./styles.module.scss"
import TextBlock from "./components/TextBlock/TextBlock";
import { welcome } from "@/data.models/pages/main/sections";
import ImageBlock from "./components/ImageBlock/ImageBlock";

export default function WelcomeSection(){

  const backgroundImage1 = "https://thumbs.dreamstime.com/b/drop-jojoba-oil-being-applied-to-dry-hair-roots-neutral-background-380292436.jpg";
  const backgroundImage2 = "https://beautyfrombees.ca/cdn/shop/files/BFB-Group-BodyCreme-min.jpg?v=1724688615&width=1445";

  return(
    <section className={`${styles.section} pt-section-top`} id='main-page-title-section'>
      <div className={`base-container ${styles.container}`}>
        <TextBlock data={welcome.textBlock} />
        <ImageBlock data={welcome.imageBlock} />
        {/* <RightBlock backgroundImage={backgroundImage1} textArray={textArray2}/> */}
      </div>
    </section>
  )
}