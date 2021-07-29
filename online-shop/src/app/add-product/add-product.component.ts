import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
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
  })
  constructor(private dataService: DataService, private route: ActivatedRoute, private router: Router) { }

  onSubmit() {
    try {
      this.dataService.addProduct(this.addForm.value)
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
    this.addForm.reset();
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
  }

}
