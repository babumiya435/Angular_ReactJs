export type PriceTag = {
    priceTagId?: string,
    priceTagName: string,
  }


export interface Price {
    value: number;
    currency: string;
}

// --> we can include other types or interfaces as child custom types
export interface ProductInt {
    id: string;
    title: string;
    description: string;
    price: Price;
    image?: string;
}

// extend types using interfaces
// --> we can extend multiple interfaces
// --> we can also extend types + intefaces
export interface PurchasedProductInt extends ProductInt, Price, PriceTag {
    orderId?: string,
    orderDate?: Date,
}