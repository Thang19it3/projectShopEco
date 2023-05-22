import React from 'react';
import { Link } from "react-router-dom";
import Header from '../Header';

const PaymentScreen = () => {
    window.scrollTo(0, 0);
    
    const submitHandler = (e) => {
        e.preventDefault();
    };
  return (
    <>
      <Header />
      <div className='container d-flex justify-content-center align-items-center loign-pay'>
        <form className='Login2 col-md-8 col-lg-14 col-11' onSubmit={submitHandler}>
            <h6>Select Payment method</h6>
            <div className='payment-container'>
                <div className='radio-payment'>
                    <input className='form-check-input' type='radio' value='PayPal' />
                    <label className='form-check-label'>Paypal or Credit Card</label>
                </div>
            </div>

            <button type='submit'>
                <Link to='/placeorder' className='text-white'>
                    Contine
                </Link>
            </button>
        </form>
      </div>
    </>
  )
}

export default PaymentScreen
