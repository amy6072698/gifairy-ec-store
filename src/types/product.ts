export interface Product {
  id: string;
  title: string;
  image: string;
  images: string[];
  description: string;
  status?: string;
  originPrice?: number;
  price: number;
  stock: number;
  attributes: ProductAttributes;
  details: ProductDetails;
  meta: ProductMeta;
}

export interface ProductAttributes {
  category_zh: "配件飾品" | "居家生活" | "風格文具" | "品味美食";
  category_en: "accessories" | "lifestyle" | "stationery" | "gourmet";
  occasions: Array<
    | "birthday"
    | "wedding"
    | "business"
    | "valentines"
    | "christmas"
    | "graduation"
  >;
  recipients: Array<
    | "male_lover"
    | "female_lover"
    | "male_friend"
    | "female_friend"
    | "father"
    | "mother"
    | "coworker"
    | "teacher"
  >;
  styles: Array<
    "artsy" | "cute" | "practical" | "elegant" | "simple" | "healing"
  >;
  priceRange: "under_500" | "500_1000" | "1000_3000" | "over_3000";
  colors: Array<
    | "red"
    | "orange"
    | "yellow"
    | "green"
    | "blue"
    | "purple"
    | "pink"
    | "brown"
    | "black"
    | "white"
    | "multicolor"
  >;
  customizable: boolean;
  handmade: boolean;
}

export interface ProductDetails {
  expiry?: string;
  origin: string;
  material: string;
  content: string;
}

export interface ProductMeta {
  rating: number;
  reviewCount: number;
  createdAt: string;
  updatedAt: string;
}
