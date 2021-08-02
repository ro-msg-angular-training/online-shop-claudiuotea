import { IUser } from "src/app/interfaces";

export interface IUserState {
    currentUser: IUser;
    isCustomer: boolean;
    isAdmin: boolean;
    loading: boolean;
    loaded: boolean;
    error: string;
}

export const initialUserState: IUserState = {
    currentUser: {username:'', password:''},
    isCustomer: false,
    isAdmin: false,
    loading: false,
    loaded: false,
    error: ""
}