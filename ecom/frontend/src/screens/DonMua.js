import React, { useEffect, useState } from "react";
import "./../css/donmua.css";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  deleteOrder,
  listOrder,
  updateOrderStatus,
} from "./../Redux/Actions/OrderAction";
import { getUserDetails } from "./../Redux/Actions/UserActions.js";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import axios from "axios";

const DonMua = () => {
  const dispatch = useDispatch();
  const [buyorder, setBuyOrder] = useState([]);

  const [wating, setWaiting] = useState([]);
  const [process, setProcess] = useState([]);
  const [shiping, setShipping] = useState([]);
  const [receive, setReceive] = useState([]);
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
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const getdata = async () => {
    const { data } = await axios.get(
      `http://localhost:5000/api/order/buyer/${userInfo._id}`
    );
    setBuyOrder(data);
    setWaiting(data.filter((data) => data.status === "Chờ xác nhận"));
    setProcess(data.filter((data) => data.status === "Đang xử lý"));
    setShipping(data.filter((data) => data.status === "Đang giao hàng"));
    setReceive(data.filter((data) => data.status === "Đã giao"));
  };

  useEffect(() => {
    getdata();
  }, []);

  const deleteorder = (oid) => {
    dispatch(deleteOrder(oid));
    window.location.reload();
  };

  const getTime = () => {
    let ts = Date.now();
    let date_ob = new Date(ts);
    let date = date_ob.getDate();
    let month = date_ob.getMonth() + 1;
    let year = date_ob.getFullYear();
    let hours = date_ob.getHours();
    let minutes = date_ob.getMinutes();
    return date + "/" + month + "/" + year + " - " + hours + ":" + minutes;
  };

  const received = (oid, status) => {
    dispatch(updateOrderStatus(oid, status, getTime()));
    window.location.reload();
  };
  return (
    <div>
      <Header />
      <div class="container">
        <div style={{ background: "#fff", width: "1110px" }}>
          <nav
            className="col-12"
            style={{ marginBottom: "30px", padding: "20px 20px" }}
          >
            <div class="nav nav-tabs" id="nav-tab" role="tablist">
              <a
                class="nav-item nav-link active"
                id="nav-home-tab"
                data-toggle="tab"
                href="#nav-home"
                role="tab"
                aria-controls="nav-home"
                aria-selected="true"
                style={{ marginLeft: "73px" }}
              >
                Chờ xác nhận
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
                Đang xử lý
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
                Đang giao
              </a>
              <a
                class="nav-item nav-link"
                id="nav-contact-tab"
                data-toggle="tab"
                href="#nav-contact1"
                role="tab"
                aria-controls="nav-contact"
                aria-selected="false"
              >
                Đã giao
              </a>
            </div>
          </nav>
        </div>

       
        <div class="tab-content" id="nav-tabContent">
          <div
            class="tab-pane fade show active"
            id="nav-home"
            role="tabpanel"
            aria-labelledby="nav-home-tab"
          >
            {wating.length > 0 ? (
              wating.map((orders) => (
                <div
                  style={{
                    background: "#fff",
                    marginTop: "10px",
                    paddingBottom: "20px",
                    paddingLeft: "20px",
                  }}
                >
                  <div className="orderPro">
                    <div
                      className="detailPro"
                      style={{
                        display: "flex",
                        padding: "10px 10px",
                      }}
                    >
                      <div className="imagePro">
                        <img
                          src={orders.blog.image}
                          alt={orders.blog.title}
                          style={{
                            width: "160px",
                            height: "160px",
                            background: "red",
                          }}
                        />
                      </div>
                      <div className="textPro" style={{ marginLeft: "50px" }}>
                        <h3 style={{ fontWeight: "600", fontSize: "25px" }}>
                          {orders.blog.title}
                        </h3>
                        <h6 style={{ fontWeight: "600", fontSize: "20px" }}>
                          Thanh toán COD:{" "}
                          <span style={{ color: "green" }}>
                            {currencyFormatter(orders.total, defaultOptions)}đ
                          </span>{" "}
                        </h6>
                      </div>
                    </div>
                  </div>
                  <hr
                    style={{ border: "0.5px solid gray", background: "gray" }}
                  />
                  <h5
                    style={{
                      color: "blue",
                      marginLeft: "10px",
                      fontSize: "18px",
                    }}
                  >
                    Đơn hàng chờ xác nhận
                  </h5>
                  <h5
                    style={{
                      color: "blue",
                      marginLeft: "30px",
                      fontSize: "18px",
                      textAlign: "right",
                      marginRight: "10px",
                    }}
                  >
                    {orders.createdAt}
                  </h5>
                  <button
                    style={{
                      background: "#ff8800",
                      border: "none",
                      padding: "10px  10px",
                      color: "#fff",
                      marginRight: "20px",
                      borderRadius: "5px",
                      marginLeft: "10px",
                    }}
                  >
                    <Link
                      to={`/order-detail/${orders._id}`}
                      style={{ color: "#fff", textDecoration: "none" }}
                    >
                      Xem đơn hàng
                    </Link>
                  </button>
                  <button
                    style={{
                      background: "#fff",
                      border: "none",
                      padding: "10px  10px",
                      color: "black",
                      marginRight: "20px",
                      border: "1px solid #000",
                      borderRadius: "5px",
                    }}
                    onClick={() => deleteorder(orders._id)}
                  >
                    Hủy đơn hàng
                  </button>
                </div>
              ))
            ) : (
              <div
                className="col-lg-12"
                style={{
                  textAlign: "center",
                  padding: "100px",
                  backgroundColor: "#fff",
                  marginTop: "10px",
                }}
              >
                <h5>Không có đơn hàng trong mục này</h5>
              </div>
            )}
          </div>
          <div
            class="tab-pane fade"
            id="nav-profile"
            role="tabpanel"
            aria-labelledby="nav-profile-tab"
          >
            {process.length > 0 ? (
              process.map((orders) => (
                <div
                  style={{
                    background: "#fff",
                    marginTop: "10px",
                  }}
                >
                  <div className="orderPro">
                    <div
                      className="detailPro"
                      style={{
                        display: "flex",
                        padding: "10px 10px",
                      }}
                    >
                      <div className="imagePro">
                        <img
                          src={orders.blog.image}
                          alt={orders.blog.title}
                          style={{
                            width: "160px",
                            height: "160px",
                            background: "red",
                          }}
                        />
                      </div>
                      <div className="textPro" style={{ marginLeft: "50px" }}>
                        <h3 style={{ fontWeight: "600", fontSize: "25px" }}>
                          {orders.blog.title}
                        </h3>
                        <h6 style={{ fontWeight: "600", fontSize: "20px" }}>
                          Thanh toán COD:{" "}
                          <span style={{ color: "green" }}>
                            {currencyFormatter(orders.total, defaultOptions)}đ
                          </span>{" "}
                        </h6>
                      </div>
                    </div>
                  </div>
                  <hr
                    style={{ border: "0.5px solid gray", background: "gray" }}
                  />
                  <h5
                    style={{
                      color: "blue",
                      marginLeft: "10px",
                      fontSize: "18px",
                    }}
                  >
                    Đơn hàng đang xử lý
                  </h5>
                  <h5
                    style={{
                      color: "blue",
                      marginLeft: "30px",
                      fontSize: "18px",
                      textAlign: "right",
                      marginRight: "10px",
                    }}
                  >
                    {orders.createdAt}
                  </h5>
                  <button
                    style={{
                      background: "#ff8800",
                      border: "none",
                      padding: "10px  10px",
                      color: "#fff",
                      marginRight: "20px",
                      borderRadius: "5px",
                      marginLeft: "10px",
                    }}
                  >
                    <Link
                      to={`/order-detail/${orders._id}`}
                      style={{ color: "#fff", textDecoration: "none" }}
                    >
                      Xem đơn hàng
                    </Link>
                  </button>
                  <button
                    style={{
                      background: "#fff",
                      border: "none",
                      padding: "10px  10px",
                      color: "black",
                      marginRight: "20px",
                      border: "1px solid #000",
                      borderRadius: "5px",
                    }}
                    onClick={() => deleteorder(orders._id)}
                  >
                    Hủy đơn hàng
                  </button>
                </div>
              ))
            ) : (
              <div
                className="col-lg-12"
                style={{
                  textAlign: "center",
                  padding: "100px",
                  backgroundColor: "#fff",
                  marginTop: "10px",
                }}
              >
                <h5>Không có đơn hàng trong mục này</h5>
              </div>
            )}
          </div>
          <div
            class="tab-pane fade"
            id="nav-contact"
            role="tabpanel"
            aria-labelledby="nav-contact-tab"
          >
            {shiping.length > 0 ? (
              shiping.map((orders) => (
                <div
                  style={{
                    background: "#fff",
                    marginTop: "10px",
                  }}
                >
                  <div className="orderPro">
                    <div
                      className="detailPro"
                      style={{
                        display: "flex",
                        padding: "10px 10px",
                      }}
                    >
                      <div className="imagePro">
                        <img
                          src={orders.blog.image}
                          alt={orders.blog.title}
                          style={{
                            width: "160px",
                            height: "160px",
                            background: "red",
                          }}
                        />
                      </div>
                      <div className="textPro" style={{ marginLeft: "50px" }}>
                        <h3 style={{ fontWeight: "600", fontSize: "25px" }}>
                          {orders.blog.title}
                        </h3>
                        <h6 style={{ fontWeight: "600", fontSize: "20px" }}>
                          Thanh toán COD:{" "}
                          <span style={{ color: "green" }}>
                            {currencyFormatter(orders.total, defaultOptions)}đ
                          </span>{" "}
                        </h6>
                      </div>
                    </div>
                  </div>
                  <hr
                    style={{ border: "0.5px solid gray", background: "gray" }}
                  />
                  <h5
                    style={{
                      color: "blue",
                      marginLeft: "10px",
                      fontSize: "18px",
                    }}
                  >
                    Kiểm tra hàng trước khi bấm xác nhận
                  </h5>
                  <h5
                    style={{
                      color: "blue",
                      marginLeft: "30px",
                      fontSize: "18px",
                      textAlign: "right",
                      marginRight: "10px",
                    }}
                  >
                    {orders.createdAt}
                  </h5>
                  <button
                    style={{
                      background: "#fff",
                      border: "none",
                      padding: "10px  10px",
                      color: "black",
                      marginRight: "20px",
                      border: "1px solid #000",
                      borderRadius: "5px",
                    }}
                  >
                    <Link to={`/order-detail/${orders._id}`}>Xem đơn hàng</Link>
                  </button>
                  <button
                    style={{
                      background: "#ff8800",
                      border: "none",
                      padding: "10px  10px",
                      color: "#fff",
                      marginRight: "20px",
                      borderRadius: "5px",
                      marginLeft: "10px",
                    }}
                    onClick={() => received(orders._id, "Đã giao")}
                  >
                    Đã nhận hàng
                  </button>
                </div>
              ))
            ) : (
              <div
                className="col-lg-12"
                style={{
                  textAlign: "center",
                  padding: "100px",
                  backgroundColor: "#fff",
                  marginTop: "10px",
                }}
              >
                <h5>Không có đơn hàng trong mục này</h5>
              </div>
            )}
          </div>
          <div
            class="tab-pane fade"
            id="nav-contact1"
            role="tabpanel"
            aria-labelledby="nav-contact-tab"
          >
            {receive.length > 0 ? (
              receive.map((orders) => (
                <div
                  style={{
                    background: "#fff",
                    marginTop: "10px",
                  }}
                >
                  <div className="orderPro">
                    <div
                      className="detailPro"
                      style={{
                        display: "flex",
                        padding: "10px 10px",
                      }}
                    >
                      <div className="imagePro">
                        <img
                          src={orders.blog.image}
                          alt={orders.blog.title}
                          style={{
                            width: "160px",
                            height: "160px",
                            background: "red",
                          }}
                        />
                      </div>
                      <div className="textPro" style={{ marginLeft: "50px" }}>
                        <h3 style={{ fontWeight: "600", fontSize: "25px" }}>
                          {orders.blog.title}
                        </h3>
                        <h6 style={{ fontWeight: "600", fontSize: "20px" }}>
                          Thanh toán COD:{" "}
                          <span style={{ color: "green" }}>
                            {currencyFormatter(orders.total, defaultOptions)}đ
                          </span>{" "}
                        </h6>
                      </div>
                    </div>
                  </div>
                  <hr
                    style={{ border: "0.5px solid gray", background: "gray" }}
                  />
                  <h5
                    style={{
                      color: "blue",
                      marginLeft: "10px",
                      fontSize: "18px",
                    }}
                    className="text-info"
                  >
                    Hoàn tất đơn hàng
                  </h5>
                  <h5
                    style={{
                      color: "blue",
                      marginLeft: "30px",
                      fontSize: "18px",
                      textAlign: "right",
                      marginRight: "10px",
                    }}
                  >
                    {orders.createdAt}
                  </h5>
                  <button
                    style={{
                      background: "#ff8800",
                      border: "none",
                      padding: "10px  10px",
                      color: "#fff",
                      marginRight: "20px",
                      borderRadius: "5px",
                      marginLeft: "10px",
                    }}
                  >
                    <Link
                      to={`/order-detail/${orders._id}`}
                      style={{ color: "white" }}
                    >
                      Xem lại đơn hàng
                    </Link>
                  </button>
                </div>
              ))
            ) : (
              <div
                className="col-lg-12"
                style={{
                  textAlign: "center",
                  padding: "100px",
                  backgroundColor: "#fff",
                  marginTop: "10px",
                }}
              >
                <h5>Không có đơn hàng trong mục này</h5>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DonMua;
