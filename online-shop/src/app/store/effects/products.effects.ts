import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { switchMap, catchError, mergeMap, map } from "rxjs/operators";
import { DataService } from "src/app/data.service";
import { IProduct } from "src/app/interfaces";
import { EProductActions, GetProduct, GetProductFail, GetProducts, GetProductsFail, GetProductsSuccess, GetProductSuccess } from "../actions/products.actions";

@Injectable()
export class ProductsEffect{
    
    //actions to listen on them and the service I use to get data
    constructor(
        private actions$ : Actions,
        private dataService : DataService
    ){}
    
    products$ = createEffect(() =>
        this.actions$.pipe(
            ofType<GetProducts>(EProductActions.GetProducts),
            mergeMap((actions:GetProducts)=>
                this.dataService.getProducts().pipe(
                    map(
                        (products: IProduct[]) => 
                            new GetProductsSuccess(products)
                    ),
                    catchError(err => of(new GetProductsFail(err)))
                )
            )
        )
    );

    product$ = createEffect(() => 
        this.actions$.pipe(
            ofType<GetProduct>(EProductActions.GetProduct),
            switchMap((value) =>
                this.dataService.getProduct(value.payload)
            ),
            switchMap((product:IProduct) => of(new GetProductSuccess(product))),
            catchError(err=> of(new GetProductFail(err)))
        )
    )
}