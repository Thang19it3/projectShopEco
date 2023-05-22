
import { ORDER_DETAILS_REQUEST, ORDER_LIST_FAIL, ORDER_LIST_REQUEST, ORDER_LIST_SUCCESS, ORDER_DETAILS_SUCCESS, ORDER_DETAILS_FAIL } from './../Constants/OrderConstants';
import axios  from 'axios';
import {
    logout
} from './UserAction.js';

export const listOrder = () => async (dispatch) => {
    try {
        dispatch({
            type: ORDER_LIST_REQUEST
        })

        const {
            data
        } = await axios.get(`http://localhost:5000/api/order/`);

        dispatch({
            type: ORDER_LIST_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: ORDER_LIST_FAIL,
            payload: error.response && error.response.data.message ?
                error.response.data.message :
                error.message,
        });
    }
};

export const listOrderDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: ORDER_DETAILS_REQUEST });

        const {
            data
        } = await axios.get(`http://localhost:5000/api/order/${id}`);
         dispatch({
             type: ORDER_DETAILS_SUCCESS,
             payload: data
         });
    } catch (error)
    {
        const message = error.response && error.response.data.message ?
            error.response.data.message :
            error.message;
        
        dispatch({
            type: ORDER_DETAILS_FAIL,
            payload: message,
        });
    }
}