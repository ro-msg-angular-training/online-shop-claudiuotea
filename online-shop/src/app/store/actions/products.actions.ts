import { Action } from "@ngrx/store";
import { IProduct } from "src/app/interfaces";

export enum EProductActions {
    GetProducts = '[Product List Component] Get Products',
    GetProductsSuccess = '[Product List COmponent] Get Products Success',
    GetProductsFail = '[Product List Component] Get Products Fail',
    GetProduct = '[Product Details Component] Get Product',
    GetProductFail = '[Product Details Component] Get Product Fail',
    GetProductSuccess = '[Product Details Component] Get Product Success',

}

export class GetProducts implements Action {
    public readonly type = EProductActions.GetProducts;
}

export class GetProductsSuccess implements Action {
    public readonly type = EProductActions.GetProductsSuccess;

    constructor(public payload: IProduct[]) { }
}

export class GetProductsFail implements Action {
    public readonly type = EProductActions.GetProductsFail;

    constructor(public payload: string) { }
}

export class GetProduct implements Action {
    public readonly type = EProductActions.GetProduct;

    constructor(public payload: number) { }
}

export class GetProductSuccess implements Action {
    public readonly type = EProductActions.GetProductSuccess;

    constructor(public payload: IProduct) { }
}

export class GetProductFail implements Action {
    public readonly type = EProductActions.GetProductFail;

    constructor(public payload: string) { }
}

export type ProductsActions = GetProducts | GetProductsSuccess | GetProductsFail | GetProduct | GetProductFail | GetProductSuccess;