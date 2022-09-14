import { ProductModel } from "./product"; 

export interface BasketModel {
  item: ProductModel;
  count: number;
}

export interface BasketType {
    items: BasketModel[];
  }