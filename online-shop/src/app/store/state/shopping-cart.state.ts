import { ICartProduct } from "src/app/interfaces";

export interface ICartState {
    products: ICartProduct[];
}

export const initialCartState: ICartState = {
    products: []
}