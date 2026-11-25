import { ProductVariationModel } from "../variation/product.variation.type";

export interface ProductParentModel {
  id: string;
  productName: string;
  descriptions: Descriptions;
  variations: ProductVariationModel[];
  specifications: Specifications;
  mediaContent: MediaContent[];
  ratingSummary: RatingSummary;
  category: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface RatingSummary {
  averageRating: number;
  totalCount: number;
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
