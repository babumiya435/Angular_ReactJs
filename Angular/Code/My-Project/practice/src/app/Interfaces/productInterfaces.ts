
export interface Price {
    value: number;
    currency: string;
}

export interface Product {
    id: string;
    title: string;
    description: string;
    price: Price;
    image?: string;
}