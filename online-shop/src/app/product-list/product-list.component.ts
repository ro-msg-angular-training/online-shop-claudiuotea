import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import  {IProduct}  from '../interfaces';
import { IAppState } from '../store/state/app.state';
import { selectIsAdmin, selectIsCustomer } from '../store/selectors/user.selectors';
import { selectProductList } from '../store/selectors/products.selector';
import { GetProducts } from '../store/actions/products.actions';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products$: Observable<IProduct[]> = this.store.pipe(select(selectProductList));
  isAdmin$: Observable<boolean> = this.store.pipe(select(selectIsAdmin));
  isCustomer$: Observable<boolean> = this.store.pipe(select(selectIsCustomer));

  constructor(private router: Router, private store: Store<IAppState>) {
  }

  ngOnInit(): void {
    this.store.dispatch(new GetProducts());
  }

  goToAddView() : void {
    this.router.navigateByUrl("/addproduct");
  }

  goToShoppingCart() : void {
    this.router.navigateByUrl("/cart");
  }

}
