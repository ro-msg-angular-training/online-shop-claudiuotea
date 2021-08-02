import { Component, OnInit } from '@angular/core';
import { ICartProduct, IProduct } from '../interfaces';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { IAppState } from '../store/state/app.state';
import { selectIsAdmin, selectIsCustomer } from '../store/selectors/user.selectors';
import { Observable } from 'rxjs';
import { selectCurrentId, selectCurrentProduct, selectQuantity } from '../store/selectors/products.selector';
import { GetProduct } from '../store/actions/products.actions';
import { FormControl, FormGroup } from '@angular/forms';
import { SetProductQuantity } from '../store/actions/products.actions';
import { DeleteProduct } from '../store/actions/products.actions';
import { AddCartProduct } from '../store/actions/shopping-cart.actions';

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

  form = new FormGroup(
    { quantity: new FormControl(1) }
  )

  constructor(private store: Store<IAppState>, private route: ActivatedRoute, private router: Router) { }

  addToShoppingCart(): void {

    let prodId: number;
    this.productId$.subscribe((id: number) => prodId = id);
    let quant: number;
    this.prodQuantity$.subscribe((quantity: number) => quant = quantity)
    this.product$.subscribe(prod => {
      let cartProduct: ICartProduct = {
        productId: prodId!,
        quantity: quant!,
        category: prod.category!,
        name: prod.name!,
        price: prod.price!
      };
      this.store.dispatch(new AddCartProduct(cartProduct));
    })
  }

  deleteProduct(): void {
    this.productId$.subscribe((id: number) => {
      this.store.dispatch(new DeleteProduct(id));
      this.router.navigateByUrl("/products");
    }
    )
  }

  goToEditView(): void {
    this.productId$.subscribe(value => {
      this.router.navigateByUrl(`/edit/${value}`);
    })
  }

  ngOnInit(): void {
    this.prodQuantity$.subscribe((quantity) => {
      this.form.patchValue({ quantity }, { emitEvent: false })
    })

    this.form.valueChanges.subscribe(data => this.store.dispatch(new SetProductQuantity(data.quantity)));
    this.store.dispatch(new GetProduct(Number(this.route.snapshot.paramMap.get('id'))));
  }
}
