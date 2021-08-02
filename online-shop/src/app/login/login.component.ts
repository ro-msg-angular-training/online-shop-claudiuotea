import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { DataService} from '../data.service';
import { IUser } from '../interfaces';
import { Login } from '../store/actions/user.actions';
import { IAppState } from '../store/state/app.state';

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
  constructor(private dataService: DataService, private router:Router, private store : Store<IAppState>) { }

  onSubmit(): void {
    let user: IUser = {
      username: this.loginForm.value['username'],
      password: this.loginForm.value['password']

    }

    this.store.dispatch(new Login(user));
    this.router.navigateByUrl("/products");
    
  }

  ngOnInit(): void {
  }

}
