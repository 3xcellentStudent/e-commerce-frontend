export interface ProductVariationModel {
  id: string;
  parentId: string;
  stockInfo: StockInfo;
  variationName: string;
  productOptions: ProductOption[];
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

export interface ProductOption {
  name?: string;
  type?: string;
  items?: Item[];
}

export interface Item {
  value?: string;
  fill?: string;
  stroke?: string;
  StockInfo?: boolean;
  mediaIndex?: number;
}
