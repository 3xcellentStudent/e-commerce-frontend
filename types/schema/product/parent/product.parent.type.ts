import { ProductVariationModel } from "../variation/product.variation.type";

export interface ProductParentModel {
  id: string;
  rating: number;
  productName: string;
  descriptions: Descriptions;
  variations: ProductVariationModel[];
  specifications: Specifications;
  mediaContent: MediaContent[];
  // reviewsSnapshot: Map<number, string>;
  reviewsSnapshot: {};
  category: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Descriptions {
  summary: string;
  presentable: string[];
}

export interface MediaContent {
  isImage: boolean;
  mediaArray: MediaContent.MediaObject[];
}

export namespace MediaContent {
  export interface MediaObject {
    media: string;
    src: string;
  }
}

export interface Specifications {
  titles: string[];
  properties: Specifications.Properties[];
}

export namespace Specifications {
  export interface Properties {
    name: string;
    array: Specifications.PropertiesArrayObject[];
  }

  export interface PropertiesArrayObject {
    name: string;
    value: string;
  }
}
