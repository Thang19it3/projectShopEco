import React, { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { listProduct } from "./../Redux/Actions/ProductActions";
import { Link } from "react-router-dom";
import Loading from "./../components/LoandingError/Loading";
import Message from "./../components/LoandingError/Error";
import "./../css/searchForm.css";
import Footer from "../components/Footer";
import axios from "axios";
import "./../css/header.css";
import { logout } from "../Redux/Actions/UserActions";
import Header from './../components/Header';

const Search1 = () => {
  const cities = ["Đà Nẵng", "Huế", "Quảng Nam", "Quảng Ngãi"];
  const district1 = ["Hải châu", "Thanh khê", "Ngũ hành sơn", "Liên chiểu"];
  const district2 = ["Nam Đông", "Phong Điền", "Phú Lộc", "Phú Vang"];
  const district3 = ["Đại Lộc", "Đông Giang", "Phú Ninh", "Quế Sơn"];
  const wards = ["Hải Châu 1", "Hoà Cường Bắc", "Nam Dương", "Phước Ninh"];
  const prices = [
    "Tất cả",
    "Từ 10 ngàn đến 500 ngàn",
    "Từ 500 ngàn đến 2 triệu",
    "Từ 2 triệu đến 5 triệu",
    "Trên 5 triệu",
  ];

  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const [category, setCategory] = useState("");
  const [search, setSearch] = useState("");
  const [price1, setPrice] = useState(0);
  const [priceAscent, setPriceAscent] = useState(true);
  const [city, setCity] = useState("");

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

  const fetchProducts = async () => {
    const { data } = await axios.get(`http://localhost:5000/api/products`);
    let price = parseInt(price1);
    if (price === 0) {
      if (priceAscent === true) {
        setProducts(
          data
            .filter(
              (data) =>
                data.title
                  .toString()
                  .toLowerCase()
                  .includes(search.toString().toLowerCase()) &&
                data.category.includes(category) &&
                data.city.includes(city) &&
                data.isShow === true &&
                data.isAccept === 1 &&
                data.isSold === false
            )
            .sort((a, b) => a.price - b.price)
        );
      } else {
        setProducts(
          data
            .filter(
              (data) =>
                data.title
                  .toString()
                  .toLowerCase()
                  .includes(search.toString().toLowerCase()) &&
                data.category.includes(category) &&
                data.city.includes(city) &&
                data.isShow === true &&
                data.isAccept === 1 &&
                data.isSold === false
            )
            .sort((a, b) => b.price - a.price)
        );
      }
    } else if (price === 1) {
      if (priceAscent === true) {
        setProducts(
          data
            .filter(
              (data) =>
                data.title
                  .toString()
                  .toLowerCase()
                  .includes(search.toString().toLowerCase()) &&
                data.category.includes(category) &&
                data.city.includes(city) &&
                data.price >= 10000 &&
                data.price <= 500000 &&
                data.isShow === true &&
                data.isAccept === 1 &&
                data.isSold === false
            )
            .sort((a, b) => a.price - b.price)
        );
      } else {
        setProducts(
          data
            .filter(
              (data) =>
                data.title
                  .toString()
                  .toLowerCase()
                  .includes(search.toString().toLowerCase()) &&
                data.category.includes(category) &&
                data.city.includes(city) &&
                data.price >= 10000 &&
                data.price <= 500000 &&
                data.isShow === true &&
                data.isAccept === 1 &&
                data.isSold === false
            )
            .sort((a, b) => b.price - a.price)
        );
      }
    } else if (price === 2) {
      if (priceAscent === true) {
        setProducts(
          data
            .filter(
              (data) =>
                data.title
                  .toString()
                  .toLowerCase()
                  .includes(search.toString().toLowerCase()) &&
                data.category.includes(category) &&
                data.city.includes(city) &&
                data.price > 500000 &&
                data.price <= 2000000 &&
                data.isShow === true &&
                data.isAccept === 1 &&
                data.isSold === false
            )
            .sort((a, b) => a.price - b.price)
        );
      } else {
        setProducts(
          data
            .filter(
              (data) =>
                data.title
                  .toString()
                  .toLowerCase()
                  .includes(search.toString().toLowerCase()) &&
                data.category.includes(category) &&
                data.city.includes(city) &&
                data.price > 500000 &&
                data.price <= 2000000 &&
                data.isShow === true &&
                data.isAccept === 1 &&
                data.isSold === false
            )
            .sort((a, b) => b.price - a.price)
        );
      }
    } else if (price === 3) {
      if (priceAscent === true) {
        setProducts(
          data
            .filter(
              (data) =>
                data.title
                  .toString()
                  .toLowerCase()
                  .includes(search.toString().toLowerCase()) &&
                data.category.includes(category) &&
                data.city.includes(city) &&
                data.price > 2000000 &&
                data.price <= 5000000 &&
                data.isShow === true &&
                data.isAccept === 1 &&
                data.isSold === false
            )
            .sort((a, b) => a.price - b.price)
        );
      } else {
        setProducts(
          data
            .filter(
              (data) =>
                data.title
                  .toString()
                  .toLowerCase()
                  .includes(search.toString().toLowerCase()) &&
                data.category.includes(category) &&
                data.city.includes(city) &&
                data.price > 2000000 &&
                data.price <= 5000000 &&
                data.isShow === true &&
                data.isAccept === 1 &&
                data.isSold === false
            )
            .sort((a, b) => b.price - a.price)
        );
      }
    } else {
      if (priceAscent === true) {
        setProducts(
          data
            .filter(
              (data) =>
                data.title
                  .toString()
                  .toLowerCase()
                  .includes(search.toString().toLowerCase()) &&
                data.category.includes(category) &&
                data.city.includes(city) &&
                data.price >= 5000000 &&
                data.isShow === true &&
                data.isAccept === 1 &&
                data.isSold === false
            )
            .sort((a, b) => a.price - b.price)
        );
      } else {
        setProducts(
          data
            .filter(
              (data) =>
                data.title
                  .toString()
                  .toLowerCase()
                  .includes(search.toString().toLowerCase()) &&
                data.category.includes(category) &&
                data.city.includes(city) &&
                data.price >= 5000000 &&
                data.isShow === true &&
                data.isAccept === 1 &&
                data.isSold === false
            )
            .sort((a, b) => b.price - a.price)
        );
      }
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const logoutHandler = () => {
    dispatch(logout());
  };

  const handleKeyDown = (event) => {
    if (event.keyCode === 13) {
      fetchProducts();
    }
  };

  return (
    <div>
     <Header />
      <div className="searchForm">
        <div
          className="searchForm-center"
          style={{
            background: "#fff",
          }}
        >
          <select
            id="ddCity"
            onChange={(e) => {
              if (e.target.value === "Tất cả") setCategory("");
              else setCategory(e.target.value);
            }}
          >
            <option value="Tất cả" selected>
              Tất cả
            </option>
            <option value="Đồ điện tử">Đồ điện tử</option>
            <option value="Thời trang, đồ dùng cá nhân">
              Thời trang, đồ dùng cá nhân
            </option>
            <option value="Giải trí thể thao">Giải trí thể thao</option>
          </select>
          <select
            id="ddCity"
            onChange={(e) => {
              if (e.target.value === "Tất cả") setCity("");
              else setCity(e.target.value);
            }}
          >
            <option value="Tất cả">Tất cả</option>
            {cities.map((data, index) => (
              <option
                key={index}
                value={data}
                onChange={(e) => setCity(e.target.value)}
              >
                {data}
              </option>
            ))}
          </select>
          <div className="searchForm-center-1">
            <select
              className="priceForm"
              onChange={(e) => setPrice(e.target.value)}
            >
              {prices.map((data, index) => (
                <option
                  key={index}
                  value={index}
                  onChange={(e) => setPrice(e.target.value)}
                >
                  {data}
                </option>
              ))}
            </select>
            <select
              className="arrangeForm"
              onChange={(e) => setPriceAscent(e.target.value)}
            >
              <option
                value={true}
                onChange={(e) => setPriceAscent(e.target.value)}
              >
                Giá tăng dần
              </option>
              <option
                value={false}
                onChange={(e) => setPriceAscent(e.target.value)}
              >
                Giá giảm dần
              </option>
            </select>
          </div>
          <button
            onClick={() => fetchProducts()}
            style={{ borderRadius: "5px" }}
            className="btn-searchForm"
          >
            Áp dụng
          </button>
        </div>
      </div>

      <div className="container">
        <div
          className="section"
          style={{
            background: "#fff",
            paddingLeft: "70px",
            paddingTop: "50px",
            marginTop: "30px",
          }}
        >
          <div className="row">
            <div className="col-lg-12 col-md-12 article">
              <div className="shopcontainer row">
                {products.length > 0 ? (
                  products.map((product) => (
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
                  ))
                ) : (
                  <div
                    className="col-lg-12"
                    style={{ textAlign: "center", padding: "50px" }}
                  >
                    <h5>Không có tin đăng phù hợp yêu cầu</h5>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Search1;
