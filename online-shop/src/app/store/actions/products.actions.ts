import { Action } from "@ngrx/store";
import { IProduct } from "src/app/interfaces";

export enum EProductActions {
    GetProducts = '[Product List Component] Get Products',
    GetProductsSuccess = '[Product List COmponent] Get Products Success',
    GetProductsFail = '[Product List Component] Get Products Fail',
    GetProduct = '[Product Details Component] Get Product',
    GetProductFail = '[Product Details Component] Get Product Fail',
    GetProductSuccess = '[Product Details Component] Get Product Success',
    SetProductQuantity = '[Product Details Component] Set Product Quantity',
    AddProduct = '[Add Product Component] Add Product',
    AddProductSuccess = '[Add Product Component] Add Product Success',
    AddProductFail = '[Add Product Component] Add Product Fail',
    UpdateProduct = '[Edit Product Component] Edit Product',
    UpdateProductFail = '[Edit Product Component] Edit Product Fail',
    UpdateProductSuccess = '[Edit Product Component] Edit Product Success',
    DeleteProduct = '[Product Details Component] Delete Product',
    DeleteProductFail = '[Product Details Component] Delete Product Fail',
    DeleteProductSuccess = '[Product Details Component] Delete Product Success'
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

export class SetProductQuantity implements Action{
    public readonly type = EProductActions.SetProductQuantity;

    constructor(public payload: number){}
}

export class AddProduct implements Action{
    public readonly type = EProductActions.AddProduct;

    constructor(public payload: IProduct) {}
}

export class AddProductSuccess implements Action{
    public readonly type = EProductActions.AddProductSuccess;

    constructor(public payload: IProduct) {}
}

export class AddProductFail implements Action{
    public readonly type = EProductActions.AddProductFail;

    constructor(public payload: string) {}
}

export class UpdateProduct implements Action{
    public readonly type = EProductActions.UpdateProduct;

    constructor(public payload: IProduct) {}
}

export class UpdateProductSuccess implements Action{
    public readonly type = EProductActions.UpdateProductSuccess;

    constructor(public payload: IProduct) {}
}

export class UpdateProductFail implements Action{
    public readonly type = EProductActions.UpdateProductFail;

    constructor(public payload: string) {}
}

export class DeleteProduct implements Action{
    public readonly type = EProductActions.DeleteProduct;

    constructor(public payload: number) {}
}

export class DeleteProductSuccess implements Action{
    public readonly type = EProductActions.DeleteProductSuccess;

    constructor(public payload: IProduct) {}
}

export class DeleteProductFail implements Action{
    public readonly type = EProductActions.DeleteProductFail;

    constructor(public payload: string) {}
}

export type ProductsActions = GetProducts | GetProductsSuccess | GetProductsFail | GetProduct | GetProductFail | GetProductSuccess | SetProductQuantity | AddProduct
| AddProductSuccess | AddProductFail | UpdateProduct | UpdateProductFail | UpdateProductSuccess | DeleteProduct | DeleteProductFail | DeleteProductSuccess;