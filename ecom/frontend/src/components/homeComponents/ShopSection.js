import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper";
import { Link } from "react-router-dom";
import Rating from "./Rating";
import Pagination from "./Pagination";
import { useDispatch, useSelector } from "react-redux";
import { listProduct } from "./../../Redux/Actions/ProductActions.js";
import Loading from "./../LoandingError/Loading.js";
import Message from "./../LoandingError/Error.js";
import "./../../css/product.css";
import "swiper/css";
import pro from "./../../image/product1.png";
import Countdown from "./Countdown";
import banner3 from "./../../image/baneeee.jpg";
import banner4 from "./../../image/baneeeee.jpg";
import banner5 from "./../../image/banneee.png";
import banner6 from "./../../image/image.jpg";
import banner7 from "./../../image/image1.jpg";
import banner8 from "./../../image/image2.jpg";
import banner9 from "./../../image/danhmuc.jpg";
import banner10 from "./../../image/danhmuc1.jpg";
import banner11 from "./../../image/danhmuc2.jpg";
import HeroSlider, { Slide } from "hero-slider";
import axios from "axios";
import pre from "./../../image/prev.png";
import next from "./../../image/next.png";

const ShopSection = (props) => {
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
      <div
        className="container"
        style={{ paddingTop: "0", marginTop: "-10px" }}
      >
        <div className="row">
          <div className="col-lg-12">
            <div className="justify-content-center produc1">
              <button
                class="custom_next"
                style={{
                  border: "none",
                  position: "absolute",
                  right: "5%",
                  top: "18%",
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
                  left: "5%",
                  top: "18%",
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
                style={{
                  width: "100%",
                  height: "300px",
                  zIndex: "1",
                }}
              >
                <SwiperSlide style={{ border: "none" }}>
                  <div className="image-card">
                    <img
                      src={banner3}
                      alt="pro"
                      style={{
                        padding: "5px 5px 5px 5px",
                        height: "250px",
                      }}
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="image-card">
                    <img
                      src={banner4}
                      alt="pro"
                      style={{
                        padding: "5px 5px 5px 5px",
                        height: "250px",
                      }}
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="image-card">
                    <img
                      src={banner5}
                      alt="pro"
                      style={{
                        padding: "5px 5px 5px 5px",
                        height: "250px",
                      }}
                    />
                  </div>
                </SwiperSlide>
              </Swiper>
              <div className="col-12">
                <div className="row">
                  <div className="col-4 banner-text">
                    <div>
                      <img src={banner6} style={{ marginLeft: "45px" }} />
                      <h6 style={{ fontSize: "16px" }}>Miễn phí vận chuyển</h6>
                    </div>
                  </div>
                  <div className="col-4 banner-text">
                    <div>
                      <img src={banner7} style={{ marginLeft: "45px" }} />
                      <h6 style={{ fontSize: "16px" }}>Chợ tốt ưu đãi nhất</h6>
                    </div>
                  </div>
                  <div className="col-4 banner-text">
                    <div>
                      <img
                        src={banner8}
                        style={{ marginLeft: "65px", marginBottom: "10px" }}
                      />
                      <h6 style={{ fontSize: "16px" }}>
                        Giá tốt nhất trên thị trường
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 danhMuc1">
              <h3 style={{ fontWeight: "600", fontSize: "22px" }}>
                Khám phá danh mục
              </h3>
              <div className="col-12 danhMuc11">
                <div className="row">
                  <div className="col-4 danhMuc11-detail">
                    <div className="danhMuc11-detail-1">
                      <Link
                        style={{ textDecoration: "none" }}
                        to="/shop/giai-tri-the-thao"
                      >
                        <img src={banner9} style={{ width: "100px" }} />
                        <h3 style={{ fontSize: "14px", textAlign: "center" }}>
                          Giải trí thể thao
                        </h3>
                      </Link>
                    </div>
                  </div>
                  <div className="col-4 danhMuc11-detail">
                    <div className="danhMuc11-detail-1">
                      <Link
                        style={{
                          textDecoration: "none",
                        }}
                        to="/shop/thoi-trang"
                      >
                        <img src={banner10} style={{ width: "100px" }} />
                        <h3 style={{ fontSize: "14px", textAlign: "center" }}>
                          Thời trang
                        </h3>
                      </Link>
                    </div>
                  </div>
                  <div className="col-4 danhMuc11-detail">
                    <div className="danhMuc11-detail-1">
                      <Link
                        style={{
                          textDecoration: "none",
                        }}
                        to="/shop/do-dien-tu"
                      >
                        <img src={banner11} style={{ width: "100px" }} />
                        <h3 style={{ fontSize: "14px", textAlign: "center" }}>
                          Đồ điện tử
                        </h3>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12"></div>
        </div>
      </div>
      <div className="container">
        <div
          className="section"
          style={{ background: "#fff", marginTop: "30px", paddingLeft: "40px" }}
        >
          <div className="row">
            <div className="col-lg-13 col-md-13 article">
              <h3 style={{ fontWeight: "600", fontSize: "22px" }}>
                Tin đăng mới
              </h3>
              <div className="shopcontainer row">
                {products.map((product) => (
                  <div
                    className="shop col-lg-4 col-md-6 col-sm-6"
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
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopSection;
