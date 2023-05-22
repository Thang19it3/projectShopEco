import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { userLoginReducer,userListReducer } from './Reducers/UserReducer';
import { productListReducer } from "./Reducers/ProductRedu";
import { orderListReducer, orderDetailReducer } from './Reducers/OrderReducer';

const reducer = combineReducers({
    userLogin: userLoginReducer,
    userList: userListReducer,
    productList: productListReducer,
    orderList: orderListReducer,
    orderDetail: orderDetailReducer,
});

//login
const userInfoFromLocalStorage = localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null;

const initialState = {
    userLogin: { userInfo: userInfoFromLocalStorage },
};

const middleware = [thunk]

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store