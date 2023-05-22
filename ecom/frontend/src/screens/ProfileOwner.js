import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { getUserDetails } from "./../Redux/Actions/UserActions";
import { listProduct } from "./../Redux/Actions/ProductActions";
import axios from "axios";

const ProfileOwner = ({ match }) => {
  const ownerId = match.params.id;
  const [products, setProduct] = useState([]);
  const [owner, setOwner] = useState("");
  const getdata = async () => {
    const { data } = await axios.get(
      `http://localhost:5000/api/products/users/${ownerId}`
    );
    const { data: data2 } = await axios.get(
      `http://localhost:5000/api/users/seller/profile/${ownerId}`
    );
    setOwner(data2);
    setProduct(
      data.filter(
        (data) =>
          data.isShow === true && data.isAccept === 1 && data.isSold === false
      )
    );
  };
  useEffect(() => {
    getdata();
  }, []);

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

  return (
    <div>
      <Header />
      <div className="container">
        <h4
          style={{
            color: "#000",
            fontWeight: "600",
            marginBottom: "20px",
            marginTop: "30px",
          }}
        >
          Trang cá nhân của {owner.name}
        </h4>
        <div
          className="col-12"
          style={{ background: "#fff", borderRadius: "5px" }}
        >
          <div className="row">
            <div className="col-8">
              <div style={{ display: "flex", marginBottom: "30px" }}>
                <img
                  src={owner.avatar}
                  alt="profile"
                  style={{
                    borderRadius: "50%",
                    width: "100px",
                    height: "100px",
                    marginTop: "30px",
                    marginLeft: "20px",
                  }}
                />
                <div style={{ marginLeft: "20px" }}>
                  <h4 style={{ marginTop: "50px", marginBottom: "10px" }}>
                    {owner.name}
                  </h4>

                  <div>
                    <button
                      style={{
                        padding: "5px 15px",
                        border: "1px solid gray",
                        borderRadius: "20px",
                        background: "none",
                        marginTop: "10px",
                      }}
                    >
                      <Link to="/profile" style={{ textDecoration: "none" }}>
                        Chỉnh sửa trang cá nhân
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div>
                <div>
                  <div
                    style={{
                      display: "flex",
                      marginTop: "30px",
                      marginBottom: "10px",
                    }}
                  >
                    <img
                      src="https://static.chotot.com/storage/marketplace/common/pf_rating_icon.svg"
                      style={{ height: "20px" }}
                    />
                    <h5>
                      <span style={{ color: "gray", marginLeft: "20px" }}>
                        Đánh giá{" "}
                      </span>
                      : Chưa có đánh giá
                    </h5>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      marginBottom: "10px",
                    }}
                  >
                    <img
                      src="https://static.chotot.com/storage/CT_WEB_UNI_PUBLIC_PROFILE/user/static/img/calendar.png"
                      style={{ height: "20px" }}
                    />
                    <h5>
                      <span style={{ color: "gray", marginLeft: "20px" }}>
                        Ngày tham gia{" "}
                      </span>
                      : {owner.createdAt}
                    </h5>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      marginBottom: "10px",
                    }}
                  >
                    <img
                      src="https://static.chotot.com/storage/CT_WEB_UNI_PUBLIC_PROFILE/user/static/img/location.png"
                      style={{ height: "20px" }}
                    />
                    <h5>
                      <span style={{ color: "gray", marginLeft: "25px" }}>
                        Địa chỉ{" "}
                      </span>
                      : Chưa cung cấp
                    </h5>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      marginBottom: "30px",
                    }}
                  >
                    <img
                      src="https://static.chotot.com/storage/CT_WEB_UNI_PUBLIC_PROFILE/user/static/img/check.png"
                      style={{ height: "20px" }}
                    />
                    <h5>
                      <span style={{ color: "gray", marginLeft: "20px" }}>
                        Đã cung cấp{" "}
                      </span>
                      :
                      <img
                        src="https://static.chotot.com/storage/CT_WEB_UNI_PUBLIC_PROFILE/user/static/img/contact/facebook_default.png"
                        style={{
                          width: "25px",
                          marginRight: "5px",
                          marginLeft: "20px",
                        }}
                      />
                      <img
                        src="https://static.chotot.com/storage/CT_WEB_UNI_PUBLIC_PROFILE/user/static/img/contact/Google_active.png"
                        style={{ width: "25px", marginRight: "5px" }}
                      />
                      <img
                        src="https://static.chotot.com/storage/CT_WEB_UNI_PUBLIC_PROFILE/user/static/img/contact/Zalo_inactive.png"
                        style={{ width: "25px", marginRight: "5px" }}
                      />
                      <img
                        src="https://static.chotot.com/storage/CT_WEB_UNI_PUBLIC_PROFILE/user/static/img/contact/apple_inactive.svg"
                        style={{ width: "25px", marginRight: "5px" }}
                      />
                      <img
                        src="https://static.chotot.com/storage/CT_WEB_UNI_PUBLIC_PROFILE/user/static/img/contact/email_default.png"
                        style={{ width: "25px", marginRight: "5px" }}
                      />
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="col-12"
          style={{
            background: "#fff",
            marginTop: "30px",
            paddingTop: "30px",
            paddingLeft: "20px",
          }}
        >
          <h4>Tin đang đăng</h4>
          <hr style={{ marginBottom: "30px" }} />
          {products.length > 0 ? (
            products.map((product) => (
              <div style={{ display: "flex", marginBottom: "20px" }}>
                <img
                  src={product.image}
                  style={{ height: "200px" }}
                  className="col-3"
                />
                <div className="col-9" style={{ marginTop: "40px" }}>
                  <h5
                    style={{
                      fontSize: "20px",
                      fontWeight: "600",
                      marginBottom: "15px",
                      marginLeft: "15px",
                      textTransform: "uppercase",
                    }}
                  >
                    <Link to={`/products/${product._id}`}>{product.title}</Link>
                  </h5>
                  <h5
                    style={{
                      fontSize: "20px",
                      fontWeight: "600",
                      color: "red",
                      marginLeft: "15px",
                    }}
                  >
                    {currencyFormatter(product.price, defaultOptions) + "đ"}
                  </h5>
                  <h5
                    style={{
                      fontSize: "13px",
                      color: "gray",
                      marginLeft: "15px",
                      marginTop: "10px",
                    }}
                  >
                    {product.createdAt}
                  </h5>
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
      <Footer />
    </div>
  );
};

export default ProfileOwner;
