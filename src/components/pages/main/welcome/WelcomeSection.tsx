import styles from "./styles.module.scss"
import TextBlock from "./components/TextBlock/TextBlock";
import model from "@/models/pages/main/sections/welcome/model.json";
import ImageBlock from "./components/ImageBlock/ImageBlock";
import CurvedBackgroundSVG from "@/components/SVG/other/CurvedBackground";

export default function WelcomeSection(){

  const backgroundImage1 = "https://thumbs.dreamstime.com/b/drop-jojoba-oil-being-applied-to-dry-hair-roots-neutral-background-380292436.jpg";
  const backgroundImage2 = "https://beautyfrombees.ca/cdn/shop/files/BFB-Group-BodyCreme-min.jpg?v=1724688615&width=1445";

  return(
    <section className={`${styles.section} pt-section-top`} id='main-page-title-section'>
      <div className={`base-container ${styles.container} relative`}>
        <TextBlock data={model.textBlock} />
        <ImageBlock data={model.imageBlock} />
        {/* <RightBlock backgroundImage={backgroundImage1} textArray={textArray2}/> */}
      </div>

      {/* <CurvedBackgroundSVG className={`absolute right-0 top-0 fill-content-muted h-[calc(100svh+1.5rem)]`} /> */}
      <CurvedBackgroundSVG className={`absolute right-0 top-0 fill-aux-base h-[calc(100svh+1rem)]`} />
    </section>
  )
}

          // M 54,0 L 54,0 54,540 
          // M 108,0 L 108,0 108,540
          // M 162,0 L 162,0 162,540
          // M 216,0 L 216,0 216,540
          // M 270,0 L 270,0 270,540
          // M 324,0 L 324,0 324,540
          // M 378,0 L 378,0 378,540
          // M 432,0 L 432,0 432,540
          // M 486,0 L 486,0 486,540
          // M 540,0 L 540,0 540,540
          
          // M 0,54 L 0,54 540,54
          // M 0,108 L 0,108 540,108
          // M 0,162 L 0,162 540,162
          // M 0,216 L 0,216 540,216
          // M 0,270 L 0,270 540,270
          // M 0,324 L 0,324 540,324
          // M 0,378 L 0,378 540,378
          // M 0,432 L 0,432 540,432
          // M 0,486 L 0,486 540,486
          // M 0,540 L 0,540 540,540