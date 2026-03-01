import Image from "next/image";
import styles from "./styles.module.scss"
import StarFilledSVG from "@/components/SVG/other/StarFilledSVG";
import CheckmarkSealSVG from "@/components/SVG/other/CheckmarkSealSVG";
import AnimalPawSVG from "@/components/SVG/other/AnimalPawSVG";
import { ReactNode } from "react";

export default function Advantages(){

  const listElements: {icon: ReactNode, title: string, description: string}[] = [
    {
      icon: <StarFilledSVG tailwindColor="stroke-main-base" className={`${styles.list_item_icon}`} />, 
      title: "Quality Ingredients", 
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.", 
    },
    {
      icon: <CheckmarkSealSVG tailwindColor="fill-main-base" className={`${styles.list_item_icon}`} />, 
      title: "Sustainability", 
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.", 
    },
    {
      icon: <AnimalPawSVG tailwindColor="fill-main-base" className={`${styles.list_item_icon}`} />, 
      title: "Cruelty-Free", 
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.", 
    },
  ]

  return(
    <section className={`${styles.section} flex`}>
      <div >
        <Image width={600} height={600} src={""} className="bg-stone-500" alt="Product image" />
      </div>

      <div className={`${styles.container} flex`}>
        <h2 className="text-5xl font-bold text-content-neutral text-center">Why Choose Us ?</h2>
        <p className={`text-accent ${styles.description}`}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio, minima eos! Id eos architecto quas aperiam tempore, vitae dolore, cupiditate illum iusto culpa earum! Culpa placeat similique eveniet aliquam odit.</p>
        <ul className={styles.list}>
          {listElements.map(({icon, title, description}) => {
            return(
              <li key={title} className={`${styles.list_item} flex flex-row items-center`}>
                <div className={`${styles.list_item_icon_container} relative bg-main-neutral`}>
                  {icon}
                </div>
                <div>
                  <h4 className={`text-content-neutral uppercase font-bold ${styles.list_item_title}`}>{title}</h4>
                  <p>{description}</p>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}