import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';



export interface IProduct {
  id?: number,
  name?: string,
  description?: string,
  imageUrl?: string,
  price?: number,
  category?: string
}

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: IProduct[] = [];

  constructor(private dataService: DataService,private router: Router) {
  }

  ngOnInit(): void {
    try {
      this.dataService.getProducts()
        .subscribe(data => this.products = data);
    }
    catch (error) {
      console.log(error);
    }
  }

  goToAddView(){
    this.router.navigateByUrl("/addproduct");
  }

  goToShoppingCart(){
    this.router.navigateByUrl("/cart");
  }

}
