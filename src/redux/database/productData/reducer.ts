import dataModelProduct from "@/data.models/product/data.model.product.json"
// import { ProductDataType } from "@/types/main/productData.type"
import { PRODUCT_DATA_SAVE } from "../constants"
import { ProductGetRecursiveDto } from "@/types/dto/mongodb/product/product.get.recursive.dto";

export default function productDataReducer(state = dataModelProduct, {type, payload}: {type: string, payload: ProductGetRecursiveDto}){
  switch(type){
    case PRODUCT_DATA_SAVE:
      return {...payload}
    default: return state;
  }
}