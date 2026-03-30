import { ProductVariationModel } from "@/types/api/product/variation/product.variation.model";

export interface CartProductVariationModel extends ProductVariationModel {
  customerSelectedQuantity: number;
}