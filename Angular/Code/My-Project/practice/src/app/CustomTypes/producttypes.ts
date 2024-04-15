
export type Price = {
  vaue: number;
  currency: string;
}
export type Product = {
    id: string;
    title: string;
    description: string;
    price: Price;
    image?: string;
  };