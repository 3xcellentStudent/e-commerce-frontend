import SelectionComp from "./parts/SelectionComponent/SelectionComp"
import TitleComp from "./parts/TitleComponent/TitleComp"
import styles from "./styles.module.scss"
import AddCartComp from "./parts/AddCartComp/AddCartComp";
import { ProductFullModel } from "@/types/api/product/product.full.model";
import ProductApi from "@/api/database/product/product.api";
import RatingComp from "@/components/pages/product/common/RatingComp/RatingComp";
import StockBoxSVG from "@/components/SVG/stock/StockBoxSVG";
import GoogleSVG from "@/components/SVG/payments/GooglePaySVG";
import PlusSVG from "@/components/SVG/simple/PlusSVG";
import ApplePaySVG from "@/components/SVG/payments/ApplePaySVG";
import CardPaySVG from "@/components/SVG/payments/CardPaySVG";

interface Props {
  id: string;
}

export default async function PurchaseOverviewComponent({id}: Props){

  const {
    collectionName, rating, productName, reviewsSnapshot: {total: countOfReviews}, productVariations, descriptions
  }: ProductFullModel = await ProductApi.getOneByIdRecursive(id, "essential-oils");

  return(
    <div className="flex flex-col">
        {/* <TitleComp collectionName={collectionName} countOfReviews={countOfReviews} 
        price={productVariations[0].stockInfo.price} productName={productName} rating={rating} /> */}

        <div className="flex w-min flex-col items-start justify-between">
          <div className="flex w-min flex-col text-end mb-2 whitespace-nowrap uppercase">
            <h3 className="w-full text-sm mb-2 relative before:bg-gold-white before:z-0 before:w-full before:absolute before:h-[2px] before:top-1/2 before:right-[0]">
              <span className="bg-white relative z-1 pl-2">{collectionName.replace("-", " ")}</span>
            </h3>
            <h2 className="text-4xl font-bold">{productName}</h2>
          </div>
          <RatingComp rating={rating} iconSize="medium" />
          {/* <RatingComp iconSize={40} rating={rating} content={`${countOfReviews} reviews`} /> */}
          <h5 className="uppercase mt-4 text-3xl">${productVariations[0].stockInfo.price} CAD</h5>
        </div>
        <div className="">
          <p className={`text-lg mt-4 ${styles.descriptions_summary}`}>{descriptions.summary}</p>
        </div>

        {/* <SelectionComp carouselState={carouselState} setTotalObj={setTotalObj} /> */}
      {/* <div clasclsName="mt-3"> */}
        {/* <Quantity action={(result: number) => quantityRef.current = result} 
        quantityMax={quantityMax} text="amt." btnSize={30} theme={colors} 
        quantity={quantityRef?.current} /> */}
      {/* </div> */}

      <div id="in-stock-status" className="flex items-center font-bold">
        {
          productVariations[0].stockInfo.quantityAvailable > 0 ? 
          <>
            <StockBoxSVG severity="success" svgClass="mb-[.75rem] mr-2" iconSize="w-[54px] h-[54px]" />
            <div>In stock: All orders shipping with UPS</div>
          </>
          :
          <>
            <StockBoxSVG severity="error" svgClass="mb-[.75rem]" iconSize="w-[42px] h-[42px]" />
            <div>Not in stock</div>
          </>
        }
      </div>

      {/* <AddCartComp props={() => {
        const {countOfReviews, descriptions, productVariations, ...remains} = props;
        const variationId = productVariations[0].
      }} /> */}
      {/* <StoreProvider> */}
        {/* <AddCartComp {...productVariations[0]} /> */}

      <div className={` flex items-center w-[100%] mt-3`}>
        <AddCartComp product={productVariations[0]}/>
        
        <a className={`${true ? "pointer-events-auto cursor-pointer" : "pointer-events-none cursor-default"}`} href={"#"}>
          <button disabled={false} className={`${styles.button_buy_now} ${true ? "bg-gold" : "bg-coffee"} relative flex items-center`}>
            <span className={`z-[2] w-full text-center absolute left-[50%] translate-x-[-50%] whitespace-nowrap ${styles.button_buy_now_text}`}>
              Buy Now
            </span>
            <div className={`flex flex-row gap-1 ${styles.button_buy_now_icons}`}>
              <GoogleSVG iconSize={24} />
              <ApplePaySVG iconSize={24} />
              <CardPaySVG iconSize={24} />
            </div>
          </button>
        </a>
      </div>
      {/* </StoreProvider> */}
      {/* <AddCartComp inStockStatus={inStockStatus} action={dispatchToCart} /> */}

      {/* <p className="text-lg mt-10">{descriptions.summary}</p> */}
      {descriptions.presentable.map((string, index) => <p key={index} className="text-lg mt-10">{string}</p>)}
    </div>
  )
}



{/* <div className="w-[200px] flex flex-row relative">
            <svg viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"fill="#000000" transform="rotate(0)" className="absolute top-[100px] left-[25px] w-[70px] h-[70px]">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g className="fill-green-light">
                  <path d="M12.295,14.201 C12.43,14.088 12.557,13.969 12.676,13.847 C10.687,12.944 9.178,11.848 7.818,10.739 C6.194,10.735 4.52,10.321 3.663,9.262 C4.94,9.905 6.284,9.908 6.737,9.847 C2.898,6.381 1.835,2.992 1.835,2.992 C3.149,5.052 4.536,6.644 5.894,7.908 C5.325,6.82 5.658,4.808 5.658,4.808 C6.765,8.706 6.895,8.768 6.822,8.802 C7.722,9.531 8.697,10.216 9.509,10.739 C9.217,10.059 9.01,9.068 9.037,7.37 C9.037,7.37 9.759,10.932 10.893,11.809 C11.796,12.33 12.591,12.734 13.207,13.041 C14.183,11.585 14.188,7.703 11.796,6.144 C9.218,4.462 4.871,4.398 0.474,0.096 C-0.841,-1.191 1.603,10.132 5.144,13.289 C7.32,15.234 10.152,15.99 12.295,14.201 L12.295,14.201 Z"></path> <path d="M11.266,14.064 C11.266,14.064 12.446,14.677 13.8,15.275 C15.154,15.873 15.803,15.752 15.879,15.9 C15.957,16.05 15.918,14.258 15.918,14.258 C15.918,14.258 14.09,14.691 12.055,13.562 L11.266,14.064 L11.266,14.064 Z"></path>
                </g>
              </g>
            </g>
            </svg>

            <svg version="1.1" id="drop" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="-25.6 -25.6 307.20 307.20" xmlSpace="preserve" className="absolute top-[47px] left-[3px] w-[100px] h-[100px]" transform="rotate(145)">
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="none" stroke-width="0.512"></g>
              <g id="SVGRepo_iconCarrier">
                <path className="fill-light-warm" d="M200.92,161.22c-1.719-15.675-7.188-29.78-11.758-40.321c-12.295-28.336-29.04-53.468-42.255-72.198 c-2.748-3.895-5.517-7.604-8.447-11.532c-1.321-1.772-2.66-3.565-4.013-5.398c-1.793-2.431-4.588-3.92-7.604-4.054 c-0.148-0.006-0.295-0.01-0.443-0.01c-2.858,0-5.589,1.225-7.491,3.376c-0.229,0.26-0.415,0.463-0.568,0.632 c-0.392,0.432-0.798,0.878-1.243,1.465c-13.113,17.289-23.883,33.004-32.926,48.045c-14.088,23.437-22.938,42.356-28.692,61.346 c-6.162,20.331-5.921,38.327,0.734,55.021c11.583,29.053,39.107,47.825,70.122,47.829c0.004,0,0.005,0,0.009,0 c20.824,0,40.237-8.412,54.66-23.687C196.789,205.018,203.49,184.656,200.92,161.22z"></path>
                <path className="fill-gold" d="M190.979,162.311c-1.438-13.117-5.781-25.42-10.99-37.431c-10.904-25.131-25.516-48.109-41.252-70.413 c-3.922-5.559-8.062-10.964-12.336-16.76c-0.716,0.81-1.052,1.143-1.335,1.516c-11.529,15.2-22.487,30.794-32.322,47.154 c-11.266,18.741-21.318,38.058-27.692,59.094c-4.906,16.188-5.941,32.383,0.453,48.418c18.048,45.268,75.665,55.469,108.23,20.98 C187.627,200.154,193.186,182.419,190.979,162.311z M114.462,204.1c-2.313,3.596-6.677,5.295-11.323,4.355 c-5.597-1.132-10.022-4.076-13.071-8.938c-8.08-12.889-10.28-26.658-6.68-41.512c3.103-12.798,8.474-24.646,14.242-36.366 c0.136-0.276,0.378-0.501,0.22-0.296c-0.678,7.883-1.899,16.166-1.993,24.463c-0.164,14.517,4.584,27.7,12.528,39.768 c1.65,2.505,3.413,4.936,5.089,7.424C115.839,196.508,116.993,200.168,114.462,204.1z"></path>
              </g>
            </svg>

            <svg version="1.1" id="drop" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="-25.6 -25.6 307.20 307.20" xmlSpace="preserve" className="absolute top-[100px] right-[25px] w-[100px] h-[100px]" transform="rotate(180)">
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="none" stroke-width="0.512"></g>
              <g id="SVGRepo_iconCarrier">
                <path className="fill-light-warm" d="M200.92,161.22c-1.719-15.675-7.188-29.78-11.758-40.321c-12.295-28.336-29.04-53.468-42.255-72.198 c-2.748-3.895-5.517-7.604-8.447-11.532c-1.321-1.772-2.66-3.565-4.013-5.398c-1.793-2.431-4.588-3.92-7.604-4.054 c-0.148-0.006-0.295-0.01-0.443-0.01c-2.858,0-5.589,1.225-7.491,3.376c-0.229,0.26-0.415,0.463-0.568,0.632 c-0.392,0.432-0.798,0.878-1.243,1.465c-13.113,17.289-23.883,33.004-32.926,48.045c-14.088,23.437-22.938,42.356-28.692,61.346 c-6.162,20.331-5.921,38.327,0.734,55.021c11.583,29.053,39.107,47.825,70.122,47.829c0.004,0,0.005,0,0.009,0 c20.824,0,40.237-8.412,54.66-23.687C196.789,205.018,203.49,184.656,200.92,161.22z"></path>
                <path className="fill-[#FFCBA4]" d="M190.979,162.311c-1.438-13.117-5.781-25.42-10.99-37.431c-10.904-25.131-25.516-48.109-41.252-70.413 c-3.922-5.559-8.062-10.964-12.336-16.76c-0.716,0.81-1.052,1.143-1.335,1.516c-11.529,15.2-22.487,30.794-32.322,47.154 c-11.266,18.741-21.318,38.058-27.692,59.094c-4.906,16.188-5.941,32.383,0.453,48.418c18.048,45.268,75.665,55.469,108.23,20.98 C187.627,200.154,193.186,182.419,190.979,162.311z M114.462,204.1c-2.313,3.596-6.677,5.295-11.323,4.355 c-5.597-1.132-10.022-4.076-13.071-8.938c-8.08-12.889-10.28-26.658-6.68-41.512c3.103-12.798,8.474-24.646,14.242-36.366 c0.136-0.276,0.378-0.501,0.22-0.296c-0.678,7.883-1.899,16.166-1.993,24.463c-0.164,14.517,4.584,27.7,12.528,39.768 c1.65,2.505,3.413,4.936,5.089,7.424C115.839,196.508,116.993,200.168,114.462,204.1z"></path>
              </g>
            </svg>
          </div> */}