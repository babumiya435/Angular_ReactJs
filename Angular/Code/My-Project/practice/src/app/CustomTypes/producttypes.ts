
export type Price = {
  value: number,
  currency: string,
}

export type Product = {
    id: string | number, // union types - either string or number both are valid types for id
    title: string,
    description: string,
    price?: Price,
    image?: string,
  };

  //extend types
  // ( Product & Price { )--> cannot extend multiple types
  export type PurchasedProduct = Product & {
    orderId?: string,
    orderDate?: Date,
  }

  // union types (either or types):

  type ShippingId = string | number;

  // conditional types: