import { Action } from "@ngrx/store";
import { ICartProduct } from "src/app/interfaces";

export enum ECartActions {
    AddCartProduct = '[Product Details Component] Add Cart Product',
    AddCartProductSuccess = '[Product Details Component] Add Cart Product Success',
    AddCartProductFail = '[Product Details Component] Add Cart Product Fail'
}

export class AddCartProduct implements Action {
    public readonly type = ECartActions.AddCartProduct;

    constructor(public payload: ICartProduct) { }
}

export class AddCartProductSuccess implements Action {
    public readonly type = ECartActions.AddCartProductSuccess;

    constructor(public payload: ICartProduct) { }
}

export class AddCartProductFail implements Action {
    public readonly type = ECartActions.AddCartProductFail;

    constructor(public payload: string) { }
}

export type CartActions = AddCartProduct | AddCartProductSuccess | AddCartProductFail;
