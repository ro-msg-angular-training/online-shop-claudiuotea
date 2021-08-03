import { ICartProduct } from "src/app/interfaces";

export interface ICartState {
    products: ICartProduct[];
    error: string;
};

export const initialCartState: ICartState = {
    products: [],
    error:''
};