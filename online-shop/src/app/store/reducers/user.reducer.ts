import { initialUserState, IUserState } from "../state/user.state";
import { EUserActions, UserActions } from "../actions/user.actions";

export const userReducers = (
    state = initialUserState,
    action: UserActions): IUserState => {
    switch (
    action.type
    ) {
        case EUserActions.Login: return {
            ...state,
            loading: true
        }

        case EUserActions.GetUserSuccess: return {
            ...state,
            loading: false,
            loaded: true,
            currentUser: action.payload,
            isAdmin: action.payload.roles!.includes('admin')?true:false,
            isCustomer: action.payload.roles!.includes('customer')?true:false
        }

        case EUserActions.GetUserFail: return {
            ...state,
            loaded: false,
            loading: true,
            error: action.payload
        }

        default: {
            return state;
        }
    }
}