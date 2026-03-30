export interface ProductVariationModel {
  id: string;
  parentId: string;
  stockInfo: StockInfo;
  variationName: string;
  variationOptions: VariationOptions;
  image: Image[]; 
  collectionName: string;
  createdAt?: number;
  updatedAt?: number;
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
  quantityMax: number;
  price: string;
  quantityAvailable: number;
}

export interface VariationOptions {
  name: string;
  type: string;
  value: string
}

export interface Item {
  value?: string;
  fill?: string;
  stroke?: string;
  StockInfo?: boolean;
  mediaIndex?: number;
}
