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

        case EProductActions.SetProductQuantity: return{
            ...state,
            prodQuantity: action.payload
        }

        case EProductActions.AddProduct : return{
            ...state,
            loading: true
        }
        
        case EProductActions.AddProductSuccess: return{
            ...state,
            loading: false,
            loaded:true,
        }

        case EProductActions.AddProductFail:return{
            ...state,
            loading: false,
            loaded: false,
            error: action.payload
        }

        case EProductActions.UpdateProduct : return{
            ...state,
            loading: true
        }
        
        case EProductActions.UpdateProductSuccess: return{
            ...state,
            loading: false,
            loaded:true,
        }

        case EProductActions.UpdateProductFail:return{
            ...state,
            loading: false,
            loaded: false,
            error: action.payload
        }

        case EProductActions.DeleteProduct : return{
            ...state,
            loading: true
        }
        
        case EProductActions.DeleteProductSuccess: return{
            ...state,
            loading: false,
            loaded:true,
        }

        case EProductActions.DeleteProductFail:return{
            ...state,
            loading: false,
            loaded: false,
            error: action.payload
        }
        default: {
            return state;
        }
    }
}