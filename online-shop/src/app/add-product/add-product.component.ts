import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { DataService } from '../data.service';
import { AddProduct } from '../store/actions/products.actions';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent {
  addForm = new FormGroup({
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

  constructor(private store : Store,private dataService: DataService, private router: Router) { }

  onSubmit(): void {
    this.store.dispatch(new AddProduct(this.addForm.value));
    this.router.navigateByUrl("/products");
  }

  clearForm(): void {
    this.addForm.reset();
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
