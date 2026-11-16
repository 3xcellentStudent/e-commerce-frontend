export interface ProductVariationModel {
  id: string;
  parentId: string;
  stockInfo: StockInfo;
  variationName: string;
  variationOptions: VariationOptions;
  image: Image[];
  descriptions: Descriptions[];
  createdAt: Date;
  updatedAt: Date;
}

  export interface Descriptions {
    summary: string;
    presentable: string[];
  } 

export interface Image {
  media: string;
  src: string;
  srcset: string;
}

export interface Descriptions {
  summary: string;
  presentable: string[];
}

export interface StockInfo {
  amountMax: number;
  amountAvailable: number;
  amountReserved: number;
  priceInCents: number;
  currency: string;
}

export interface VariationOptions {
  name: string;
  type: string;
  value: string;
}
