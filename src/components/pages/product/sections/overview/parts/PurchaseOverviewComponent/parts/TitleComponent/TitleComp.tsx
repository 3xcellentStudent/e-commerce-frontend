import RatingComp from "@/components/pages/product/common/RatingComp/RatingComp";
import { ProductFullModel } from "@/types/global/model/product/product.full.model";
import { ProductVariationModel } from "@/types/global/model/product/variation/product.variation.model";
// import { ProductDataType } from "@/types/main/productData.type";

interface Props {
  countOfReviews: ProductFullModel["reviewsSnapshot"]["total"];
  productName: ProductFullModel["productName"];
  collectionName: ProductFullModel["collectionName"];
  rating: ProductFullModel["rating"];
  price: ProductVariationModel["stockInfo"]["price"]
}

export default function TitleComp({collectionName, countOfReviews, productName, rating, price}: Props){

  // const {category, title, rating, price, countOfReviews} = useSelector(({
  //   productData: {title, rating, stockInfo}
  // }: {productData: ProductDataType}) => ({title, rating, ...stockInfo}))

  // const sxBox = {display: "flex", justifyContent: "space-between", width: "min-content", flexDirection: "column", alignItems: "start"}

  return(
    <div className="flex w-min column items-start justify-between" >
      <div className="flex flex-row items-end mb-2">
        <h2 className="text-4xl font-bold">{productName}</h2>
        <h3 className="text-xs uppercase mb-1 ml-3 whitespace-nowrap">
          {collectionName.replace("-", " ")}
        </h3>
      </div>
      <RatingComp iconSize={40} rating={rating as string} content={`${countOfReviews} reviews`} />

      <h5 className="uppercase mt-4 text-3xl" >${price} CAD</h5>

      <div className="w-[100px] "></div>
    </div>
  )
}