import { CartProductVariationModel } from "@/types/cart/variation/cart.variation.types"

export default class ProductOptionsDto {
  productName: string
  productId: string
  unitAmount: string
  quantity: number
  // stockStatus: boolean
  // value: string

  constructor(source: CartProductVariationModel){
    this.productName = source.variationName
    this.productId = source.id
    this.unitAmount = source.stockInfo.price
    this.quantity = source.customerSelectedQuantity
    // this.stockStatus = obj.stockStatus
    // this.value = obj.value
  }
}