import { Component, OnInit } from '@angular/core';
import { IProduct } from '../product-list/product-list.component';
import { ActivatedRoute, Router } from '@angular/router';
import { ICartProduct, DataService } from '../data.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
  providers: []
})
export class ProductDetailsComponent implements OnInit {
  product: IProduct = {};

  productId: number = -1;
  prodQuantity: number = 1;

  constructor(private route: ActivatedRoute, private dataService: DataService, private router: Router) { }

  addToShoppingCart() {
    let cartProduct: ICartProduct = {
      productId: this.productId,
      quantity: this.prodQuantity,
      category: this.product.category!,
      name: this.product.name!,
      price: this.product.price!,

    }
    this.dataService.addProductToShoppingCart(cartProduct);
  }

  deleteProduct() {
    try{
      this.dataService.deleteProduct(this.productId)
      .subscribe(data=>console.log("Removed product with id " + this.productId));
      this.router.navigateByUrl("/products");
    }
    catch(error){
      console.log(error);
    }
  }

  goToEditView(){
    this.router.navigateByUrl(`/edit/${this.productId}`);
  }

  ngOnInit(): void {
    let id: number = Number(this.route.snapshot.paramMap.get('id'));
    this.productId = id;
    try {
      this.dataService.getProduct(this.productId)
        .subscribe(data => {
          this.product = data;
          this.product.imageUrl = "https://stimg.cardekho.com/images/carexteriorimages/630x420/Lamborghini/Urus/4418/Lamborghini-Urus-V8/1621927166506/front-left-side-47.jpg";
        });
    }
    catch (error) {
      console.log(error);
    }
  }
}
