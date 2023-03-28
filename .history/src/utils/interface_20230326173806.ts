export interface Product {
  name: string;
  brand: string;
  color: string;
}

export interface ProductNewFeature extends Product {
  price: 300;
}
