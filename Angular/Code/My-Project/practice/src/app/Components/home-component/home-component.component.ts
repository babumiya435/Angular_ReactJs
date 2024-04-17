import { Component, OnInit } from '@angular/core';
import { Product, PurchasedProduct } from '../../CustomTypes/productTypes';
import { ProductInt, PurchasedProductInt } from '../../Interfaces/productInterfaces';

@Component({
  selector: 'app-home-component',
  standalone: true,
  imports: [],
  templateUrl: './home-component.component.html',
  styleUrl: './home-component.component.css'
})
export class HomeComponentComponent implements OnInit {
  product!: Product;
  productInt!: ProductInt;
  purchasedProductType!: PurchasedProduct;
  purchasedProductInt!: PurchasedProductInt;
  constructor(){

  }
  
  ngOnInit(): void {
    //console.log(ProductInt); // 'Product' & 'ProductInt' only refers to a type, but is being used as a value here.ts(2693)
    console.log("Home Component Implements Oninit interface and utilises its ngOnInit method and can write customized code in it");
    this.productInt = {
      id: "id",
      title: "Title",
      description: "string",
      price: {
        value: 20000,
        currency: "INR"
      }
    };

    this.purchasedProductType = {
      id: "id",
      title: "Title",
      description: "string",
    };

    this.purchasedProductInt = {
      id: "id",
      title: "Title",
      description: "string",
      value: 2000,
      currency: "INR",
      priceTagName: "xyz",
      price: {
        value: 20000,
        currency: "INR"
      }
    }
    console.log("Price", this.productInt?.price?.value);
  }
}
