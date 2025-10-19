import TitleCard from '@/components/common/TitleCard/TitleCard'
import CategoryCard from './components/CategoryCard/CategoryCard'
import data from "./data.json"

import styles from './styles.module.scss'

export default function CatalogSection(){

  return(
    <section className={`${styles.section}`} id='main-page-title-section'>
      <div className={`${styles.container} flex`}>
        <div className={styles.carousel}>
          <ul className={styles.carousel_container}>
            <li>
              <TitleCard 
                smallTitle='Catalog' 
                title='Our Products' 
                description='In here, you can see some of our categories sorted for you. You can scroll them and click which you like for more details to see more products.' 
                styles={{
                  article: "mt-[2rem]", 
                  container: "w-[288px] h-[288px] pr-[1.5rem] border-r border-b border-[#ccc] border-solid",
                  description: "text-brown-dark/70 text-base",
                  smallTitle: "text-gold uppercase text-sm font-bold",
                  title: "text-5xl text-brown-dark mt-2",
                }}
              />
            </li>

            {data.map((props, index) => {
              return(
                <li key={index} className={styles.carousel_item}>
                  <CategoryCard {...props} />
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}