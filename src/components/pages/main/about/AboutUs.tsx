import TitleCard from "@/components/common/TitleCard/TitleCard"
import styles from "./styles.module.scss"

export default function AboutUs(){

  return(
    <section className={`${styles.section} bg-brown-dark/30`}>
      <div className={styles.container}>
        <div className={styles.description}>
          <TitleCard 
            smallTitle="A little bit"
            title="About Us"
            description="Some description about us"
            styles={{
              smallTitle: "text-gold uppercase text-sm font-bold"
            }}
          />
        </div>
        <div className=""></div>
        <div className=""></div>
        <div className=""></div>
      </div>
    </section>
  )
}