import { ProductVariationModel } from "@/types/api/product/variation/product.variation.model"
import CartProductVariationModel from "@/types/cart/variation/cart.variation.types";

class CartEntityDto implements CartProductVariationModel {
  public id: ProductVariationModel["id"];
  public parentId: ProductVariationModel["parentId"];
  public stockInfo: ProductVariationModel["stockInfo"];
  public variationName: ProductVariationModel["variationName"];
  public variationOptions: ProductVariationModel["variationOptions"];
  public image: ProductVariationModel["image"];
  public collectionName: ProductVariationModel["collectionName"];
  public createdAt: ProductVariationModel["createdAt"];
  public updatedAt: ProductVariationModel["updatedAt"];
  public customerSelectedQuantity: number;

  constructor(productEntity: ProductVariationModel){
    this.id = productEntity.id;
    this.parentId = productEntity.parentId;
    this.stockInfo = productEntity.stockInfo;
    this.variationName = productEntity.variationName;
    this.variationOptions = productEntity.variationOptions;
    this.image = productEntity.image;
    this.collectionName = productEntity.collectionName;
    this.createdAt = productEntity.createdAt;
    this.updatedAt = productEntity.updatedAt;
    this.customerSelectedQuantity = 0;
  }
}

export default CartEntityDto;