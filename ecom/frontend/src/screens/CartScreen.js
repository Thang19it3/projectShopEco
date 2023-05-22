import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../Redux/Actions/CartActions";
import { removeFromCart } from "../Redux/Actions/CartActions.js";
import "./../css/card.css";
import Footer from "../components/Footer";
import pro from './../image/product1.png';

const CartScreen = ({ match, location, history }) => {
  window.scrollTo(0, 0);

  const dispatch = useDispatch();

  const productId = match.params.id;
  const qty = location.search ? Number(location.search.split("=")[1]) : 1;

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const total = cartItems.reduce((a, i) => a + i.qty * i.price, 0).toFixed(2);

  const checkOutHandler = () => {
    history.push("/login?redirect=shipping");
  };

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

  return (
    <>
      <Header />
      <div className="container" style={{ padding: '50px'}}>
        <div className="row">
          <div div className="col-8">
            <div className="col-12 total-free">
              <h6>
                Add <span>$42.75</span> to cart and get free shipping!
              </h6>
              <div className="progress-bar">
                <span className="progress" style={{ width: "14%" }}></span>
              </div>
            </div>
            {cartItems.length === 0 ? (
              <div className="alert alert-info text-center mt-3">
                your cart is empty
                <Link
                  className="btn btn-success mx-5 px-5 py-3"
                  to="/"
                  style={{ fontSize: "12px" }}
                >
                  SHOPPING NOW
                </Link>
              </div>
            ) : (
              <>
                {/* cartitem */}
                  <table className="table">
                    <thead>
                      <tr>
                        <th class="product-thumbnail">&nbsp;</th>
                        <th class="product-name">Product</th>
                        <th class="product-price">Price</th>
                        <th class="product-quantity">Quantity</th>
                        <th class="product-subtotal">Subtotal</th>
                        <th class="product-remove">&nbsp;</th>
                      </tr>
                    </thead>
                    {cartItems.map((item) => (
                    <tbody>
                      <tr>
                        <td>
                          <img src={item.image} alt={item.name}  style={{ width: '100px'}}/>
                        </td>
                        <td>
                          <Link to={`/products/${item.product}`}>
                            <h4 style={{ marginTop: '20px'}}>{item.name}</h4>
                          </Link>
                        </td>
                        <td>
                          <h4 style={{ marginTop: '20px'}}>${item.price}</h4>
                        </td>
                        <td>
                          <select style={{ marginTop:'20px'}}
                            value={item.qty}
                            onChange={(e) =>
                              dispatch(
                                addToCart(item.product, Number(e.target.value))
                              )
                            }
                          >
                            {[...Array(item.countInStock).keys()].map((x) => (
                              <option key={x + 1} value={x + 1}>
                                {x + 1}
                              </option>
                            ))}
                          </select>
                        </td>
                        <td>
                          <div
                            onClick={() => removeFromCartHandler(item.product)}
                            style={{ marginTop: '20px'}}
                            className="remove-button d-flex justify-content-center align-items-center"
                          >
                            <i className="fas fa-times"></i>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                    ))}
                  </table>
              </>
            )}
          </div>
          <div className="col-4 total1">
            <h5>CART TOTALS</h5>
            <hr />
            <div className="total-text">
              <h6>subtotal</h6>
              <p>${total}</p>
            </div>
            <hr />
            <div className="total-text">
              <h6>Shipping</h6>
              <p>Free Ship</p>
            </div>
            <hr />
            <div className="total-text">
              <h6>Total</h6>
              <p style={{ fontWeight: "600" }}>${total}</p>
            </div>
            <hr />
            {total > 0 && (
              <button
              style={{ marginTop: '30px'}}
                onClick={checkOutHandler}
                className="d-flex justify-content-md-center"
              >
                Proceed to checkout
              </button>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CartScreen;
