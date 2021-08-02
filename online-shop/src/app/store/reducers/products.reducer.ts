import { EProductActions, ProductsActions } from "../actions/products.actions";
import { initialProductsState, IProductsState } from "../state/products.state";

export const productsReducers = (
    state = initialProductsState,
    action: ProductsActions): IProductsState => {
    switch (
    action.type
    ) {
        case EProductActions.GetProducts: return {
            ...state,
        }

        case EProductActions.GetProductsSuccess: return {
            ...state,
            loading: false,
            loaded: true,
            products: action.payload,
        }

        case EProductActions.GetProductsFail: return {
            ...state,
            loaded: false,
            loading: true,
            error: action.payload
        }

        case EProductActions.GetProduct: return{
            ...state,
        }

        case EProductActions.GetProductFail: return{
            ...state,
            loaded: false,
            loading: true,
            error: action.payload
        }

        case EProductActions.GetProductSuccess: return{
            ...state,
            loaded: true,
            loading:false,
            currentProduct: action.payload,
            prodId: action.payload.id!
        }

        default: {
            return state;
        }
    }
}