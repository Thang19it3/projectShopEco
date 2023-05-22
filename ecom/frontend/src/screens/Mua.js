import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { orderProduct } from "./../Redux/Actions/OrderAction.js";
import mua from "./../css/mua.css";
import Footer from "../components/Footer";
import { listOrder } from "./../Redux/Actions/OrderAction";

const Mua = ({ match }) => {
  const productId = match.params.id;

  const [blog, setBlog] = useState("");
  const [seller, setSeller] = useState("");
  const [name, setName] = useState("");
  const [phone, setSdt] = useState("");
  const [city, setCity] = useState("");
  const [district, setDistrict] = useState("");
  const [ward, setWard] = useState("");
  const [address, setAddress] = useState("");
  const [note, setNote] = useState("");
  const [error, setError] = useState("");

  const cities = ["Đà Nẵng", "Huế", "Quảng Nam", "Quảng Ngãi"];
  const district1 = ["Hải châu", "Thanh khê", "Ngũ hành sơn", "Liên chiểu"];
  const district2 = ["Nam Đông", "Phong Điền", "Phú Lộc", "Phú Vang"];
  const district3 = ["Đại Lộc", "Đông Giang", "Phú Ninh", "Quế Sơn"];
  const wards = ["Hải Châu 1", "Hoà Cường Bắc", "Nam Dương", "Phước Ninh"];

  const fetchProduct = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:5000/api/products/${productId}`
      );
      const profileSeller = await axios.get(
        `http://localhost:5000/api/users/seller/profile/${data.userId}`
      );
      setBlog(data);
      setSeller(profileSeller.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchProduct();
  }, []);
  const validatePhone = (phone) => {
    let reg = /^0[0-9\-\+]{9,10}$/;
    if (reg.test(phone) === false) {
      return false;
    } else {
      setSdt(phone);
      return true;
    }
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
  const getTime = () => {
    let ts = Date.now();
    let date_ob = new Date(ts);
    let hours = date_ob.getHours();
    let minutes = date_ob.getMinutes();
    return hours + ":" + minutes;
  };
  const validateForm = () => {
    if (name.trim() === "") {
      setError("Tên không được để trống");
      return false;
    } else if (phone.length < 10) {
      setError("Số điện thoại phải đúng định dạng");
      return false;
    } else if (address.trim() === "") {
      setError("Địa chỉ không được để trống");
      return false;
    } else if (address.length < 5) {
      setError("Địa chỉ phải trên 4 kí tự");
      return false;
    } else if (name.length < 5) {
      setError("Tên phải trên 4 kí tự");
      return false;
    }
    setError("");
    return true;
  };

  const dispatch = useDispatch();
  const submitHandler = () => {
    dispatch(
      orderProduct(
        seller,
        blog,
        name,
        phone,
        city,
        district,
        ward,
        address,
        blog.price,
        note,
        "Chờ xác nhận"
      )
    );
    window.location.href = "/don-mua";
  };

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    dispatch(listOrder());
  }, [dispatch]);

  return (
    <>
      <Header />
      <div className="container">
        <div
          className="row"
          style={{ background: "#fff", paddingLeft: "30px", marginTop: "50px" }}
        >
          <form className="mua" style={{ marginLeft: "120px" }}>
            <h3
              style={{
                fontWeight: "600",
                textAlign: "center",
                marginBottom: "30px",
                fontSize: "25px",
              }}
            >
              Thông tin người nhận
            </h3>
            <input
              placeholder="Tên người nhận"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              placeholder="Số điện thoại"
              type="text"
              onChange={(e) => validatePhone(e.target.value)}
            />
            <div className="location">
              <select
                id="ddCity"
                onChange={(e) => {
                  const citydd = e.target.value;
                  setCity(citydd);
                }}
              >
                <option value="0" disabled selected>
                  Chọn thành phố
                </option>
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

              <select
                disabled={city !== "" ? false : true}
                id="ddDistrict"
                onChange={(e) => {
                  setDistrict(e.target.value);
                }}
              >
                <option value="0" disabled selected>
                  Chọn quận
                </option>
                {city === "Đà Nẵng"
                  ? district1.map((data, index) => (
                      <option
                        option
                        key={index}
                        value={data}
                        onChange={(e) => setDistrict(e.target.value)}
                      >
                        {data}
                      </option>
                    ))
                  : city === "Huế"
                  ? district2.map((data, index) => (
                      <option
                        option
                        key={index}
                        value={data}
                        onChange={(e) => setDistrict(e.target.value)}
                      >
                        {data}
                      </option>
                    ))
                  : district3.map((data, index) => (
                      <option
                        option
                        key={index}
                        value={data}
                        onChange={(e) => setDistrict(e.target.value)}
                      >
                        {data}
                      </option>
                    ))}
              </select>

              <select
                id="ddWard"
                disabled={district !== "" ? false : true}
                onChange={(e) => setWard(e.target.value)}
              >
                <option value="0" disabled selected>
                  Chọn phường
                </option>
                {wards.map((data, index) => (
                  <option
                    key={index}
                    value={data}
                    onChange={(e) => setWard(e.target.value)}
                  >
                    {data}
                  </option>
                ))}
              </select>
            </div>
            {/* {
                blog.map((item) => (
                    <h1>{item.category}</h1>
                ))
            } */}
            <input
              placeholder="Địa chỉ cụ thể"
              onChange={(e) => setAddress(e.target.value)}
            />
            <hr />
            <div
              style={{
                display: "flex",
                marginTop: "20px",
                marginBottom: "20px",
                marginLeft: "20px",
              }}
            >
              <img
                src={seller.avatar}
                style={{ width: "50px", height: "50px" }}
              />
              <h4
                style={{
                  marginTop: "15px",
                  marginLeft: "20px",
                  fontSize: "18px",
                }}
              >
                {seller.name}
              </h4>
            </div>

            <div>
              <div style={{ display: "flex", marginLeft: "20px" }}>
                <img
                  src={blog.image}
                  style={{ width: "100px", height: "100px" }}
                />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    marginLeft: "20px",
                  }}
                >
                  <h4
                    style={{
                      fontWeight: "500",
                      fontSize: "16px",
                      marginTop: "10px",
                    }}
                  >
                    {blog.title}
                  </h4>
                  <h4
                    style={{
                      color: "red",
                      fontSize: "16px",
                      marginTop: "-13px",
                    }}
                  >
                    {currencyFormatter(blog.price, defaultOptions)}đ
                  </h4>
                  <h4 style={{ fontSize: "12px", marginTop: "-2px" }}>
                    {" "}
                    {blog.ward} / {blog.district} / {blog.city}
                  </h4>
                </div>
              </div>

              <hr />
              <div>
                <div
                  style={{
                    display: "flex",
                    marginTop: "20px",
                    marginLeft: "20px",
                  }}
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/1019/1019607.png"
                    style={{ width: "30px", height: "30px" }}
                  />
                  <h4
                    style={{
                      marginLeft: "30px",
                      fontSize: "18px",
                      marginTop: "5px",
                    }}
                  >
                    Số tiền thanh toán
                  </h4>
                </div>
                <div
                  style={{
                    border: "1px solid #ff8800",
                    borderRadius: "5px",
                    marginBottom: "20px",
                    marginTop: "10px",
                  }}
                >
                  <div
                    div
                    style={{
                      display: "flex",
                      marginTop: "20px",
                      marginLeft: "20px",
                      marginBottom: "20px",
                    }}
                    classNam="col-12"
                  >
                    <h4 className="col-6">Tổng tiền</h4>
                    <h4
                      className="col-6"
                      style={{ textAlign: "right", paddingRight: "30px" }}
                    >
                      {currencyFormatter(blog.price, defaultOptions)}đ
                    </h4>
                  </div>
                  <hr
                    style={{
                      borderTop: "1px dotted gray",
                      marginLeft: "20px",
                      marginRight: "20px",
                    }}
                  />
                  <div
                    style={{
                      display: "flex",
                      marginTop: "20px",
                      marginLeft: "20px",
                      color: "red",
                      marginBottom: "20px",
                    }}
                    classNam="col-12"
                  >
                    <h4 className="col-6">Tổng thanh toán</h4>
                    <h4
                      className="col-6"
                      style={{ textAlign: "right", paddingRight: "30px" }}
                    >
                      {currencyFormatter(blog.price, defaultOptions)}đ
                    </h4>
                  </div>
                </div>
                <div style={{ marginBottom: "20px" }}>
                  <div
                    style={{
                      display: "flex",
                      marginTop: "20px",
                      marginLeft: "20px",
                    }}
                  >
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/1019/1019607.png"
                      style={{ width: "30px", height: "30px" }}
                    />
                    <h4
                      style={{
                        marginLeft: "30px",
                        fontSize: "18px",
                        marginTop: "5px",
                      }}
                    >
                      Phương thức thanh toán
                    </h4>
                  </div>
                  <div
                    style={{
                      border: "1px solid gray",
                      display: "flex",
                      borderRadius: "5px",
                      paddingTop: "20px",
                      paddingLeft: "20px",
                    }}
                  >
                    <img
                      src="https://www.freeiconspng.com/thumbs/credit-card-icon-png/credit-card-2-icon-7.png"
                      style={{ width: "30px", height: "30px" }}
                    />
                    <h4
                      style={{
                        fontWeight: "500",
                        fontSize: "16px",
                        lineHeight: "30px",
                        marginLeft: "20px",
                      }}
                    >
                      Thanh toán COD
                    </h4>
                  </div>
                </div>
                <div>
                  <div
                    style={{
                      display: "flex",
                      marginTop: "20px",
                      marginLeft: "20px",
                    }}
                  >
                    <img
                      src="https://image.pngaaa.com/400/1342400-middle.png"
                      style={{ width: "30px", height: "30px" }}
                    />
                    <h4
                      style={{
                        marginLeft: "30px",
                        fontSize: "18px",
                        marginTop: "5px",
                      }}
                    >
                      Ghi chú
                    </h4>
                  </div>
                  <textarea
                    placeholder="Nhập ghi chú cho người bán"
                    onChange={(e) => setNote(e.target.value)}
                    style={{
                      width: "100%",
                      height: "200px",
                      padding: "20px 20px",
                      borderRadius: "5px",
                    }}
                  />
                </div>
                <hr />
              </div>
            </div>

            {error !== "" ? <div>{error}</div> : <div></div>}
            <button
              className="btn"
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                if (validateForm()) {
                  submitHandler();
                } else {
                  alert("Vui lòng nhập đầy đủ thông tin");
                }
              }}
            >
              Đặt Hàng
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Mua;
