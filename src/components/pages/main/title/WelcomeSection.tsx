import styles from "./styles.module.scss"
import RightBlock from "./components/RightBlock";
import LeftBlock from "./components/LeftBlock";

export default function WelcomeSection(){

  const backgroundImage1 = "https://thumbs.dreamstime.com/b/drop-jojoba-oil-being-applied-to-dry-hair-roots-neutral-background-380292436.jpg";
  const backgroundImage2 = "https://beautyfrombees.ca/cdn/shop/files/BFB-Group-BodyCreme-min.jpg?v=1724688615&width=1445";

  const textArray1 = ["Natural Cosmetic", "Purity for", "Every Skin"]
  const textArray2 = ["The Air Waterless Diffuser fills your space with clean, natural aromas—no water or heat required. It uses ultra-efficient cold air technology to scent up to 1500 sq.-ft. for up to 30 days with ease. With adjustable scent strength and mess-free refills, it’s designed for a seamless and safe scenting experience. Enjoy a beautifully scented home with minimal effort and maximum impact."]

  return(
    <section className={`${styles.section} text-brown-dark bg-light`} id='main-page-title-section'>
      <div className={styles.container}>
        <LeftBlock backgroundImage={backgroundImage2} textArray={textArray1}/>
        <RightBlock backgroundImage={backgroundImage1} textArray={textArray2}/>
      </div>
    </section>
  )
}