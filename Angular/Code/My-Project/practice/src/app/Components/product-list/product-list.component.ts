import { CurrencyPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../CustomTypes/productTypes';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  http = inject(HttpClient);
  products = toSignal(
    this.http.get<Product[]>('https://fakestoreapi.com/products'),
  );
}
function toSignal(arg0: Observable<Product[]>) {
  throw new Error('Function not implemented.');
}

