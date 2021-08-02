import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { DataService } from '../data.service';
import { IProduct } from '../interfaces';
import { UpdateProduct } from '../store/actions/products.actions';
import { selectCurrentId } from '../store/selectors/products.selector';
import { IAppState } from '../store/state/app.state';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent{
  productId$: Observable<number> = this.store.pipe(select(selectCurrentId));
  editForm = new FormGroup({
    name: new FormControl('', Validators.required),
    category: new FormControl('', Validators.required),
    image: new FormControl('', Validators.compose([
      Validators.required,
      this.validateImage
    ])),
    price: new FormControl(0.01, Validators.compose([
      Validators.required,
      this.validatePrice
    ])),
    description: new FormControl('', Validators.required),
  });

  constructor(private store: Store<IAppState>,private dataService: DataService, private route: ActivatedRoute, private router: Router) { }

  onSubmit(): void {
    let prod : IProduct = this.editForm.value;
    this.productId$.subscribe((id:number) => prod.id = id);
    this.store.dispatch(new UpdateProduct(prod));
    this.router.navigateByUrl("/products");
  }

  clearForm(): void {
    this.editForm.reset();
  }

  validateImage(imageUrl: FormControl): { image: boolean } | null {
    let urlRegex: RegExp = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;

    return urlRegex.test(imageUrl.value) ? null : { image: true };
  }

  validatePrice(price: FormControl): { price: boolean } | null {
    if (price.value < 0.01 || price.value > 99999.99)
      return {
        "price": true
      };
    return null;
  }

}
