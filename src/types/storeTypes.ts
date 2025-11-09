import { CartObjectType } from "./cartTypes/cartObject.types"
import { ProductGetRecursiveDto } from "./dto/mongodb/product/product.get.recursive.dto"
import { ShippingAddressType } from "./payment/payment"

export interface InitialState {
  cartObject: CartObjectType,
  productData: ProductGetRecursiveDto,
  shipping: ShippingAddressType,
  isOpenCart: boolean,
}

export interface MoveCoordinates {pageY: number, pageX: number}

export interface UpCoordinates {pageY: number, pageX: number, isUped: boolean}

export interface FieldItemType {
  background: string
  index: number
  name: string
  stockStatus: boolean
  type: string
  value: string
}

export interface CartProduct {
  productName: string
  productId: string
  productImg: string
  quantity: number
  quantityMax: number
  price: string
  fields: FieldItemType[]
  displayedField: FieldItemType | {name: string, value: string}
  checked: boolean
}