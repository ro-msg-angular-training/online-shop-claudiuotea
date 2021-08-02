import { createSelector } from "@ngrx/store";
import { IAppState } from "../state/app.state";
import { IProductsState } from "../state/products.state";

export const selectProducts = (state: IAppState) => {
    return state.products;
}

export const selectProductList = createSelector(
    selectProducts,
    (state: IProductsState) => state.products
)

export const selectCurrentProduct = createSelector(
    selectProducts,
    (state: IProductsState) => state.currentProduct
)

export const selectCurrentId = createSelector(
    selectProducts,
    (state: IProductsState) => state.prodId
)

export const selectQuantity = createSelector(
    selectProducts,
    (state: IProductsState) => state.prodQuantity
)

