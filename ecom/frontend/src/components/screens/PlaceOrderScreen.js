import React from 'react';
import { Link } from "react-router-dom";
import Header from '../Header';

const PlaceOrderScreen = () => {
    window.scrollTo(0, 0);
    
    const placeOrderHandler = (e) => {
        e.preventDefault();
    };
  return (
    <>
        <Header />
        <div className='container'>
            <div className='row order-detail'></div>
        </div> 
    </>
  )
}

export default PlaceOrderScreen
