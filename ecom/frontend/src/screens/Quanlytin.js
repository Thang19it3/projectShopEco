import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { getUserDetails } from "./../Redux/Actions/UserActions";
import { listOrder } from "./../Redux/Actions/OrderAction";
import { Link } from "react-router-dom";
import {
  listProduct,
  updateStatusShowBlog,
} from "./../Redux/Actions/ProductActions";
import imga from "./../image/images-removebg-preview.png";
import axios from "axios";

const Quanlytin = () => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const dispatch = useDispatch();
  const [showing, setShowing] = useState([]);
  const [reject, setReject] = useState([]);
  const [other, setOther] = useState([]);
  const defaultOptions = {
    significantDigits: 2,
    thousandsSeparator: ",",
    decimalSeparator: ".",
    symbol: "",
  };

  const currencyFormatter = (value, options) => {
    if (typeof value !== "number") value = 0.0;
    options = { ...defaultOptions, ...options };
    value = value.toFixed(options.significantDigits);

    const [currency, decimal] = value.split(".");
    return `${currency.replace(
      /\B(?=(\d{3})+(?!\d))/g,
      options.thousandsSeparator
    )}`;
  };
  const getdata = async () => {
    const { data } = await axios.get(
      `http://localhost:5000/api/products/users/${userInfo._id}`
    );
    setShowing(
      data.filter(
        (data) =>
          data.isShow === true && data.isAccept === 1 && data.isSold === false
      )
    );
    setReject(data.filter((data) => data.isAccept === 2));
    setOther(
      data.filter(
        (data) =>
          data.isShow === false || data.isAccept === 0 || data.isSold === true
      )
    );
  };
  useEffect(() => {
    getdata();
  }, []);

  const update = (id, status) => {
    dispatch(updateStatusShowBlog(id, status));
    window.location.reload();
  };

  const orderList = useSelector((state) => state.orderList);
  const { loading, error, orders } = orderList;
  return (
    <div>
      <Header />
      <div className="container">
        <div
          className="col-12"
          style={{
            background: "#fff",
            
          }}
        >
          <h3
            style={{
              paddingTop: "20px",
              fontWeight: "700",
              paddingLeft: "100px",
            }}
          >
            Quản lý tin đăng
          </h3>
          <hr style={{ marginLeft: "100px", marginRight: "100px" }} />
          <div style={{ display: "flex" }}>
            <div
              style={{
                display: "flex",
                paddingBottom: "20px",
                paddingLeft: "100px",
                background: "@",
              }}
            >
              <img
                src={userInfo.avatar}
                style={{ width: "100px", height: "100px" }}
              />
              <div
                className="userQl"
                style={{
                  marginLeft: "20px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <h4
                  style={{
                    fontWeight: "600",
                    fontSize: "20px",
                    marginTop: "20px",
                  }}
                >
                  {userInfo.name}
                </h4>
                <div style={{ width: "100%" }}>
                  <button
                    button
                    style={{
                      border: "1px solid #2d65a0",
                      borderRadius: "5px",
                      background: "none",
                      padding: "5px 10px",
                      fontWeight: "500",
                      color: "#2d65a0",
                      marginTop: "-10px",
                      marginRight: "20px",
                    }}
                  >
                    <Link
                      to="/user"
                      style={{
                        textDecoration: "none",
                        fontSize: "14px",
                        textDecoration: "none",
                      }}
                    >
                      Trang cá nhân
                    </Link>
                  </button>
                  <div
                    style={{
                      display: "flex",
                      position: "absolute",
                      right: "10%",
                      bottom: "50%",
                    }}
                  >
                    <img src="https://static.chotot.com/storage/icons/svg/whats_neww.svg" />
                    <h5 style={{ marginTop: "10px", marginLeft: "10px" }}>
                      Có gì mới
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr style={{ marginLeft: "100px", marginRight: "100px" }} />
          <div class="container">
            <nav className="col-12" style={{ marginBottom:'30px'}}>
              <div class="nav nav-tabs" id="nav-tab" role="tablist">
                <a
                  class="nav-item nav-link active"
                  id="nav-home-tab"
                  data-toggle="tab"
                  href="#nav-home"
                  role="tab"
                  aria-controls="nav-home"
                  aria-selected="true"
                  style={{ marginLeft:'73px'}}
                >
                  Đang hiển thị
                </a>
                <a
                  class="nav-item nav-link"
                  id="nav-profile-tab"
                  data-toggle="tab"
                  href="#nav-profile"
                  role="tab"
                  aria-controls="nav-profile"
                  aria-selected="false"
                >
                  Bị từ chối
                </a>
                <a
                  class="nav-item nav-link"
                  id="nav-contact-tab"
                  data-toggle="tab"
                  href="#nav-contact"
                  role="tab"
                  aria-controls="nav-contact"
                  aria-selected="false"
                >
                  Khác
                </a>
              </div>
            </nav>
          </div>
        </div>
         <div class="tab-content" id="nav-tabContent">
              <div
                class="tab-pane fade show active"
                id="nav-home"
                role="tabpanel"
                aria-labelledby="nav-home-tab"
              >
                {showing.length > 0 ? (
              showing.map((product) => (
                <div
                  className="orderPro col-12"
                  style={{
                    marginBottom: "20px",
                    background: "#fff",
                    marginTop: "20px",
                    padding: "15px 15px",
                  }}
                >
                  <div>
                    <div style={{ display: "flex" }}>
                      <div className="imagePro">
                        <img
                          src={product.image}
                          alt="ahih"
                          style={{
                            width: "150px",
                            height: "150px",
                            background: "red",
                          }}
                        />
                      </div>
                      <div
                        className="textPro"
                        style={{ marginLeft: "20px", marginTop: "10px" }}
                      >
                        <h3
                          style={{
                            marginTop: "10px",
                            fontSize: "18px",
                          }}
                        >
                          <Link
                            style={{
                              textDecoration: "none",
                            }}
                            to={`/products/${product._id}`}
                          >
                            {product.title}
                          </Link>
                        </h3>
                        <h3
                          style={{
                            fontWeight: "bold",
                            marginTop: "-10px",
                            fontSize: "16px",
                          }}
                        >
                          {currencyFormatter(product.price, defaultOptions)}đ
                        </h3>
                        <h5 style={{ marginTop: "-10px", color: "gray" }}>
                          {product.createdAt}
                        </h5>
                      </div>
                      <div>
                        <img
                          src={imga}
                          style={{
                            width: "20px",
                            position: "absolute",
                            right: "1%",
                          }}
                        />
                      </div>
                    </div>
                    <hr style={{ width: "980px" }} />
                    <div>
                      <div className="row">
                        {product.isShow === false ? (
                          <Link
                            div
                            className="col-6"
                            style={{
                              textAlign: "center",
                              height: "30px",
                              borderRight: "1px solid gray",
                              textDecoration: "none",
                            }}
                            onClick={() => update(product._id, true)}
                          >
                            <h3
                              style={{
                                color: "gray",
                                fontSize: "14px",
                                marginTop: "10px",
                              }}
                            >
                              Hiện tin
                            </h3>
                          </Link>
                        ) : (
                          <Link
                            div
                            className="col-6"
                            style={{
                              textAlign: "center",
                              height: "30px",
                              borderRight: "1px solid gray",
                              textDecoration: "none",
                            }}
                            onClick={() => update(product._id, false)}
                          >
                            <h3
                              style={{
                                color: "gray",
                                fontSize: "14px",
                                marginTop: "10px",
                              }}
                            >
                              Ẩn tin
                            </h3>
                          </Link>
                        )}

                        <Link
                          className="col-6"
                          to={`/sua-tin/${product._id}`}
                          style={{
                            textAlign: "center",
                            height: "30px",
                            textDecoration: "none",
                          }}
                        >
                          <h3
                            style={{
                              color: "gray",
                              fontSize: "14px",
                              marginTop: "10px",
                            }}
                          >
                            Chỉnh sửa
                          </h3>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div style={{ textAlign: "center", padding: "200px" }}>
                <h5>Chưa có tin đăng nào</h5>
              </div>
            )}
              </div>
              <div
                class="tab-pane fade"
                id="nav-profile"
                role="tabpanel"
                aria-labelledby="nav-profile-tab"
              >
                {reject.length > 0 ? (
              reject.map((product) => (
                <div
                  className="orderPro col-12"
                  style={{
                    marginBottom: "20px",
                    background: "#fff",
                    marginTop: "20px",
                    padding: "15px 15px",
                  }}
                >
                  <div>
                    <div style={{ display: "flex" }}>
                      <div className="imagePro">
                        <img
                          src={product.image}
                          alt="ahih"
                          style={{
                            width: "150px",
                            height: "150px",
                            background: "red",
                          }}
                        />
                      </div>
                      <div
                        className="textPro"
                        style={{ marginLeft: "20px", marginTop: "10px" }}
                      >
                        <h5
                          style={{
                            color: "red",
                            fontSize: "15px",
                            marginTop: "0px",
                            fontWeight: "bold",
                          }}
                        >
                          Bị từ chối
                        </h5>
                        <h3
                          style={{
                            marginTop: "10px",
                            fontSize: "18px",
                          }}
                        >
                          {product.title}
                        </h3>
                        <h3
                          style={{
                            fontWeight: "bold",
                            marginTop: "-10px",
                            fontSize: "16px",
                          }}
                        >
                          {currencyFormatter(product.price, defaultOptions)}đ
                        </h3>
                        <h5 style={{ marginTop: "-10px", color: "gray" }}>
                          {product.createdAt}
                        </h5>
                      </div>
                      <div>
                        <img
                          src={imga}
                          style={{
                            width: "20px",
                            position: "absolute",
                            right: "1%",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div style={{ textAlign: "center", padding: "200px" }}>
                <h5>Chưa có tin đăng nào</h5>
              </div>
            )}
              </div>
              <div
                class="tab-pane fade"
                id="nav-contact"
                role="tabpanel"
                aria-labelledby="nav-contact-tab"
              >
                {other.length > 0 ? (
              other.map((product) => (
                <div
                  className="orderPro col-12"
                  style={{
                    marginBottom: "20px",
                    background: "#fff",
                    marginTop: "20px",
                    padding: "15px 15px",
                  }}
                >
                  <div>
                    <div style={{ display: "flex" }}>
                      <div className="imagePro">
                        <img
                          src={product.image}
                          alt="ahih"
                          style={{
                            width: "150px",
                            height: "150px",
                            background: "red",
                          }}
                        />
                      </div>
                      <div
                        className="textPro"
                        style={{ marginLeft: "20px", marginTop: "10px" }}
                      >
                        <h5
                          style={{
                            color: "red",
                            fontSize: "15px",
                            marginTop: "0px",
                            fontWeight: "bold",
                          }}
                        >
                          {product.isShow === false
                            ? "Đã ẩn"
                            : product.isShow === true && product.isAccept === 0
                            ? "Chờ duyệt"
                            : "Đã bán"}
                        </h5>
                        <h3
                          style={{
                            marginTop: "10px",
                            fontSize: "18px",
                          }}
                        >
                          {product.title}
                        </h3>
                        <h3
                          style={{
                            fontWeight: "bold",
                            marginTop: "-10px",
                            fontSize: "16px",
                          }}
                        >
                          {currencyFormatter(product.price, defaultOptions)}đ
                        </h3>
                        <h5 style={{ marginTop: "-10px", color: "gray" }}>
                          {product.createdAt}
                        </h5>
                      </div>
                      <div>
                        <img
                          src={imga}
                          style={{
                            width: "20px",
                            position: "absolute",
                            right: "1%",
                          }}
                        />
                      </div>
                    </div>
                    <hr style={{ width: "980px" }} />
                    <div>
                      <div className="row">
                        {product.isShow === false ? (
                          <Link
                            div
                            className="col-6"
                            style={{
                              textAlign: "center",
                              height: "30px",
                              borderRight: "1px solid gray",
                              textDecoration: "none",
                            }}
                            onClick={() => update(product._id, true)}
                          >
                            <h3
                              style={{
                                color: "gray",
                                fontSize: "14px",
                                marginTop: "10px",
                              }}
                            >
                              Hiện tin
                            </h3>
                          </Link>
                        ) : (
                          <Link
                            div
                            className="col-6"
                            style={{
                              textAlign: "center",
                              height: "30px",
                              borderRight: "1px solid gray",
                              textDecoration: "none",
                            }}
                            onClick={() => update(product._id, false)}
                          >
                            <h3
                              style={{
                                color: "gray",
                                fontSize: "14px",
                                marginTop: "10px",
                              }}
                            >
                              Ẩn tin
                            </h3>
                          </Link>
                        )}

                        <Link
                          className="col-6"
                          to = {
                            `/sua-tin/${product._id}`
                          }
                          style={{
                            textAlign: "center",
                            height: "30px",
                            textDecoration: "none",
                          }}
                        >
                          <h3
                            style={{
                              color: "gray",
                              fontSize: "14px",
                              marginTop: "10px",
                            }}
                          >
                            Chỉnh sửa
                          </h3>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div style={{ textAlign: "center", padding: "200px" }}>
                <h5>Chưa có tin đăng nào</h5>
              </div>
            )}
              </div>
            </div>
      </div>
      <Footer />
    </div>
  );
};

export default Quanlytin;
