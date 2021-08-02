import { RouterReducerState } from "@ngrx/router-store";
import { initialProductsState, IProductsState } from "./products.state";
import { ICartState, initialCartState } from "./shopping-cart.state";
import { initialUserState, IUserState } from "./user.state";

export interface IAppState {
    router?: RouterReducerState;
    user: IUserState;
    //TODO: REMOVE THE "?" JUST FOR TESTING
    cart?: ICartState;
    products: IProductsState;
};

export const initialAppState: IAppState = {
    user: initialUserState,
    cart: initialCartState,
    products: initialProductsState
};

export function getInitialState():IAppState{
    return initialAppState;
};