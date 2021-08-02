import { Component, OnInit } from '@angular/core';
import { ICartProduct, IProduct } from '../interfaces';
import { ActivatedRoute, Router } from '@angular/router';
import {  DataService } from '../data.service';
import { select, Store } from '@ngrx/store';
import { IAppState } from '../store/state/app.state';
import { selectIsAdmin, selectIsCustomer } from '../store/selectors/user.selectors';
import { Observable } from 'rxjs';
import { selectCurrentId, selectCurrentProduct, selectQuantity } from '../store/selectors/products.selector';
import { GetProduct } from '../store/actions/products.actions';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
  providers: []
})
export class ProductDetailsComponent implements OnInit {
  product$: Observable<IProduct> = this.store.pipe(select(selectCurrentProduct));
  isAdmin$: Observable<boolean> = this.store.pipe(select(selectIsAdmin));
  isCustomer$: Observable<boolean> = this.store.pipe(select(selectIsCustomer));
  productId$: Observable<number> = this.store.pipe(select(selectCurrentId));
  prodQuantity$: Observable<number> = this.store.pipe(select(selectQuantity));

  constructor(private store: Store<IAppState>, private route: ActivatedRoute, private dataService: DataService, private router: Router) { }

  addToShoppingCart() {
    
    // let cartProduct: ICartProduct = {
    //   productId: this.productId,
    //   quantity: this.prodQuantity,
    //   category: this.product.category!,
    //   name: this.product.name!,
    //   price: this.product.price!,

    // }
    // this.dataService.addProductToShoppingCart(cartProduct);
  }

  deleteProduct() {
    // try{
    //   this.dataService.deleteProduct(this.productId)
    //   .subscribe(data=>console.log("Removed product with id " + this.productId));
    //   this.router.navigateByUrl("/products");
    // }
    // catch(error){
    //   console.log(error);
    // }
  }

  goToEditView(){
    // this.router.navigateByUrl(`/edit/${this.productId}`);
  }

  ngOnInit(): void {
    // let id: number = Number(this.route.snapshot.paramMap.get('id'));
    // this.productId = id;
    // try {
    //   this.dataService.getProduct(this.productId)
    //     .subscribe(data => {
    //       this.product = data;
    //       this.product.imageUrl = "https://stimg.cardekho.com/images/carexteriorimages/630x420/Lamborghini/Urus/4418/Lamborghini-Urus-V8/1621927166506/front-left-side-47.jpg";
    //     });
    // }
    // catch (error) {
    //   console.log(error);
    // }
    this.store.dispatch(new GetProduct(Number(this.route.snapshot.paramMap.get('id'))));
  }
}
