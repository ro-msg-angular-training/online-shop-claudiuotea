import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { switchMap, catchError } from "rxjs/operators";
import { DataService } from "src/app/data.service";
import { AddCartProduct, AddCartProductFail, AddCartProductSuccess, ECartActions } from "../actions/shopping-cart.actions";

@Injectable()
export class CartEffect{
    
    //actions to listen on them and the service I use to get data
    constructor(
        private actions$ : Actions,
        private dataService : DataService
    ){}
    
    addCartProduct$ = createEffect(() =>
        this.actions$.pipe(
            ofType<AddCartProduct>(ECartActions.AddCartProduct),
            switchMap((value)=>
                this.dataService.addProductToShoppingCart(value.payload)
            ),
            switchMap((value) =>
                of(new AddCartProductSuccess(value))
            ),
            catchError(err => of(new AddCartProductFail(err)))
        )
    )

}