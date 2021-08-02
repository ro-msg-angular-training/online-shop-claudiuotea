import { createSelector } from "@ngrx/store";
import { IAppState } from "../state/app.state";
import { IUserState } from "../state/user.state";

export const selectUser = (state: IAppState) => state.user;

export const selectCurrentUser = createSelector(
    selectUser,
    (state: IUserState) => state.currentUser
);

export const selectIsAdmin = createSelector(
    selectUser,
    (state: IUserState) => state.isAdmin
);

export const selectIsCustomer = createSelector(
    selectUser,
    (state: IUserState) => state.isCustomer
);

export const selectLoaded = createSelector(
    selectUser,
    (state: IUserState) => state.loaded
);

export const selectLoading = createSelector(
    selectUser,
    (state: IUserState) => state.loading
);

export const selectError = createSelector(
    selectUser,
    (state: IUserState) => state.error
);