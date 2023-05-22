import React, { useEffect, useState } from 'react';
import Headers from "./../Header";
import axios from "axios"

const SingleProduct = ({match}) => {

  const [qty, setQty] = useState(0);
  const [product, setProduct] = useState({});

  useEffect(() => {
    const fetchProducts = async() => {
      const { data } = await axios.get(`/api/product/${match.params.id}`);
      setProduct(data)
    };
    fetchProducts();
  },[]);
  return (
    <>
      <Headers />
      <div className='container single-product'>
        <div className='row'>
            <div className='col-md-6'>
                <div className='single-image'>
                    <img src={product.image} alt={product.name} />
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default SingleProduct
