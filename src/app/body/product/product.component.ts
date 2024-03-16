import { Component, Input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

@Component({
    selector: 'app-product',
    standalone: true,
    templateUrl: './product.component.html',
    styleUrl: './product.component.scss',
    imports: [CurrencyPipe]
})
export class ProductComponent {
  @Input({required : true}) product? : IProduct;
}

export interface IProduct{
    id : string, //Uuid
    name : string,
    image : string,
    price : number
  }
