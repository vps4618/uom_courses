import { Product } from "./product.model";

export interface productResponse{
    message:string;
    data:Product[];
}