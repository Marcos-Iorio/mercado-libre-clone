export interface Product {
  [key: string]: any;
  seller_id: string;
  title: string;
  price: number;
  initial_quantity: number;
  available_quantity: number;
  sold_quantity: number;
  catalog_product_id: string;
  shipping: {
    free_shipping: boolean;
  };
  thumbnail: string;
  pictures: [
    {
      id: string;
      url: string;
      secure_url: string;
      size: string;
      max_size: string;
      quality: "";
    }
  ];
  condition: string;
}

export interface ProductsArray {
  products: Product[];
}

export interface Seller {
  nickname: string;
  permalink: string;
  seller_reputation: {
    level_id: string;
    power_seller_status: string;
    transactions: {
      completed: number;
    };
  };
  address: {
    city: string;
  };
}

export interface MainFeatures {
  text: string;
}

interface Attr {
  name: string;
  value_name: string;
}

export interface ProductAttr {
  main_features: MainFeatures[];
  attributes: Attr[];
  short_description: {
    content: string;
  };
}
