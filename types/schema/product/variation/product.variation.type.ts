export interface ProductVariationModel {
  id: string;
  parentId: string;
  stockInfo: StockInfo;
  productName: string;
  option: Option;
  image: Image;
  // descriptions: Description[];
  createdAt: Date;
  updatedAt: Date;
}

export interface Image {
  media: string;
  src: string;
  srcset: string;
  alt: string;
}

// export interface Description {
//   summary: string;
//   presentable: string[];
// }

export interface StockInfo {
  amountMax: number;
  amountAvailable: number;
  amountReserved: number;
  priceInCents: number;
  currency: string;
}

export interface Option {
  attribute: string;
  unit: string;
  value: string;
}
