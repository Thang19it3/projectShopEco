import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { productListReducer,productDetailsReducer,productCreateReducer } from "./Reducers/ProductReducers.js";
import { cartReducer } from "../Redux/Reducers/CartReducers.js";
import { userLoginReducer,userRegisterReducer,userDetailsReducer,userUpdateProfileReducer, userListReducer } from "../Redux/Reducers/UserReducers.js";
import { orderProductReduct,orderListReducer, orderDetailReducer } from "./Reducers/OrderReducers.js";




const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userDetails: userDetailsReducer,
    userUpdateProfile: userUpdateProfileReducer,
    productCreate: productCreateReducer,
    orderList: orderListReducer,
    orderDetail: orderDetailReducer,
    userList: userListReducer,
});

const cartItemsFromLocalStorage = localStorage.getItem("cartItems")
? JSON.parse(localStorage.getItem("cartItems"))
: [];

//login
const userInfoFromLocalStorage = localStorage.getItem("userInfo") ?
    JSON.parse(localStorage.getItem("userInfo"))
    : null;

    //shipping
const shippingAddressFromLocalStorage = localStorage.getItem("shippingAddress") ?
    JSON.parse(localStorage.getItem("shippingAddress"))
    : {};

const initialState = {
    cart: {
        cartItems: cartItemsFromLocalStorage,
        shippingAddress: shippingAddressFromLocalStorage,
    },
    userLogin: {
        userInfo: userInfoFromLocalStorage,
    },
};

const middleware = [thunk];

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;