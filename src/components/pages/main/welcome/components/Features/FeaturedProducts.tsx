import Image from "next/image";
import { ReactNode } from "react";
import styles from "./styles.module.scss"
import model from "@/models/pages/main/sections/features/model.json"

export default function Features(){

  return(
    <section className={`${styles.section} bg-main-neutral`}>
      <div className={`${styles.wrapper} flex`}>
        <div className={`${styles.container} flex`}>
          <h2 className="text-5xl font-bold text-content-neutral">{model.title}</h2>
          <h4 className={`text-accent ${styles.description}`}>{model.description}</h4>
          <ul className={styles.list}>
            {model.features.map((content) => <li className={`${styles.list_item} relative before:bg-main-accent`} key={content}>{content}</li>)}
          </ul>
        </div>

        <div>
          <Image className="bg-stone-500" width={600} height={600} src={"/images/bkind12-modif-LIGHT-0(crop).png"} alt="Product image" />
        </div>
      </div>
    </section>
  );
}