export interface IItems {
  name: string;
  img: string;
  title: string;
  id: number;
  price: number;
}

export interface IProduct {
  _id?: string;
  name: string;
  category: string;
  description: string;
  store: string;
  price: number;
  image: string;
  _v: number;
}
