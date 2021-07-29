import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService, IUser } from '../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  })
  constructor(private dataService: DataService, private router:Router) { }

  onSubmit(): void {
    let user: IUser = {
      username: this.loginForm.value['username'],
      password: this.loginForm.value['password']

    }
    this.dataService.login(user)
      .subscribe(data => {
        this.dataService.setCurrentUser(data);
        this.router.navigateByUrl("/products");
      }, err =>{
        alert(err);
      })
  }

  ngOnInit(): void {
  }

}
