import { PayloadAction } from "@reduxjs/toolkit"
import { ProductVariationModel } from "@/types/global/model/product/variation/product.variation.model"
import { ProductFullModel } from "@/types/global/model/product/product.full.model";

export interface CartStateType {
  productName: string;
  parentId: string;
  variationId: string;
  productImg: string;
  quantity: number;
  quantityMax: number;
  price: string;
  stockInfo: ProductVariationModel["stockInfo"];
  variationName: ProductVariationModel["variationName"];
}

export interface CartStateActionsType {
  add: PayloadAction<CartStateType>
  remove: PayloadAction<number>
  increaseQuantity: PayloadAction<number>
}