
interface Props {
  title: string
  smallTitle: string
  description : string
  styles: {
    container?: string
    article?: string
    smallTitle?: string
    title?: string
    description?: string
  }
}

export default function TitleCard({smallTitle, title, description, styles}: Props){

  return(
    <div className={styles.container}>
      <h5 className={styles.smallTitle || "text-gold-white uppercase text-sm font-bold"}>{smallTitle}</h5>
      <h2 className={styles.title || "text-4xl text-brown-dark mt-2"}>
        {title}
      </h2>
      <article className={styles.article}>
        <p className={styles.description || "text-brown-dark/70 text-base"}>
          {description}
        </p>
      </article>
    </div>
  )
}