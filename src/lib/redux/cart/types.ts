import { PayloadAction } from "@reduxjs/toolkit"
import { ProductVariationModel } from "@/types/api/product/variation/product.variation.model"

export interface CartStateActionsType {
  add: PayloadAction<ProductVariationModel>
  remove: PayloadAction<number>
  increaseQuantity: PayloadAction<number>
}