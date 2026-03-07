import { ProductVariationModel } from "./variation/product.variation.model";

export interface ProductFullModel {
  id: string;
  reviewsId: string[];
  productVariationsId: string[];
  rating: number;
  productName: string;
  descriptions: ProductDescriptions;
  productVariations: ProductVariationModel[];
  specifications: ProductSpecifications;
  mediaContent: MediaContent[];
  reviewsSnapshot: ReviewsSnapshot;
  collectionName: string;
  createdAt: number;
  updatedAt: number;
}

export interface ProductDescriptions {
  summary: string;
  presentable: string[];
}

export interface MediaContent {
  isImage: boolean;
  mediaArray: {
    media: string;
    src: string;
  }[];
}

export interface MediaTitleContent {
  productLogo: string;
  descriptionVideo: string;
}

export interface MediaImage {
  media: string;
  src: string;
}

export interface ProductSpecifications {
  titles: string[];
  properties: ProductSpecificationProperty[];
}

export interface ProductSpecificationProperty {
  name: string;
  array: ProductSpecificationArrayObject[];
}

export interface ProductSpecificationArrayObject {
  name: string;
  value: string;
}

export interface ReviewsSnapshot {
  five: number;
  four: number;
  three: number;
  two: number;
  one: number;
  total: number;
}