import { ProductVariationModel } from "@/types/global/model/product/variation/product.variation.model"

// export interface FieldsRefType {
//   background: string
//   name: string
//   type: string
//   value: string
//   index: number
//   stockStatus: ProductVariationModel["stockInfo"]
// }

// export interface SetTotalObjType {
//   elemIdx: number
//   index: number
//   background: string,
//   name: string, 
//   type: string, 
//   value: string
//   stockStatus: boolean
// }

export interface FieldsRefType {
  name: string
  value: string
  index: number
  stockStatus: ProductVariationModel["stockStatus"]
}

export interface SetTotalObjType {
  elemIdx: number
  index: number
  name: string, 
  value: string
  stockStatus: boolean
}
