import React, { useState } from "react";
import Header from "../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { savePaymentMethod } from "../Redux/Actions/CartActions";

const PaymentScreen = ({ history }) => {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  if(!shippingAddress)
  {
    history.push("/shipping");
  }

  const [paymentMethod, setPaymentMethod] = useState("Paypal");

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    history.push("/placeorder");
  };
  return (
    <div>
      <Header />
      <div className="container  d-flex justify-content-center align-items-center">
        <form
          className="Login2 col-md-8 col-lg-4 col-11"
          onSubmit={submitHandler}
        >
          <h6>SELECT PAYMENT METHOD</h6>
          <div className="payment-container">
            <div className="radio-container">
              <input className="form-check-input" type="radio" value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
               />
              <lable className="form-check-label">Paypal or Credit Card</lable>
            </div>
          </div>

          <button type="submit">Container</button>
        </form>
      </div>
    </div>
  );
};

export default PaymentScreen;
