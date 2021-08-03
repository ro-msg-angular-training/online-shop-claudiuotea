import { Action } from "@ngrx/store";
import { IUser } from "src/app/interfaces";

export enum EUserActions {
    Login = '[Login Component] Get User',
    GetUserSuccess = '[Login Component] Get User Success',
    GetUserFail = '[Login Component] Get User Fail'
}

export class Login implements Action {
    public readonly type = EUserActions.Login;

    constructor(public payload: IUser) { }
}

export class GetUserSuccess implements Action {
    public readonly type = EUserActions.GetUserSuccess;

    constructor(public payload: IUser) { }
}

export class GetUserFail implements Action {
    public readonly type = EUserActions.GetUserFail;

    constructor(public payload: string) { }
}

export type UserActions = Login | GetUserFail | GetUserSuccess;
