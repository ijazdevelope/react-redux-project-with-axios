import { ActionTypes } from "../constants/ActionTypes";

export const setProducts = (products) => {
    return {
        type: ActionTypes.SET_PRODUCT,
        payload: products
    };
};

export const selectedProduct = (ProductDetail) => {
    return {
        type: ActionTypes.SELECTED_PRODUCT,
        payload: ProductDetail
    };
};

export const removeSelectedProduct = () => {
    return {
        type: ActionTypes.REMOVE_SELECTED_PRODUCT,
    };
};
