import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { listOrderDetails } from "./../../Redux/Actions/OrderAction";

const Order2 = ({ match }) => {
    const dispatch = useDispatch();
    const orderId = match.params.id;
    console.log(orderId);

    const orderDetails = useSelector((state) => state.orderDetails);

    const { loading, error, order } = orderDetails;

    useEffect(() => {
        dispatch(listOrderDetails(orderId))
    },[dispatch, orderId]);
  return (
    <div>
      <h1>Kkkk</h1>
      <h4>hihih</h4>
      { order && order.map((order) => (
        <h1>{order.name}</h1>
      ))}
    </div>
  )
}

export default Order2
