import React ,{ useEffect,useState } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { listOrder ,updateOrder } from "./../../Redux/Actions/OrderAction";
import { Link } from 'react-router-dom';


const OrderCom = () => {
    const dispatch = useDispatch();
    const orderList = useSelector((state) => state.orderList);
    const { loading, error, orders } = orderList;


    const [id, setIdOrder] = useState("");

    useEffect(() => {
        dispatch(listOrder())
    },[dispatch]);


     
  return (
    <div>
      <div className='row'>
        <table className='table table-striped'>
            <thead>
                <tr>
                    <th scope='col'>ID</th>
                    <th scope='col'>Seller</th>
                    <th scope='col'>Product</th>
                    <th scope='col'>Image</th>
                    <th scope='col'>Phone</th>
                    <th scope='col'>Địa Chỉ</th>
                    <th scope='col'>Trạng Thái</th>
                </tr>
            </thead>
            <tbody>
                    {
                        orders && orders.map((orders) => (
                            <tr>
                                <td >{orders._id}</td>
                                <td>{orders.seller.name}</td>
                                <td>{orders.blog.title}</td>
                                <td><img src={orders.blog.image}  alt={orders.blog.title} style={{ width:'50px', height:'50px'}}/></td>
                                <td>{orders.phone}</td>
                                <td>{orders.ward}/{orders.district}/{orders.city}</td>
                                <td>{orders.status}</td>
                                <td>

                                    <button>
                                        <Link to={`/order/${orders._id}`}>Xac Nhan</Link>
                                    </button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
        </table>
      </div>
    </div>
  )
}

export default OrderCom
