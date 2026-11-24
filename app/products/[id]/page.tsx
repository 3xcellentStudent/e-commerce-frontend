import getProductParentById from "@/api/products/products.api.id";
import InteractiveButtonIcon from "@/components/ui/icon/interactive/button/InteractiveButtonIcon";
import ReviewStar from "@/components/ui/icon/review-star/ReviewHalfStar";
import CheckboxOption from "@/components/ui/product/checkbox/CheckboxOption";
import { ChevronLeft as ChevronLeftIcon } from "@animateicons/react/lucide";


interface Props {
  params: {
    id: string
  }
}

export default async function ProductPage(props: Props){

  const params = await props.params;
  
  const {productName, variations} = await getProductParentById({id: params.id});

  return (
    <>
      <main>
        <article className="relative h-[2000px]">
          <figure className="fixed left-0 top-0 w-full">
            <img src={variations[0].image?.src || ""} alt="" />
          </figure>
          {/* <section className="relative z-10 bg-background p-4 rounded-t-2xl mt-[calc(0.796*1svh)]"> */}
          {/* <section className="relative z-10 bg-background p-4 rounded-t-2xl mt-[calc(1.256*100svh)]"> */}
          <section className="relative z-10 bg-background p-4 rounded-t-2xl min-h-screen mt-[55svh]">
            <h1 className="text-2xl font-bold">{productName}</h1>
            {/* <div className="flex items-center gap-2" role="group"
            aria-label={`Рейтинг ${product.rating} из 5 на основе ${product.reviewsCount} re`}>
              <span aria-hidden="true">★★★★☆</span>
              <span>{product.rating}</span>
              <a href="#reviews">({product.reviewsCount} отзывов)</a>
            </div> */}
            <div>
              {[1,2,3,4,5].map((star) => {
                // const isChecked = currentRating === star;
                // const isFilled = star <= activeDisplayRating;

                return (
                  <label
                    key={star}
                    className="group relative cursor-pointer p-0.5"
                  >
                    <input
                      type="radio"
                      name={"Rating"}
                      value={star}
                      checked={true}
                      className="peer sr-only"
                    />
                    <span
                      className={`
                        block rounded-md transition-transform group-active:scale-95
                        ${true ? "text-amber-400" : "text-muted-foreground/40"}
                        peer-focus-visible:ring-2 peer-focus-visible:ring-ring peer-focus-visible:ring-offset-2
                      `}
                    >
                      <ReviewStar styles={{svg: "fill-none stroke-accent"}} />
                    </span>
                    <span className="sr-only">
                      {star} {star === 1 ? "звезда" : star < 5 ? "звезды" : "звёзд"} из 5
                    </span>
                  </label>
                );
              })}
            </div>
            <fieldset>
              {/* <legend>Размер</legend> */}
              <h3 className="">{variations[0].options.attribute}</h3>
              <ul>
                {variations.map(({options, id}, idx) => {
                  return(
                    <CheckboxOption key={id} value={`${options.value} ${options.unit}`} defaultChecked={!idx ? true : false} 
                    styles={{
                      root: `bg-primary/20 text-primary font-bold py-1 p-2 rounded-md text-sm 
                      data-[state=checked]:bg-primary/80 text-white data-[state=checked]:text-secondary`,
                    }} />
                  )
                })}
              </ul>
            </fieldset>
          </section>
        </article>
        {/* <InteractiveButtonIcon styles={{button: "relative z-20"}} Icon={ChevronLeftIcon} size={36} 
        action={!!window ? window.history.back : () => {}}
        /> */}
      </main>
    </>
  );
}
