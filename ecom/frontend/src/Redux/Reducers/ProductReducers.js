

import { PRODUCT_CREATE_REQUEST, PRODUCT_CREATE_FAIL,
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_FAIL,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL,
    PRODUCT_CREATE_SUCCESS,
    PRODUCT_CREATE_RESET
} from "../Constants/ProductConstants.js";

//product list
export const productListReducer = (state = { products: [] }, action) => {
    switch(action.type)
    {
        case PRODUCT_LIST_REQUEST:
            return { loading: true, products:[]};
        case PRODUCT_LIST_SUCCESS:
            return { loading: false, products: action.payload };
        case PRODUCT_LIST_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

//single list
export const productDetailsReducer = (state = {
    product: {reviews:[]}
}, action) => {
    switch (action.type) {
        case PRODUCT_DETAILS_REQUEST:
            return {
                ...state, loading: true
            };
        case PRODUCT_DETAILS_SUCCESS:
            return {
                loading: false, product: action.payload
            };
        case PRODUCT_DETAILS_FAIL:
            return {
                loading: false, error: action.payload
            };
        default:
            return state;
    }
}

// create prodcut
export const productCreateReducer = ( state = {}, action) => {
    switch (action.type) {
        case PRODUCT_CREATE_REQUEST:
            return { loading: true };
        case PRODUCT_CREATE_SUCCESS:
            return { loading: false, success: true, product: action.payload };
        case PRODUCT_CREATE_FAIL:
            return { loading: false, error: action.payload };
        case PRODUCT_CREATE_RESET:
            return {}; 
        default:
            return state;
    }
}