import axios from "axios";

import {
  PRODUCT_CREATE_REQUEST,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_DETAILS_FAIL,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_REQUEST,
} from "../Constants/ProductConstants.js";
import { logout } from "./UserActions.js";

import { PRODUCT_CREATE_FAIL } from "./../Constants/ProductConstants";

export const listProduct =
  (keyword = " ") =>
  async (dispatch, getState) => {
    try {
      dispatch({
        type: PRODUCT_LIST_REQUEST,
      });
      const {
        userLogin: { userInfo },
      } = getState();
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      const { data } = await axios.get(
        `http://localhost:5000/api/products?keyword=${keyword}`,
        config
      );
      dispatch({
        type: PRODUCT_LIST_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: PRODUCT_LIST_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

// single product
export const listProductDetails = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: PRODUCT_DETAILS_REQUEST,
    });
    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(
      `http://localhost:5000/api/products/${id}`,
      config
    );
    dispatch({
      type: PRODUCT_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

//create products
export const createProduct =
  (
    category,
    title,
    image,
    image1,
    image2,
    description,
    price,
    isNew,
    city,
    district,
    ward
  ) =>
  async (dispatch, getState) => {
    try {
      dispatch({
        type: PRODUCT_CREATE_REQUEST,
      });

      const {
        userLogin: { userInfo },
      } = getState();
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      const { data } = await axios.post(
        `http://localhost:5000/api/products/`,
        {
          userId: userInfo._id,
          category,
          title,
          image,
          image1,
          image2,
          description,
          price,
          isNew,
          city,
          district,
          ward,
        },
        config
      );

      dispatch({
        type: PRODUCT_DETAILS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      if (message === "Not authorized, token failed") {
        dispatch(logout());
      }
      dispatch({
        type: PRODUCT_CREATE_FAIL,
        payload: message,
      });
    }
  };

export const updateStatusShowBlog = (id, status) => async () => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.put(
      `http://localhost:5000/api/products/update-status-show`,
      { id, status },
      config
    );
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
  }
};

export const updateBlogSold = (id, status) => async () => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.put(
      `http://localhost:5000/api/products/update-sold`,
      { id, status },
      config
    );
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
  }
};

export const updateBlog =
  (
    id,
    category,
    isNew,
    price,
    title,
    description,
    city,
    district,
    ward,
    image,
    image1,
    image2
  ) =>
  async () => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const {
        data
      } = await axios.put(
        `http://localhost:5000/api/products/update-blog`, {
          id,
          category,
          isNew,
          price,
          title,
          description,
          city,
          district,
          ward,
          image,
          image1,
          image2,
        },
        config
      );
    } catch (error) {
      const message =
        error.response && error.response.data.message ?
        error.response.data.message :
        error.message;
    }
  };
