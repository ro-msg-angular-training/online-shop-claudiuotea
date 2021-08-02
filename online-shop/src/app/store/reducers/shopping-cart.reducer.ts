import { CartActions, ECartActions } from "../actions/shopping-cart.actions";
import { ICartState, initialCartState } from "../state/shopping-cart.state";


export const cartReducers = (
    state = initialCartState,
    action: CartActions): ICartState => {
    switch (
    action.type
    ) {
        case ECartActions.AddCartProduct: return {
            ...state,
        }

        case ECartActions.AddCartProductSuccess: return {
            ...state,
        }

        case ECartActions.AddCartProductFail: return {
            ...state,
            error: action.payload
        }

        default: {
            return state;
        }
    }
}