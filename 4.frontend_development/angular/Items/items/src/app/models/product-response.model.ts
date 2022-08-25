import { Product } from "./product.model";

//get data into this model after sending get request
export interface productResponse{
    data:Product[];
}