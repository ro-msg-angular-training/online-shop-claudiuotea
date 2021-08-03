import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { AuthGuard } from './auth.guard';
import { EditProductComponent } from './edit-product/edit-product.component';
import { LoginComponent } from './login/login.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';


const routes:Routes=[
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {path: 'products', component:ProductListComponent, canActivate:[AuthGuard]},
  {path:'products/:id', component:ProductDetailsComponent, canActivate:[AuthGuard]},
  {path:'cart', component:ShoppingCartComponent, canActivate:[AuthGuard]},
  {path:'edit/:id', component:EditProductComponent, canActivate:[AuthGuard]},
  {path:'addproduct', component:AddProductComponent, canActivate:[AuthGuard]},
  {path:'login', component:LoginComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 }
