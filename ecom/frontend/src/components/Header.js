import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../Redux/Actions/UserActions.js";
import logo from "./../image/logo2.png";
import "./../css/header.css";

const Header = () => {
  const [keyword, setKeyWord] = useState();

  let history = useHistory();

  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (keyword.trim()) {
      history.push(`/search/${keyword}`);
    } else {
      history.push("/");
    }
  };

  return (
    <div className="Announcement">
      <div
        className="header"
        style={{
          background: "#FFBA00",
          marginTop: "-20px",
          marginBottom: "-10px",
        }}
      >
        <div className="container">
          {/* mobile headr */}

          {/*PC header */}
          <div className="pc-header">
            <div className="row">
              <div className="col-md-3 col-4 d-flex align-items-center">
                <Link className="navbar-brand" to="/">
                  <img
                    src={logo}
                    alt="logo"
                    style={{ marginTop: "-20px"}}
                  />
                </Link>
              </div>
              <div
                className="col-md-6 col-8 d-flex align-items-center"
                style={{}}
              >
                <div className="container">
                  <div className="row">
                    <div className="col-12" style={{ marginTop: "12px" }}>
                      <ul className="menu-2-2">
                        <li>
                          <Link
                            to="/"
                            style={{ color: "#fff", textDecoration: "none" }}
                          >
                            {" "}
                            Trang chủ{" "}
                          </Link>
                        </li>

                        <li>
                          <Link
                            to="/search1"
                            style={{ color: "#fff", textDecoration: "none" }}
                          >
                            {" "}
                            Tin Đăng{" "}
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={userInfo ? "/quan-ly-tin" : "/login"}
                            style={{ color: "#fff", textDecoration: "none" }}
                          >
                            {" "}
                            Quản lý tin{" "}
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/contact"
                            style={{ color: "#fff", textDecoration: "none" }}
                          >
                            {" "}
                            Liên hệ{" "}
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 d-flex align-items-center justify-content-end Login">
                <div className="btn-group">
                  <button
                    type="button"
                    className="name-button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i class="fa-solid fa-user"></i>
                  </button>
                  {userInfo ? (
                    <div className="dropdown-menu">
                      <Link className="dropdown-item" to="/profile">
                        Thông tin cá nhân
                      </Link>
                      <Link className="dropdown-item" to="/don-ban">
                        Đơn Bán
                      </Link>
                      <Link className="dropdown-item" to="/don-mua">
                        Đơn Mua
                      </Link>
                      <Link
                        className="dropdown-item"
                        to="#"
                        onClick={logoutHandler}
                      >
                        Đăng xuất
                      </Link>
                    </div>
                  ) : (
                    <div className="dropdown-menu">
                      <Link className="dropdown-item" to="/login">
                        Đăng nhập
                      </Link>
                      <Link className="dropdown-item" to="/register">
                        Đăng ký
                      </Link>
                    </div>
                  )}
                </div>

                <div className="post-product">
                  <Link to="/search1">
                    <i
                      class="fa-solid fa-magnifying-glass"
                      style={{ color: "#fff" }}
                    ></i>
                  </Link>
                </div>
              </div>
              <div className="col-12">
                <div className="row">
                  <div
                    className="col-md-8  d-flex align-items-center"
                    style={{ position: "relative" }}
                  >
                    <form className="input-group" onSubmit={submitHandler}>
                      <div style={{ display: "flex" }}>
                        <input
                          type="search"
                          className="form-control rounded search"
                          placeholder="Search"
                          onChange={(e) => setKeyWord(e.target.value)}
                          style={{ zIndex: "1" }}
                        />
                        <button
                          type="submit"
                          className="search-button"
                        
                          style={{
                            position: "absolute",
                            bottom: "32%",
                            zIndex: "1000",
                            right: "1%",
                            height: "30px",
                            width: "50px",
                          }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            data-type="monochrome"
                            viewBox="0 0 16 16"
                            width="1em"
                            height="1em"
                            fill="none"
                          >
                            <path
                              fill="currentColor"
                              d="M6.4 0a6.369 6.369 0 00-4.525 1.873A6.425 6.425 0 00.502 3.906v.002A6.383 6.383 0 000 6.398a6.372 6.372 0 001.875 4.524 6.385 6.385 0 008.428.537l-.006.006 4.295 4.293a.827.827 0 001.166-1.166l-4.295-4.295a6.368 6.368 0 00-.537-8.424A6.372 6.372 0 006.4 0zm0 1.615a4.75 4.75 0 013.383 1.4c.44.44.785.95 1.028 1.522h-.002c.249.59.377 1.214.377 1.861 0 .648-.128 1.27-.377 1.862h.002a4.783 4.783 0 01-2.55 2.545c-.59.25-1.213.377-1.86.377a4.761 4.761 0 01-1.864-.377A4.749 4.749 0 013.016 9.78c-.44-.44-.783-.95-1.024-1.521a4.735 4.735 0 01-.377-1.862c0-.647.127-1.272.377-1.863a4.75 4.75 0 011.024-1.52 4.754 4.754 0 013.384-1.4z"
                            ></path>
                          </svg>
                        </button>
                      </div>
                    </form>
                  </div>
                  {userInfo ? (
                    <div className="col-md-4" style={{ display: "flex" }}>
                      <Link to="/user" style={{ display: "flex",textDecoration:'none' }}>
                        <img
                          src={userInfo.avatar}
                          alt="a"
                          style={{ width: "40px", height: "40px" }}
                        />
                        <h6
                          style={{
                            fontSize: "20px",
                            marginTop: "10px",
                            marginLeft: "20px",
                            color: "#ff",
                            width:'130px'
                          }}
                        >
                          {userInfo.name}
                        </h6>
                      </Link>
                      <button
                        style={{
                          border: "none",
                          background: "#ff8800",
                          borderRadius: "5px",
                          marginLeft: "10px",
                          paddingLeft: "20px",
                          
                        }}
                      >
                        <center>
                          <Link to="/newproduct" style={{ fontSize: "15px" ,textDecoration:'none'}}>
                            Đăng Tin
                          </Link>
                        </center>
                      </button>
                    </div>
                  ) : (
                    <div className="col-md-4" style={{ textAlign: "right" }}>
                      <Link to="/login">Đăng nhập</Link>
                      <Link to="/register">Đăng ký</Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Header;
