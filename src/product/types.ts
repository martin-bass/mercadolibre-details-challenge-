export interface ProductPicture extends Record<string, any> {
  id: string;
  url: string;
  title?: string;
  price?: number
}

export interface Product extends Record<string, any> {
  id?: string;
  title?: string;
  price?: number;
  currency_id?: string;
  sold_quantity?: number;
  condition?: string;
  pictures: ProductPicture[];
}
