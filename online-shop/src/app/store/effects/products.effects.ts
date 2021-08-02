import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of, pipe } from "rxjs";
import { switchMap, catchError, mergeMap, map } from "rxjs/operators";
import { DataService } from "src/app/data.service";
import { IProduct } from "src/app/interfaces";
import { AddProduct, AddProductFail, AddProductSuccess, DeleteProduct, DeleteProductFail, DeleteProductSuccess, EProductActions, GetProduct, GetProductFail, GetProducts, GetProductsFail, GetProductsSuccess, GetProductSuccess, UpdateProduct, UpdateProductFail, UpdateProductSuccess } from "../actions/products.actions";

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

    addProduct$ = createEffect(() =>
        this.actions$.pipe(
            ofType<AddProduct>(EProductActions.AddProduct),
            switchMap((value)=>
                this.dataService.addProduct(value.payload)
            ),
            switchMap((value) =>
                of(new AddProductSuccess(value))
            ),
            catchError(err => of(new AddProductFail(err)))
        )
    )
    
    updateProduct$ = createEffect(() =>
        this.actions$.pipe(
            ofType<UpdateProduct>(EProductActions.UpdateProduct),
            switchMap((value)=>
                this.dataService.updateProduct(value.payload)
            ),
            switchMap((value) =>
                of(new UpdateProductSuccess(value))
            ),
            catchError(err => of(new UpdateProductFail(err)))
        )
    )

    deleteProduct$ = createEffect(() =>
        this.actions$.pipe(
            ofType<DeleteProduct>(EProductActions.DeleteProduct),
            switchMap((value)=>
                this.dataService.deleteProduct(value.payload)
            ),
            switchMap((value) =>
                of(new DeleteProductSuccess(value))
            ),
            catchError(err => of(new DeleteProductFail(err)))
        )
    )


}