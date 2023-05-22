import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateStatusBlog } from "../Redux/Actions/ProductAction";
const DetailsProduct = ({ match }) => {
  const productid = match.params.id;
  const dispatch = useDispatch();
  const [product, setProduct] = useState("");
  const [owner, setOwner] = useState("");
  async function getproduct() {
    const { data } = await axios.get(
      `http://localhost:5000/api/products/${productid}`
    );
    const { data: data2 } = await axios.get(
      `http://localhost:5000/api/users/seller/profile/${data.userId}`
    );
    setOwner(data2);
    setProduct(data);
  }
  useEffect(() => {
    getproduct();
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

  const updateStatus = (id, status) => {
    dispatch(updateStatusBlog(id, status));
    window.location.reload();
  };

  return (
    <html
      lang="en"
      class="light-style layout-menu-fixed"
      dir="ltr"
      data-theme="theme-default"
      data-assets-path="../assets/"
      data-template="vertical-menu-template-free"
    >
      <head>
        <meta charset="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0"
        />

        <title>
          Dashboard - Analytics | Sneat - Bootstrap 5 HTML Admin Template - Pro
        </title>

        <meta name="description" content="" />

        <link
          rel="icon"
          type="image/x-icon"
          href="../assets/img/favicon/favicon.ico"
        />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap"
          rel="stylesheet"
        />

        <link rel="stylesheet" href="../assets/vendor/fonts/boxicons.css" />

        <link
          rel="stylesheet"
          href="../assets/vendor/css/core.css"
          class="template-customizer-core-css"
        />
        <link
          rel="stylesheet"
          href="../assets/vendor/css/theme-default.css"
          class="template-customizer-theme-css"
        />
        <link rel="stylesheet" href="../assets/css/demo.css" />

        <link
          rel="stylesheet"
          href="../assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.css"
        />

        <link
          rel="stylesheet"
          href="../assets/vendor/libs/apex-charts/apex-charts.css"
        />

        <script src="../assets/vendor/js/helpers.js"></script>

        <script src="../assets/js/config.js"></script>
      </head>

      <body>
        <div class="layout-wrapper layout-content-navbar">
          <div class="layout-container">
            <aside
              id="layout-menu"
              class="layout-menu menu-vertical menu bg-menu-theme"
            >
              <div class="app-brand demo">
                <a href="/Admin" class="app-brand-link">
                  <span class="demo menu-text fw-bolder ms-2">ADMIN</span>
                </a>
              </div>
              <div class="menu-inner-shadow"></div>

              <ul class="menu-inner py-1">
                <li class="menu-item">
                  <a href="/" class="menu-link menu-toggle">
                    <div data-i18n="Account Settings">Dashboard</div>
                  </a>
                </li>
                <li class="menu-item">
                  <a href="/product" class="menu-link menu-toggle">
                    <div data-i18n="Account Settings">Quản lý sản phẩm</div>
                  </a>
                </li>
                <li class="menu-item">
                  <a href="/user" class="menu-link menu-toggle">
                    <div data-i18n="Authentications">Danh sách người dùng</div>
                  </a>
                </li>
                <li class="menu-item">
                  <a href="/order" class="menu-link menu-toggle">
                    <div data-i18n="Account Settings">Danh sách đơn hàng</div>
                  </a>
                </li>
              </ul>
            </aside>

            <div class="layout-page">
              <nav
                class="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme"
                id="layout-navbar"
              >
                <div class="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none">
                  <a
                    class="nav-item nav-link px-0 me-xl-4"
                    href="javascript:void(0)"
                  >
                    <i class="bx bx-menu bx-sm"></i>
                  </a>
                </div>

                <div
                  class="navbar-nav-right d-flex align-items-center"
                  id="navbar-collapse"
                >
                  {/* /Search */}
                  <ul class="navbar-nav flex-row align-items-center ms-auto">
                    {/* Place this tag where you want the button to render. */}
                    {/* User */}
                    <li class="nav-item navbar-dropdown dropdown-user dropdown">
                      <a class="nav-link dropdown-toggle hide-arrow">
                        <div class="avatar avatar-online">
                          <img
                            src="../assets/img/avatars/1.png"
                            alt="a"
                            class="w-px-40 h-auto rounded-circle"
                          />
                        </div>
                      </a>
                      <ul class="dropdown-menu dropdown-menu-end">
                        <li>
                          <a class="dropdown-item" href="#">
                            <div class="d-flex">
                              <div class="flex-shrink-0 me-3">
                                <div class="avatar avatar-online">
                                  <img
                                    src="../assets/img/avatars/1.png"
                                    alt="b"
                                    class="w-px-40 h-auto rounded-circle"
                                  />
                                </div>
                              </div>
                              <div class="flex-grow-1">
                                <span class="fw-semibold d-block">
                                  John Doe
                                </span>
                                <small class="text-muted">Admin</small>
                              </div>
                            </div>
                          </a>
                        </li>
                        <li>
                          <div class="dropdown-divider"></div>
                        </li>
                        <li>
                          <a class="dropdown-item" href="auth-login-basic.html">
                            <i class="bx bx-power-off me-2"></i>
                            <span class="align-middle">Đăng xuất</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    {/*/ User */}
                  </ul>
                </div>
              </nav>

              {/* / Navbar */}
              {/* Content wrapper */}
              <div class="content-wrapper">
                {/* Content */}

                <div class="container-xxl flex-grow-1 container-p-y">
                  <div class="col-xxl">
                    <div class="card mb-4">
                      <div class="card-header d-flex align-items-center justify-content-between">
                        <h5 class="mb-0">Chi tiết tin đăng</h5>
                      </div>
                      <div class="card-body">
                        <div>
                          <div class="row mb-3">
                            <label
                              class="col-sm-2 col-form-label"
                              for="basic-default-name"
                            >
                              Họ tên người đăng
                            </label>
                            <div class="col-sm-10">
                              <input
                                type="text"
                                class="form-control"
                                disabled
                                id="basic-default-name"
                                value={owner.name}
                              />
                            </div>
                          </div>
                          <div class="row mb-3">
                            <label
                              class="col-sm-2 col-form-label"
                              for="basic-default-name"
                            >
                              Số điện thoại
                            </label>
                            <div class="col-sm-10">
                              <input
                                type="text"
                                class="form-control"
                                disabled
                                id="basic-default-name"
                                value={owner.phone}
                              />
                            </div>
                          </div>
                          <div class="row mb-3">
                            <label
                              class="col-sm-2 col-form-label"
                              for="basic-default-name"
                            >
                              Tiêu đề
                            </label>
                            <div class="col-sm-10">
                              <input
                                type="text"
                                class="form-control"
                                disabled
                                id="basic-default-name"
                                value={product.title}
                              />
                            </div>
                          </div>
                          <div class="row mb-3">
                            <label
                              class="col-sm-2 col-form-label"
                              for="basic-default-company"
                            >
                              Danh mục
                            </label>
                            <div class="col-sm-10">
                              <input
                                type="text"
                                class="form-control"
                                id="basic-default-company"
                                disabled
                                value={product.category}
                              />
                            </div>
                          </div>
                          <div class="row mb-3">
                            <label
                              class="col-sm-2 col-form-label"
                              for="basic-default-message"
                            >
                              Hình ảnh
                            </label>
                            {product !== "" ? (
                              <div class="col-sm-10">
                                <img
                                  src={product.image}
                                  alt="a"
                                  width={150}
                                  height={150}
                                />
                                <img
                                  src={product.imageList[1]}
                                  alt="a"
                                  style={{ marginLeft: "20px" }}
                                  width={150}
                                  height={150}
                                />
                                <img
                                  src={product.imageList[2]}
                                  alt="a"
                                  style={{ marginLeft: "20px" }}
                                  width={150}
                                  height={150}
                                />
                              </div>
                            ) : (
                              ""
                            )}
                          </div>
                          <div class="row mb-3">
                            <label
                              class="col-sm-2 col-form-label"
                              for="basic-default-email"
                            >
                              Mô tả
                            </label>
                            <div class="col-sm-10">
                              <div class="input-group input-group-merge">
                                <textarea
                                  type="text"
                                  id="basic-default-email"
                                  class="form-control"
                                  disabled
                                  rows={3}
                                  value={product.description}
                                ></textarea>
                              </div>
                            </div>
                          </div>
                          <div class="row mb-3">
                            <label
                              class="col-sm-2 col-form-label"
                              for="basic-default-phone"
                            >
                              Giá tiền
                            </label>
                            <div class="col-sm-10">
                              <input
                                type="text"
                                id="basic-default-phone"
                                class="form-control phone-mask"
                                disabled
                                value={currencyFormatter(
                                  product.price,
                                  defaultOptions
                                )}
                              />
                            </div>
                          </div>
                          <div class="row mb-3">
                            <label
                              class="col-sm-2 col-form-label"
                              for="basic-default-message"
                            >
                              Tình trạng
                            </label>
                            <div class="col-sm-10">
                              <input
                                type="text"
                                id="basic-default-phone"
                                class="form-control phone-mask"
                                disabled
                                value={
                                  product.isNew === true
                                    ? "Còn mới"
                                    : "Đã sử dụng"
                                }
                              />
                            </div>
                          </div>
                          <div class="row mb-3">
                            <label
                              class="col-sm-2 col-form-label"
                              for="basic-default-message"
                            >
                              Địa chỉ
                            </label>
                            <div class="col-sm-10">
                              <input
                                type="text"
                                id="basic-default-phone"
                                class="form-control phone-mask"
                                disabled
                                value={
                                  "Phường " +
                                  product.ward +
                                  ", quận " +
                                  product.district +
                                  ", " +
                                  product.city
                                }
                              />
                            </div>
                          </div>

                          <div class="row justify-content-end">
                            {product.isAccept === 0 ? (
                              <div class="col-sm-10">
                                <button
                                  onClick={() => updateStatus(product._id, 1)}
                                  class="btn btn-primary"
                                >
                                  Xác nhận
                                </button>
                                <button
                                  style={{ marginLeft: "20px" }}
                                  onClick={() => updateStatus(product._id, 2)}
                                  class="btn btn-danger"
                                >
                                  Từ chối
                                </button>
                              </div>
                            ) : product.isAccept === 1 ? (
                              <div class="col-sm-10">
                                <button
                                  onClick={() => updateStatus(product._id, 0)}
                                  class="btn btn-danger"
                                >
                                  Huỷ xác nhận
                                </button>
                              </div>
                            ) : (
                              <div class="col-sm-10">
                                <button
                                  onClick={() => updateStatus(product._id, 0)}
                                  class="btn btn-danger"
                                >
                                  Huỷ từ chối
                                </button>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* / Content */}
                {/* Footer */}
                <footer class="content-footer footer bg-footer-theme">
                  <div class="container-xxl d-flex flex-wrap justify-content-between py-2 flex-md-row flex-column"></div>
                </footer>
                {/* / Footer */}

                <div class="content-backdrop fade"></div>
              </div>
              {/* Content wrapper */}
            </div>
            {/* / Layout page */}
          </div>

          {/* Overlay */}
          <div class="layout-overlay layout-menu-toggle"></div>
        </div>
        {/* / Layout wrapper */}
        {/* Core JS */}
        {/* build:js ../assets/vendor/js/core.js */}
        <script src="../assets/vendor/libs/jquery/jquery.js"></script>
        <script src="../assets/vendor/libs/popper/popper.js"></script>
        <script src="../assets/vendor/js/bootstrap.js"></script>
        <script src="../assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.js"></script>
        <script src="../assets/vendor/js/menu.js"></script>
        {/* endbuild */}
        {/* Vendors JS */}
        <script src="../assets/vendor/libs/apex-charts/apexcharts.js"></script>
        {/* Main JS */}
        <script src="../assets/js/main.js"></script>
        {/* {/* Page JS */}
        <script src="../assets/js/dashboards-analytics.js"></script>
        {/* Place this tag in your head or just before your close body tag. */}
        <script async defer src="https://buttons.github.io/buttons.js"></script>
      </body>
    </html>
  );
};

export default DetailsProduct;
