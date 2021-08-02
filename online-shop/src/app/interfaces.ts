export interface IProduct {
    id?: number;
    name?: string;
    description?: string;
    imageUrl?: string;
    price?: number;
    category?: string
  }

  export interface ICartProduct {
    productId: number;
    category: string;
    name: string;
    price: number;
    quantity: number;
  }
  
  export interface IOrder {
    customer: string;
    products: ICartProduct[];
  }
  
  export interface IUser {
    username: string;
    password: string | null;
    fullName?: string;
    roles?: string[];
  }
  