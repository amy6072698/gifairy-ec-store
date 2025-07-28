export interface Product {
  id: number;
  image: string;
  category: string;
  title: string;
  status?: string;
  originPrice?: number;
  price: number;
}
