import { Component, OnInit } from '@angular/core';



export interface Product{
  id: string,
  name:string,
  description:string,
  imageUrl:string,
  price:number,
  category:string
}

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products : Product[] = [];

  constructor() {
    this.products.push({id:"1",imageUrl:"testUrl", price:14.00,category:"one of them", description:"ah  what a beautiful product is there",name:"Buy me<3"});
    this.products.push({id:"2",imageUrl:"testUrl2", price:14.00,category:"two of them", description:"ah  what a nice product is there",name:"Second"});
    this.products.push({id:"3",imageUrl:"testUrl3", price:145.00,category:"3 of them", description:"ah  what a perfect product is there",name:"Third"});
    this.products.push({id:"4",imageUrl:"testUrl4", price:124.00,category:"4 of them", description:"ah  what a lovely product is there",name:"4th"});
    this.products.push({id:"5",imageUrl:"testUrl5", price:114.00,category:"5 of them", description:"ah  what a fain product is there",name:"5th"});
  }

  ngOnInit(): void {
  }

}
