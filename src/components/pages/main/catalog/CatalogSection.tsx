import styles from './styles.module.scss'

export default function CatalogSection(){

  return(
    <section className={`${styles.section} text-brown-dark `} id='main-page-title-section'>
      <div className={`${styles.container} flex`}>
        <div className={styles.description}>
          <h5 className='text-gold-white uppercase text-sm font-bold'>Catalog</h5>
          <h2 className='text-4xl text-brown-dark mt-2'>
            Our Products
          </h2>
          <article className={styles.description_article}>
            <p className='text-brown-dark/70 text-base'>
              In here, you can see some of our categories sorted for you. You can scroll them and click which you like for more details to see more products.
            </p>
          </article>
        </div>

        <div className={styles.carousel}>
          <ul className={styles.carousel_container}>
            <li className={styles.carousel_item}>First</li>
          </ul>
        </div>
      </div>
    </section>
  )
}