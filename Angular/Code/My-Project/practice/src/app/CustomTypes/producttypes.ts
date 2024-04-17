
export type Price = {
  value: number,
  currency: string,
}

export type Product = {
    id: string,
    title: string,
    description: string,
    price?: Price,
    image?: string,
  };

  //extend types
  // Product & Price { --> cannot extend multiple types
  export type PurchasedProduct = Product & {
    orderId?: string,
    orderDate?: Date,
  }