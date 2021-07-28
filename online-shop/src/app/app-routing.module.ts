import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';


const routes:Routes=[
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  {path: 'products', component:ProductListComponent},
  {path:'products/:id', component:ProductDetailsComponent},
  {path:'cart', component:ShoppingCartComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 }
