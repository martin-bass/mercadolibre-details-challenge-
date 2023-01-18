export interface ProductPicture extends Record<string, any> {
  id?: string;
  url?: string;
  title?: string;
  price?: number | any;
  tienda?: string;
}

export interface Product extends Record<string, any> {
  id?: string;
  title?: string;
  price?: number | any;
  currency_id?: string;
  sold_quantity?: number;
  condition?: string;
  pictures: ProductPicture[];
  attributes?: string[] | any;
  priceBefore?: number
}

export interface PreguntasYRespuestas {
  pregunta: string;
  respuesta?: string
  date?: string
}
