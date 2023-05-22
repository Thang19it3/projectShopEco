import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listProductDetails } from "./../Redux/Actions/ProductActions.js";
import Header from "../components/Header";
import Rating from "../components/homeComponents/Rating";
import Message from "../components/LoandingError/Error.js";
import { Link } from "react-router-dom";
import Loading from "../components/LoandingError/Loading.js";
import "./../css/product.css";
import img1 from "./../image/1.png";
import { listUser } from "../Redux/Actions/UserActions.js";
import { Swiper, SwiperSlide } from "swiper/react";

import Footer from "../components/Footer.js";
import axios from "axios";
import { FreeMode, Navigation, Thumbs } from "swiper";
import pre from "./../image/prev.png";
import next from "./../image/next.png";
import Pagination from "./../components/homeComponents/Pagination";

const Single = ({ match, history }) => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const productId = match.params.id;
  const dispatch = useDispatch();
  const [product, setProduct] = useState("");
  const [owner, setOwner] = useState("");
  const getData = async () => {
    const { data } = await axios.get(
      `http://localhost:5000/api/products/${productId}`
    );
    const { data: data2 } = await axios.get(
      `http://localhost:5000/api/users/seller/profile/${data.userId}`
    );
    setProduct(data);
    setOwner(data2);
  };
  useEffect(() => {
    getData();
  }, []);

  const AddToCartHandle = (e) => {
    e.preventDefault();
    history.push(`/order/${productId}/`);
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

  const [products, setProducts] = useState([]);
  const getdata = async () => {
    const { data } = await axios.get(`http://localhost:5000/api/products`);
    setProducts(
      data.filter(
        (data) =>
          data.isShow === true && data.isAccept === 1 && data.isSold === false
      )
    );
  };
  useEffect(() => {
    getdata();
  }, []);
  return (
    <>
      <Header />
      <div className="container single-product">
        {product !== "" ? (
          <>
            <h2 className="titleProducts" style={{ color: "black" }}>
              {product.category} / {product.title}
            </h2>
            <div className="row" style={{ background: "#fff" }}>
              <div className="col-md-7">
                <div className="single-image" style={{ height: "400px" }}>
                  <div style={{ position: "relative" }}>
                    {/* sửa */}
                    <button
                      class="custom_next"
                      style={{
                        border: "none",
                        position: "absolute",
                        right: "0",
                        top: "50%",
                        zIndex: "1000",
                        background: "none",
                      }}
                    >
                      <img src={pre} style={{ width: "20px" }} />
                    </button>
                    <button
                      class="custom_prev"
                      style={{
                        border: "none",
                        position: "absolute",
                        left: "0",
                        top: "50%",
                        zIndex: "1000",
                        background: "none",
                      }}
                    >
                      <img src={next} style={{ width: "20px" }} />
                    </button>
                    <Swiper
                      loop={true}
                      spaceBetween={10}
                      navigation={{
                        nextEl: ".custom_next",
                        prevEl: ".custom_prev",
                      }}
                      modules={[Navigation, Thumbs]}
                      grabCursor={true}
                      className="product-images-slider"
                      style={{ width: "100%", height: "400px", zIndex: "1" }}
                    >
                      {product.imageList?.map((item, index) => (
                        <SwiperSlide key={index}>
                          <img
                            src={item}
                            alt="ahihi"
                            style={{ width: "100%", height: "100%" }}
                          />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                </div>
                <div className="col-md-12 textProSi">
                  <h4
                    style={{
                      fontWeight: "bold",
                      fontSize: "20px",
                      textTransform: "uppercase",
                    }}
                  >
                    {product.title}
                  </h4>
                  <h4
                    style={{
                      fontWeight: "bold",
                      fontSize: "20px",
                      color: "red",
                    }}
                  >
                    {currencyFormatter(product.price, defaultOptions) + "đ"}
                  </h4>
                  <h5>{product.description}</h5>
                  <h5 style={{ marginTop: "20px" }}>
                    {" "}
                    <span
                      style={{
                        color: "rgb(51, 101, 156)",
                        marginTop: "20px",
                      }}
                    >
                      Liên hệ ngay : 098747163
                    </span>
                  </h5>

                  <div>
                    <h5
                      style={{
                        marginTop: "20px",
                        marginBottom: "-10px",
                        fontWeight: "bold",
                      }}
                    >
                      Khu vực
                    </h5>
                    <h5
                      style={{
                        marginTop: "20px",
                        marginBottom: "50px",
                        fontWeight: "400",
                      }}
                    >
                      Phường {product.ward}, quận {product.district},{" "}
                      {product.city}
                    </h5>
                  </div>
                </div>
              </div>
              <div className="col-md-5">
                <div style={{ background: "#fff", padding: "20px 20px" }}>
                  <hr />
                  <div style={{ display: "flex", marginBottom: "30px" }}>
                    <img
                      src={owner.avatar}
                      style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "50%",
                      }}
                    />
                    <h5
                      style={{
                        marginTop: "20px",
                        marginLeft: "20px",
                        width: "300px",
                      }}
                    >
                      {owner.name}
                    </h5>
                    <button
                      style={{
                        border: "1px solid #ff8800",
                        borderRadius: "20px",
                        background: "none",
                        fontSize: "13px",
                        padding: "5px",
                        height: "40px",
                        marginLeft: "50px",
                        width: "150px",
                      }}
                      onClick={() =>
                        (window.location.href = `/trang-ca-nhan/${product.userId}`)
                      }
                    >
                      Xem trang
                    </button>
                  </div>
                  {userInfo._id === owner._id ? (
                    <button
                      className="round-black-btn"
                      style={{
                        background: "#589f39",
                        marginTop: "0px",
                        width: "100%",
                      }}
                    >
                      SẢN PHẨM CỦA TÔI
                    </button>
                  ) : product.isSold === true ? (
                    <button
                      className="round-black-btn"
                      style={{
                        background: "#589f39",
                        marginTop: "0px",
                        width: "100%",
                      }}
                    >
                      ĐÃ BÁN
                    </button>
                  ) : (
                    <button
                      onClick={AddToCartHandle}
                      className="round-black-btn"
                      style={{
                        background: "#589f39",
                        marginTop: "0px",
                        width: "100%",
                      }}
                    >
                      MUA NGAY
                    </button>
                  )}

                  <button
                    className="round-black-btn"
                    style={{
                      backgroundColor: "#fff",
                      border: "1px solid #cacaca",
                      marginTop: "20px",
                      width: "100%",
                      color: "#3c763d",
                    }}
                  >
                    <span>
                      <img
                        src="https://static.chotot.com/storage/chotot-icons/svg/phone_call.svg"
                        style={{
                          height: "24px",
                          width: "24px",
                          color: "#3c763d",
                        }}
                      />
                      &nbsp;&nbsp;088610123123
                    </span>
                  </button>
                  <hr />

                  <div style={{ display: "flex", marginTop: "30px" }}>
                    <img
                      src="https://static.chotot.com/storage/images/tips/5_other_cate.png"
                      style={{ width: "100px", height: "100px" }}
                    />
                    <p style={{ marginLeft: "20px" }}>
                      Nên kiểm tra nguồn gốc sản phẩm trước khi mua bán
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12" style={{ background:'#fff', marginTop:'30px', marginBottom:'50px'}}>
              <Swiper
                freeMode={true}
                grabCursor={true}
                modules={[FreeMode]}
                navigation={{
                  nextEl: ".custom_next",
                  prevEl: ".custom_prev",
                }}
                slidesPerView={4}
                className="mySlider"
                spaceBetween={30}
              >
                {products.map((product) => ( 
                  <SwiperSlide className="col-4" style={{margin:'0px 0px',marginBottom:'30px'}}>
                    <div
                      className="shop col-lg-12 col-md-12 col-sm-12"
                      style={{ padding:'0px 0px',margin:'0px 0px'}}
                      key={product._id}
                    >
                      <div className="border-product">
                        <Link
                          to={`/products/${product._id}`}
                          style={{ textDecoration: "none" }}
                        >
                          <div
                            className="shopBack"
                            style={{ position: "relative" }}
                          >
                            <img
                              src={product.image}
                              alt={product.name}
                              style={{ zIndex: "1" }}
                            />
                          </div>
                        </Link>

                        <div className="shoptext">
                          <p>
                            <Link
                              to={`/products/${product._id}`}
                              style={{
                                textDecoration: "none",
                              }}
                            >
                              <h3
                                style={{
                                  fontWeight: "600",
                                  fontSize: "18px",
                                }}
                              >
                                {product.title}
                              </h3>
                            </Link>
                          </p>
                          <h4
                            style={{
                              fontWeight: "600",
                              fontSize: "15px",
                              marginTop: "-20px",
                            }}
                          >
                            {currencyFormatter(product.price, defaultOptions) +
                              "đ"}
                          </h4>
                          <h5
                            style={{
                              fontWeight: "400",
                              fontSize: "13px",
                              color: "grey",
                              marginTop: "-10px",
                            }}
                          >
                            <img
                              src="https://static.chotot.com/storage/chotot-icons/svg/user.svg"
                              width={16}
                              height={16}
                              alt="a"
                            />{" "}
                            {product.createdAt} - {product.city}
                          </h5>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            </div>
          </>
        ) : (
          <Loading />
        )}
      </div>
      <Footer />
    </>
  );
};

export default Single;
