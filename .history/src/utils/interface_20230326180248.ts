export interface Product {
  name: string;
  brand: string;
  color: string;
}
// export interface Product {
//   speed?: string;
// }
export interface ProductNewFeature extends Product {
  speed: string;
}
export interface ICard {
  title: string;
  desc: string;
  image: string;
  link: string;
}
