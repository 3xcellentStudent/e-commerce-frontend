'use client'
import LinkIconSVG from "@/components/SVG/link/LinkIconSVG/LinkIconSVG";
import styles from "./style.module.scss"
import { useAppSelector } from "@/lib/redux/hooks"
import CartTrashIconSVG from "@/components/SVG/cart/TrashIcon/TrashIcon";
import CartTrash from "./components/CartTrash/CartTrash";
import Counter from "./components/Counter/Counter";


export default function CartList(){

  const store = useAppSelector(store => store.cart);

  return(
    <div className={`${styles.container}`}>
      <ul className={styles.list}>
        {store.map(({parentId, id, variationName, collectionName, stockInfo, variationOptions, image, customerSelectedQuantity}, index) => {
          const pathToProduct = process.env.NEXT_PUBLIC_CLIENT_PRODUCT + "/" + parentId;
          
          return(
            <li className={`${styles.list_item} flex flex-col`} 
            key={variationName + index}>
              <section className="w-[1rem] h-max">

              </section>
              <div className={`${styles.list_item_content_container} flex flex-row w-full justify-between hover:bg-main-neutral/100 
              transition duration-150 bg-main-neutral/30`}>
                <section className="flex flex-row">
                  <div className="mr-4 overflow-hidden rounded-xl">
                    <a className="relative w-[5rem] h-[5rem] block" href={pathToProduct}>
                      <img className="absolute w-full h-full top-0 left-0 object-scale-down" src={image[0].srcset} alt={variationName} />
                      <div>
                      </div>
                    </a>
                  </div>
                  <div className="flex flex-col">
                    <a className="relative block flex flex-row items-center pr-[1.5rem]" href={pathToProduct}>
                      <h3 className={`${styles.title} font-bold text-lg`}>{variationName}</h3>
                      <LinkIconSVG tailwindFill="fill-black" tailwindStyles="absolute right-0 w-[1rem] h-[1rem]" />
                    </a>
                    <p className="text-sm">
                      <span className="font-bold mr-1.5">{variationOptions.type}:</span>
                      <span>{variationOptions.name}</span>
                    </p>
                  </div>
                </section>
                
                <section className="flex flex-col justify-between items-end">
                  <CartTrash styles={`${styles.trash}`} id={id} variationName={variationName} />
                  <Counter count={customerSelectedQuantity} index={index} />
                </section>
              </div>

              {store.length - 1 > index ? (
                <div className={`${styles.list_item_gap} bg-slate-200`}></div>
              ) : (
                <></>                
              )}
            </li>
          )
        })}
      </ul>
    </div>
  )
}