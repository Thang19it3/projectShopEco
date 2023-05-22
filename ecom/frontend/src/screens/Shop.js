import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listProduct } from "./../Redux/Actions/ProductActions";
import { Link } from "react-router-dom";
import Pagination from "./../components/homeComponents/Pagination";
import Footer from "../components/Footer";
import Header from "../components/Header";
import imga from "./../image/images-removebg-preview.png";

const Shop = () => {
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProduct());
  }, [dispatch]);
  return (
    <div>
      <Header />
      <div
        className="container"
        style={{ marginTop: "20px", marginBottom: "50px" }}
      >
        <h3
          style={{ fontWeight: "600", fontSize: "18px", marginBottom: "30px" }}
        >
          Thể thao giải trí
        </h3>

        {products.map((product) =>
          product.category === "Giải trí thể thao" &&
          product.isShow === true &&
          product.isAccept === 1 &&
          product.isSold === false ? (
            <div
              div
              className="shop col-lg-10 col-md-10 col-sm-10"
              key={product._id}
              style={{
                background: "#fff",
                padding: "20px 20px",
              }}
            >
              <div className="border-product" style={{ display: "flex" }}>
                <Link
                  to={`/products/${product._id}`}
                  style={{ textDecoration: "none" }}
                >
                  <div className="shopBack">
                    <img
                      src={product.image}
                      alt={product.name}
                      style={{ width: "200px" }}
                    />
                  </div>
                </Link>
                <img
                  src={imga}
                  style={{ width: "20px", position: "absolute", left: "93%" }}
                />
                <img
                  src="https://static.chotot.com/storage/icons/saveAd/save-ad.svg"
                  style={{
                    width: "20px",
                    position: "absolute",
                    left: "93%",
                    bottom: "15%",
                  }}
                />
                <div
                  className="shoptext"
                  style={{ marginLeft: "50px", position: "relative" }}
                >
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
                          fontSize: "20px",
                          marginTop: "20px",
                        }}
                      >
                        {product.title}
                      </h3>
                    </Link>
                  </p>
                  <h4
                    style={{
                      fontWeight: "400",
                      fontSize: "17px",
                      marginTop: "-10px",
                    }}
                  >
                    {product.price}
                  </h4>
                  <h5
                    style={{
                      fontWeight: "400",
                      fontSize: "17px",
                      marginTop: "130px",
                    }}
                  >
                    <img
                      src="https://static.chotot.com/storage/CT_WEB_UNI_PUBLIC_PROFILE/user/static/img/location.png"
                      style={{ width: "15px", marginRight: "20px" }}
                    />
                    {product.createdAt} tại {product.city}
                  </h5>
                </div>
              </div>
            </div>
          ) : null
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Shop;
