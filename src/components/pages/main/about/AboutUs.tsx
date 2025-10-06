import TitleCard from "@/components/common/TitleCard/TitleCard"
import styles from "./styles.module.scss"

export default function AboutUs(){

  return(
    <section className={styles.section}>
      <div className={styles.container}>
        <div className="">
          <TitleCard 
            description="Some description about us"
            smallTitle="A little bit"
            title="About Us"
            styles={{}}
          />
        </div>
        <div className=""></div>
        <div className=""></div>
        <div className=""></div>
      </div>
    </section>
  )
}