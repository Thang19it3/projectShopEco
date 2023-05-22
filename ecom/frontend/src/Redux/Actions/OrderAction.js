import axios from "axios";
import {
  CART_CREATE_FAIL,
  CART_CREATE_REQUEST,
  CART_CREATE_SUCCESS,
  ORDER_DETAILS_FAIL,
  ORDER_DETAILS_REQUEST,
  ORDER_DETAILS_SUCCESS,
  ORDER_LIST_FAIL,
  ORDER_LIST_REQUEST,
  ORDER_LIST_SUCCESS,
} from "../Constants/OrderConstants";
import { logout } from "./UserActions.js";

export const listOrder = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: ORDER_LIST_REQUEST,
    });
    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(
      `http://localhost:5000/api/order/`,
      config
    );

    dispatch({
      type: ORDER_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ORDER_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listOrderDetails = (id) => async (dispatch) => {
  try {
    dispatch({
      type: ORDER_DETAILS_REQUEST,
    });

    const { data } = await axios.get(`http://localhost:5000/api/order/${id}`);
    dispatch({
      type: ORDER_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ORDER_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const orderProduct =
  (
    seller,
    blog,
    name,
    phone,
    city,
    district,
    ward,
    address,
    total,
    note,
    status
  ) =>
  async (dispatch, getState) => {
    try {
      const {
        userLogin: { userInfo },
      } = getState();
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
      const { data } = await axios.post(
        `http://localhost:5000/api/order`,
        {
          buyerId: userInfo._id,
          seller,
          blog,
          name,
          phone,
          city,
          district,
          ward,
          address,
          total,
          note,
          status,
        },
        config
      );
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
    }
  };

export const deleteOrder = (id) => async () => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const data2 = await axios.delete(
      `http://localhost:5000/api/order/delete/${id}`,
      config
    );
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
  }
};

export const updateOrderStatus = (id, status, timeReceived) => async () => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const data2 = await axios.put(
      `http://localhost:5000/api/order/update-status`,
      { id, status, timeReceived },
      config
    );
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
  }
};
