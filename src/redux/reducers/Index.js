import { combineReducers } from "redux";
import { ProductReducer, ProductDetailReducer } from "./ProductReducer";

export const reducers = combineReducers({
    allProducts: ProductReducer,
    productDetail: ProductDetailReducer
});
