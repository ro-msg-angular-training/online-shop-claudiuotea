import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { IProduct } from '../interfaces';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {
  private id = -1;
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
  })
  constructor(private dataService: DataService, private route: ActivatedRoute,private router : Router) { }

  onSubmit() {
    try {
      this.dataService.updateProduct(this.editForm.value, this.id)
        .subscribe(data => {
          this.router.navigateByUrl("/products");
          console.log(data);
        })

    }
    catch (error) {
      console.log(error)
    }
  }

  clearForm() {
    this.editForm.reset();
  }

  validateImage(imageUrl: FormControl) {
    let urlRegex: RegExp = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;

    return urlRegex.test(imageUrl.value) ? null : { image: true }
  }

  validatePrice(price: FormControl) {
    if (price.value < 0.01 || price.value > 99999.99)
      return {
        "price": true
      }
    return null;
  }

  ngOnInit(): void {
    let id: number = Number(this.route.snapshot.paramMap.get('id'));
    this.id = id;
  }

}
