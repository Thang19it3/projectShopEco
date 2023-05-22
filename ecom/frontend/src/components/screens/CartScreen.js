import React ,{useEffect} from 'react';
import Header from '../Header';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from './../../Redux/Actions/CartActions';

const CartScreen = ({ match, location }) => {
    window.scrollTo(0, 0);

    const productId = match.params.id;
    const qty = location.search ?  Number(location.search.split("=")[1]) : 1;
    
    

  return (
    <>
        <Header />
        <div className='container'>
            <div className='alert alert-info text-center mt-3'>
                Total Cart Products
                <Link className='text-success mx-2' to="/cart">
                    (4)
                </Link>
            </div>
            <div className='cart-item row'>
                <div className='remove-button d-flex justify-content-center align-items-center'>
                    <i className='fas fa-times'></i>
                </div>
                <div className='cart-image col-md-3'>
                    <img alt='nike' />
                </div>
                <div className='cart-text col-md-2 col-sm-5 mt-md-5 mt-3 mt-md-0 d-flex flex-column'>
                    <h6>QUANTITY</h6>
                    <section>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                    </section>
                </div>
                <div className='cart-price mt-3 mt-md-0 col-md-2 align-items-sm-end align-items-center'>
                    <h6>SUBTOTAL</h6>
                    <h4>$456</h4>
                </div>
            </div>

            <div className='total'>
                <span className='sub'>total:</span>
                <span className='total-price'>$456</span>
            </div>
            <hr />
            <div className='cart-buttons d-flex align-items-center row'>
                <Link to="/" className='col-md-6'>
                    <button>Countinue to shopping</button>
                </Link>
                <div className='col-md-6 d-flex justify-content-md-end mt-3 mt-md-0'>
                    <button>
                        <Link to="/shipping" className='text-white'>
                            Checkout
                        </Link>
                    </button>
                </div>
            </div>
        </div> 
    </>
  )
}

export default CartScreen
