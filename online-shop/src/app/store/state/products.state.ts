import { IProduct } from "src/app/interfaces";

export interface IProductsState {
    products: IProduct[];
    currentProduct: IProduct;
    prodId: number;
    prodQuantity: number;
    loading: boolean;
    loaded: boolean;
    error: string;
};

export const initialProductsState: IProductsState = {
    currentProduct: {},
    prodId: -1,
    prodQuantity: -1,
    products: [],
    loaded:false,
    loading:false,
    error:''
};