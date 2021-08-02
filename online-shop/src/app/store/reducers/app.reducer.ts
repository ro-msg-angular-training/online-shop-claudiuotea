import { routerReducer } from "@ngrx/router-store";
import { ActionReducerMap } from "@ngrx/store";
import { IAppState } from "../state/app.state";
import { productsReducers } from "./products.reducer";
import { userReducers } from "./user.reducer";

export const appReducers : ActionReducerMap<IAppState,any> ={
    router: routerReducer,
    user : userReducers,
    products: productsReducers
}