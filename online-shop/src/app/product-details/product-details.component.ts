import { Component, OnInit } from '@angular/core';
import { Product } from '../product-list/product-list.component';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product: Product = {
    id : "1",
    name : "First prod",
    category : "First category",
    price : 3.4,
    description : "I am the first product in that list",
    imageUrl : "https://www.extremetech.com/wp-content/uploads/2019/12/SONATA-hero-option1-764A5360-edit-640x354.jpg",
  };

  constructor() {
   }

  ngOnInit(): void {}
  

}
