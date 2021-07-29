import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { IProduct } from './product-list/product-list.component';
import { catchError } from 'rxjs/operators';

export interface ICartProduct {
  productId: number,
  category: string,
  name: string,
  price: number,
  quantity: number,
}

interface IOrder{
  customer:string,
  products: ICartProduct[],
}


@Injectable({
  providedIn: 'root'
})
export class DataService {
  private shoppingCart: ICartProduct[] = [];
  private BASE_URL = "http://localhost:3000";

  constructor(private http: HttpClient) { }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }

  addProductToShoppingCart(prod: ICartProduct): void {
    this.shoppingCart.push(prod);
  }

  removeItemFromCart(id: number): void {
    this.shoppingCart = this.shoppingCart.filter(prod => prod.productId != id);
  }

  sendOrder() : Observable<any>{
    let order : IOrder = {
      customer:"doej",
      products: this.shoppingCart
    }

    //why does here throw an error when an entity was created?
    return this.http.post(`${this.BASE_URL}/orders`,order)
    .pipe(
      catchError(this.handleError)
    )
  }

  addProduct(prod: IProduct){
    return this.http.post(`${this.BASE_URL}/products`,prod)
    .pipe(
      catchError(this.handleError)
    )
  }

  updateProduct(prod: IProduct,id : number){
    return this.http.put(`${this.BASE_URL}/products/${id}`, prod)
    .pipe(
      catchError(this.handleError)
    )
  }

  getShoppingCart(): ICartProduct[] {
    return this.shoppingCart;
  }

  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(`${this.BASE_URL}/products`)
      .pipe(
        catchError(this.handleError)
      );
  }

  getProduct(id: number): Observable<IProduct> {
    return this.http.get<IProduct>(`${this.BASE_URL}/products/${id}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  deleteProduct(id: number) {
    return this.http.delete(`${this.BASE_URL}/products/${id}`)
      .pipe(
        catchError(this.handleError)
      )
  }



}
