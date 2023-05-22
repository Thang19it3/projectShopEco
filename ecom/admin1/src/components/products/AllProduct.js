import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { listProduct } from './../../Redux/Actions/ProductAction';

const AllProduct = () => {

    const dispatch = useDispatch();
    const productList  = useSelector((state) => state.productList);
    const { loading, error, products } =  productList;

    useEffect(() =>{
        dispatch(listProduct())
    },[dispatch])
  return (
    <div className='container'>
        <div className="row">
        {products && products.map((products) => (
            <div className='col-3' key={products._id}>
                <div className='card-image'>
                    <img src={products.image} alt={products.title} style={{ width: '100px', height: '100px'}} />
                </div>
                <div>
                    <h4>{products.category}</h4>
                    <h3>{products.title}</h3>
                    <h5>{products.price}</h5>
                </div>
            </div>
        ))}
      </div>
    </div>
  )
}

export default AllProduct
