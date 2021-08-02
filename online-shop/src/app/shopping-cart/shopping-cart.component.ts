import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ICartProduct } from '../interfaces';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  products: ICartProduct[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.products = this.dataService.getShoppingCart();
  }


  removeItemFromCart(id: number) {
    this.dataService.removeItemFromCart(id);
    this.products = this.products.filter(prod => prod.productId != id);
    console.log("Yes")
  }

  sendOrder() {
    try {
      this.dataService.sendOrder()
        .subscribe(data => console.log("Order sent!"));
    }
    catch (error) {
      console.log(error);
    }
  }
}
