import React, { useState, useEffect } from "react";
import { listOrderDetails } from "./../Redux/Actions/OrderAction";
import { useDispatch, useSelector } from "react-redux";
import "./../css/detailorder.css";
import fsd from "./../image/image.jpg";
import Header from "../components/Header";
import Footer from "../components/Footer";
import axios from "axios";
import Loading from "../components/LoandingError/Loading";

const DetailsSellOrder = ({ match }) => {
  const orderId = match.params.id;
  const dispatch = useDispatch();
  const [order, setOrder] = useState("");
  const getdata = async () => {
    const { data } = await axios.get(
      `http://localhost:5000/api/order/${orderId}`
    );
    setOrder(data);
  };
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
  useEffect(() => {
    getdata();
  }, []);
  return (
    <>
      <Header />
      {order !== "" ? (
        <div>
          <div
            className="detailOrd col-12"
            style={{
              display: "block",
              margin: "auto",
              marginTop: "50px",
              background: "#fff",
              borderRadius: "5px",
            }}
          >
            <div
              className="nameOrd"
              style={{
                margin: "auto",
                padding: "20px 20px",
              }}
            >
              <img
                src={order.blog.image}
                style={{ width: "200px", height: "130px" }}
              />
              <div style={{ marginLeft: "10px", marginTop: "20px" }}>
                <h4>{order.blog.title}</h4>
                <h4 style={{ marginBottom: "10px", color: "green" }}>
                  <span style={{ color: " red" }}>Thanh toán COD: </span>{" "}
                  {currencyFormatter(order.total, defaultOptions)}đ
                </h4>
                <h5>
                  {order.blog.ward}, {order.blog.district}, {order.blog.city}
                </h5>
              </div>
            </div>
            <hr style={{ borderTop: "1px dotted gray" }} />
            <div>
              <h3 style={{ color: "black" }}>Giao đến</h3>
              <h5
                style={{
                  paddingBottom: "15px",
                  fontWeight: "bold",
                  color: "black",
                }}
              >
                {order.address}, phường {order.ward}, quận {order.district},{" "}
                {order.city}
              </h5>
              <h3 style={{ color: "black" }}>Thông tin người mua</h3>
              <h5
                style={{
                  paddingBottom: "15px",
                  color: "black",
                }}
              >
                Họ và tên:{" "}
                <span
                  style={{
                    paddingBottom: "15px",
                    fontWeight: "bold",
                    color: "black",
                  }}
                >
                  {order.name}
                </span>
              </h5>
              <h5
                style={{
                  paddingBottom: "15px",
                  color: "black",
                }}
              >
                Số điện thoại:{" "}
                <span
                  style={{
                    paddingBottom: "15px",
                    fontWeight: "bold",
                    color: "black",
                  }}
                >
                  {order.phone}
                </span>
              </h5>
              <h5
                style={{
                  paddingBottom: "15px",
                  color: "black",
                }}
              >
                Địa chỉ:{" "}
                <span
                  style={{
                    paddingBottom: "15px",
                    fontWeight: "bold",
                    color: "black",
                  }}
                >
                  {order.address}, phường {order.ward}, quận {order.district},{" "}
                  {order.city}
                </span>
              </h5>
            </div>
          </div>
          <div
            className="detailOrd col-12"
            style={{
              display: "block",
              margin: "auto",
              marginTop: "50px",
              background: "#fff",
              borderRadius: "5px",
              padding: "20px 20px",
              marginTop: "10px",
            }}
          >
            {order.status === "Đã giao" ? (
              <label
                style={{
                  background: "#28a745",
                  padding: "10px 10px",
                  color: "white",
                  marginBottom: "20px",
                }}
              >
                {order.status}
              </label>
            ) : (
              <label
                style={{
                  background: "#CAE5E8",
                  padding: "10px 10px",
                  color: "#103667",
                  marginBottom: "20px",
                }}
              >
                {order.status}
              </label>
            )}
            <h4 style={{ marginBottom: "10px", color: "green" }}>
              <span style={{ color: " #000" }}>Thanh toán COD: </span>{" "}
              {currencyFormatter(order.total, defaultOptions)}đ
            </h4>
            <hr style={{ borderTop: "1px dotted gray" }} />
            <h5>Ngày đặt hàng: {order.createdAt}</h5>
            {order.timeReceived !== null ? (
              <h5 style={{ marginTop: "10px" }}>
                Ngày nhận hàng: {order.timeReceived}
              </h5>
            ) : (
              ""
            )}
          </div>
          <div
            className="detailOrd col-12"
            style={{
              display: "block",
              margin: "auto",
              marginTop: "50px",
              background: "#fff",
              borderRadius: "5px",
              padding: "20px 20px",
              marginTop: "10px",
            }}
          >
            <label
              style={{
                background: "#ff8800",
                padding: "10px 10px",
                color: "#fff",
                marginBottom: "20px",
              }}
            >
              Phương Thức thanh toán
            </label>
            <h5
              style={{
                marginBottom: "10px",
                color: "green",
                border: "1px solid green",
                padding: "20px 20px",
              }}
            >
              Thanh toán COD
            </h5>
            <hr style={{ borderTop: "1px dotted gray" }} />
            <h5>Ghi chú</h5>
            <textarea
              value={order.note}
              style={{
                width: "100%",
                marginTop: "10px",
                height: "100px",
                padding: "5px",
              }}
              disabled
            />
          </div>
        </div>
      ) : (
        <Loading />
      )}

      <Footer />
    </>
  );
};

export default DetailsSellOrder;
