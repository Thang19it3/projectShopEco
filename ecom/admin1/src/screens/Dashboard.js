import React from "react";

const Dashboard = () => {
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
          href="assets/img/favicon/favicon.ico"
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
          href="assets/vendor/css/core.css"
          class="template-customizer-core-css"
        />
        <link
          rel="stylesheet"
          href="assets/vendor/css/theme-default.css"
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
                  <div class="row">
                    <div class="col-lg-6 col-md-4 order-1">
                      <div class="row">
                        <div class="col-lg-6 col-md-12 col-6 mb-4">
                          <div class="card">
                            <div class="card-body">
                              <div class="card-title d-flex align-items-start justify-content-between">
                                <div class="avatar flex-shrink-0">
                                  <img
                                    src="../assets/img/icons/unicons/chart-success.png"
                                    alt="chart success"
                                    class="rounded"
                                  />
                                </div>
                                <div class="dropdown">
                                  <button
                                    class="btn p-0"
                                    type="button"
                                    id="cardOpt3"
                                    data-bs-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                  >
                                    <i class="bx bx-dots-vertical-rounded"></i>
                                  </button>
                                  <div
                                    class="dropdown-menu dropdown-menu-end"
                                    aria-labelledby="cardOpt3"
                                  >
                                    <a
                                      class="dropdown-item"
                                      href="javascript:void(0);"
                                    >
                                      View More
                                    </a>
                                    <a
                                      class="dropdown-item"
                                      href="javascript:void(0);"
                                    >
                                      Delete
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <span class="fw-semibold d-block mb-1">
                                Tổng người dùng
                              </span>
                              <h3 class="card-title mb-2">13</h3>
                              <small class="text-success fw-semibold">
                                <i class="bx bx-up-arrow-alt"></i> +72.80%
                              </small>
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-6 col-md-12 col-6 mb-4">
                          <div class="card">
                            <div class="card-body">
                              <div class="card-title d-flex align-items-start justify-content-between">
                                <div class="avatar flex-shrink-0">
                                  <img
                                    src="../assets/img/icons/unicons/wallet-info.png"
                                    alt="Credit Card"
                                    class="rounded"
                                  />
                                </div>
                                <div class="dropdown">
                                  <button
                                    class="btn p-0"
                                    type="button"
                                    id="cardOpt6"
                                    data-bs-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                  >
                                    <i class="bx bx-dots-vertical-rounded"></i>
                                  </button>
                                  <div
                                    class="dropdown-menu dropdown-menu-end"
                                    aria-labelledby="cardOpt6"
                                  >
                                    <a
                                      class="dropdown-item"
                                      href="javascript:void(0);"
                                    >
                                      View More
                                    </a>
                                    <a
                                      class="dropdown-item"
                                      href="javascript:void(0);"
                                    >
                                      Delete
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <span>Tổng sản phẩm</span>
                              <h3 class="card-title text-nowrap mb-1">14</h3>
                              <small class="text-success fw-semibold">
                                <i class="bx bx-up-arrow-alt"></i> +28.42%
                              </small>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-6 col-md-8 col-lg-4 order-3 order-md-2">
                      <div class="row">
                        <div class="col-6 mb-4">
                          <div class="card">
                            <div class="card-body">
                              <div class="card-title d-flex align-items-start justify-content-between">
                                <div class="avatar flex-shrink-0">
                                  <img
                                    src="../assets/img/icons/unicons/paypal.png"
                                    alt="Credit Card"
                                    class="rounded"
                                  />
                                </div>
                                <div class="dropdown">
                                  <button
                                    class="btn p-0"
                                    type="button"
                                    id="cardOpt4"
                                    data-bs-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                  >
                                    <i class="bx bx-dots-vertical-rounded"></i>
                                  </button>
                                  <div
                                    class="dropdown-menu dropdown-menu-end"
                                    aria-labelledby="cardOpt4"
                                  >
                                    <a
                                      class="dropdown-item"
                                      href="javascript:void(0);"
                                    >
                                      View More
                                    </a>
                                    <a
                                      class="dropdown-item"
                                      href="javascript:void(0);"
                                    >
                                      Delete
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <span class="d-block mb-1">
                                Tổng tiền đã giao dịch
                              </span>
                              <h3 class="card-title text-nowrap mb-2">
                                2,300,100
                              </h3>
                              <small class="text-danger fw-semibold">
                                <i class="bx bx-down-arrow-alt"></i> -14.82%
                              </small>
                            </div>
                          </div>
                        </div>
                        <div class="col-6 mb-4">
                          <div class="card">
                            <div class="card-body">
                              <div class="card-title d-flex align-items-start justify-content-between">
                                <div class="avatar flex-shrink-0">
                                  <img
                                    src="../assets/img/icons/unicons/cc-primary.png"
                                    alt="Credit Card"
                                    class="rounded"
                                  />
                                </div>
                                <div class="dropdown">
                                  <button
                                    class="btn p-0"
                                    type="button"
                                    id="cardOpt1"
                                    data-bs-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                  >
                                    <i class="bx bx-dots-vertical-rounded"></i>
                                  </button>
                                  <div
                                    class="dropdown-menu"
                                    aria-labelledby="cardOpt1"
                                  >
                                    <a
                                      class="dropdown-item"
                                      href="javascript:void(0);"
                                    >
                                      View More
                                    </a>
                                    <a
                                      class="dropdown-item"
                                      href="javascript:void(0);"
                                    >
                                      Delete
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <span class="fw-semibold d-block mb-1">
                                Tổng đơn hàng
                              </span>
                              <h3 class="card-title mb-2">13</h3>
                              <small class="text-success fw-semibold">
                                <i class="bx bx-up-arrow-alt"></i> +28.14%
                              </small>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6 col-lg-4 col-xl-4 order-0 mb-4">
                      <div class="card h-100">
                        <div class="card-header d-flex align-items-center justify-content-between pb-0">
                          <div class="card-title mb-0">
                            <h5 class="m-0 me-2">Order Statistics</h5>
                            <small class="text-muted">42.82k Total Sales</small>
                          </div>
                          <div class="dropdown">
                            <button
                              class="btn p-0"
                              type="button"
                              id="orederStatistics"
                              data-bs-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              <i class="bx bx-dots-vertical-rounded"></i>
                            </button>
                            <div
                              class="dropdown-menu dropdown-menu-end"
                              aria-labelledby="orederStatistics"
                            >
                              <a
                                class="dropdown-item"
                                href="javascript:void(0);"
                              >
                                Select All
                              </a>
                              <a
                                class="dropdown-item"
                                href="javascript:void(0);"
                              >
                                Refresh
                              </a>
                              <a
                                class="dropdown-item"
                                href="javascript:void(0);"
                              >
                                Share
                              </a>
                            </div>
                          </div>
                        </div>
                        <div class="card-body">
                          <div class="d-flex justify-content-between align-items-center mb-3">
                            <div class="d-flex flex-column align-items-center gap-1">
                              <h2 class="mb-2">8,258</h2>
                              <span>Total Orders</span>
                            </div>
                            <div id="orderStatisticsChart"></div>
                          </div>
                          <ul class="p-0 m-0">
                            <li class="d-flex mb-4 pb-1">
                              <div class="avatar flex-shrink-0 me-3">
                                <span class="avatar-initial rounded bg-label-primary">
                                  <i class="bx bx-mobile-alt"></i>
                                </span>
                              </div>
                              <div class="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                                <div class="me-2">
                                  <h6 class="mb-0">Electronic</h6>
                                  <small class="text-muted">
                                    Mobile, Earbuds, TV
                                  </small>
                                </div>
                                <div class="user-progress">
                                  <small class="fw-semibold">82.5k</small>
                                </div>
                              </div>
                            </li>
                            <li class="d-flex mb-4 pb-1">
                              <div class="avatar flex-shrink-0 me-3">
                                <span class="avatar-initial rounded bg-label-success">
                                  <i class="bx bx-closet"></i>
                                </span>
                              </div>
                              <div class="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                                <div class="me-2">
                                  <h6 class="mb-0">Fashion</h6>
                                  <small class="text-muted">
                                    T-shirt, Jeans, Shoes
                                  </small>
                                </div>
                                <div class="user-progress">
                                  <small class="fw-semibold">23.8k</small>
                                </div>
                              </div>
                            </li>
                            <li class="d-flex mb-4 pb-1">
                              <div class="avatar flex-shrink-0 me-3">
                                <span class="avatar-initial rounded bg-label-info">
                                  <i class="bx bx-home-alt"></i>
                                </span>
                              </div>
                              <div class="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                                <div class="me-2">
                                  <h6 class="mb-0">Decor</h6>
                                  <small class="text-muted">
                                    Fine Art, Dining
                                  </small>
                                </div>
                                <div class="user-progress">
                                  <small class="fw-semibold">849k</small>
                                </div>
                              </div>
                            </li>
                            <li class="d-flex">
                              <div class="avatar flex-shrink-0 me-3">
                                <span class="avatar-initial rounded bg-label-secondary">
                                  <i class="bx bx-football"></i>
                                </span>
                              </div>
                              <div class="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                                <div class="me-2">
                                  <h6 class="mb-0">Sports</h6>
                                  <small class="text-muted">
                                    Football, Cricket Kit
                                  </small>
                                </div>
                                <div class="user-progress">
                                  <small class="fw-semibold">99</small>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div class="col-md-6 col-lg-4 order-1 mb-4">
                      <div class="card h-100">
                        <div class="card-header">
                          <ul class="nav nav-pills" role="tablist">
                            <li class="nav-item">
                              <button
                                type="button"
                                class="nav-link active"
                                role="tab"
                                data-bs-toggle="tab"
                                data-bs-target="#navs-tabs-line-card-income"
                                aria-controls="navs-tabs-line-card-income"
                                aria-selected="true"
                              >
                                Income
                              </button>
                            </li>
                            <li class="nav-item">
                              <button type="button" class="nav-link" role="tab">
                                Expenses
                              </button>
                            </li>
                            <li class="nav-item">
                              <button type="button" class="nav-link" role="tab">
                                Profit
                              </button>
                            </li>
                          </ul>
                        </div>
                        <div class="card-body px-0">
                          <div class="tab-content p-0">
                            <div
                              class="tab-pane fade show active"
                              id="navs-tabs-line-card-income"
                              role="tabpanel"
                            >
                              <div class="d-flex p-4 pt-3">
                                <div class="avatar flex-shrink-0 me-3">
                                  <img
                                    src="../assets/img/icons/unicons/wallet.png"
                                    alt="User"
                                  />
                                </div>
                              </div>
                              <div id="incomeChart"></div>
                              <div class="d-flex justify-content-center pt-4 gap-2">
                                <div class="flex-shrink-0">
                                  <div id="expensesOfWeek"></div>
                                </div>
                                <div>
                                  <p class="mb-n1 mt-1">Expenses This Week</p>
                                  <small class="text-muted">
                                    $39 less than last week
                                  </small>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="col-md-6 col-lg-4 order-2 mb-4">
                      <div class="card h-100">
                        <div class="card-header d-flex align-items-center justify-content-between">
                          <h5 class="card-title m-0 me-2">Transactions</h5>
                          <div class="dropdown">
                            <button
                              class="btn p-0"
                              type="button"
                              id="transactionID"
                              data-bs-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              <i class="bx bx-dots-vertical-rounded"></i>
                            </button>
                            <div
                              class="dropdown-menu dropdown-menu-end"
                              aria-labelledby="transactionID"
                            >
                              <a
                                class="dropdown-item"
                                href="javascript:void(0);"
                              >
                                Last 28 Days
                              </a>
                              <a
                                class="dropdown-item"
                                href="javascript:void(0);"
                              >
                                Last Month
                              </a>
                              <a
                                class="dropdown-item"
                                href="javascript:void(0);"
                              >
                                Last Year
                              </a>
                            </div>
                          </div>
                        </div>
                        <div class="card-body">
                          <ul class="p-0 m-0">
                            <li class="d-flex mb-4 pb-1">
                              <div class="avatar flex-shrink-0 me-3">
                                <img
                                  src="../assets/img/icons/unicons/paypal.png"
                                  alt="User"
                                  class="rounded"
                                />
                              </div>
                              <div class="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                                <div class="me-2">
                                  <small class="text-muted d-block mb-1">
                                    Paypal
                                  </small>
                                  <h6 class="mb-0">Send money</h6>
                                </div>
                                <div class="user-progress d-flex align-items-center gap-1">
                                  <h6 class="mb-0">+82.6</h6>
                                  <span class="text-muted">USD</span>
                                </div>
                              </div>
                            </li>
                            <li class="d-flex mb-4 pb-1">
                              <div class="avatar flex-shrink-0 me-3">
                                <img
                                  src="../assets/img/icons/unicons/wallet.png"
                                  alt="User"
                                  class="rounded"
                                />
                              </div>
                              <div class="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                                <div class="me-2">
                                  <small class="text-muted d-block mb-1">
                                    Wallet
                                  </small>
                                  <h6 class="mb-0">Mac'D</h6>
                                </div>
                                <div class="user-progress d-flex align-items-center gap-1">
                                  <h6 class="mb-0">+270.69</h6>
                                  <span class="text-muted">USD</span>
                                </div>
                              </div>
                            </li>
                            <li class="d-flex mb-4 pb-1">
                              <div class="avatar flex-shrink-0 me-3">
                                <img
                                  src="../assets/img/icons/unicons/chart.png"
                                  alt="User"
                                  class="rounded"
                                />
                              </div>
                              <div class="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                                <div class="me-2">
                                  <small class="text-muted d-block mb-1">
                                    Transfer
                                  </small>
                                  <h6 class="mb-0">Refund</h6>
                                </div>
                                <div class="user-progress d-flex align-items-center gap-1">
                                  <h6 class="mb-0">+637.91</h6>
                                  <span class="text-muted">USD</span>
                                </div>
                              </div>
                            </li>
                            <li class="d-flex mb-4 pb-1">
                              <div class="avatar flex-shrink-0 me-3">
                                <img
                                  src="../assets/img/icons/unicons/cc-success.png"
                                  alt="User"
                                  class="rounded"
                                />
                              </div>
                              <div class="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                                <div class="me-2">
                                  <small class="text-muted d-block mb-1">
                                    Credit Card
                                  </small>
                                  <h6 class="mb-0">Ordered Food</h6>
                                </div>
                                <div class="user-progress d-flex align-items-center gap-1">
                                  <h6 class="mb-0">-838.71</h6>
                                  <span class="text-muted">USD</span>
                                </div>
                              </div>
                            </li>
                            <li class="d-flex mb-4 pb-1">
                              <div class="avatar flex-shrink-0 me-3">
                                <img
                                  src="../assets/img/icons/unicons/wallet.png"
                                  alt="User"
                                  class="rounded"
                                />
                              </div>
                              <div class="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                                <div class="me-2">
                                  <small class="text-muted d-block mb-1">
                                    Wallet
                                  </small>
                                  <h6 class="mb-0">Starbucks</h6>
                                </div>
                                <div class="user-progress d-flex align-items-center gap-1">
                                  <h6 class="mb-0">+203.33</h6>
                                  <span class="text-muted">USD</span>
                                </div>
                              </div>
                            </li>
                            <li class="d-flex">
                              <div class="avatar flex-shrink-0 me-3">
                                <img
                                  src="../assets/img/icons/unicons/cc-warning.png"
                                  alt="User"
                                  class="rounded"
                                />
                              </div>
                              <div class="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                                <div class="me-2">
                                  <small class="text-muted d-block mb-1">
                                    Mastercard
                                  </small>
                                  <h6 class="mb-0">Ordered Food</h6>
                                </div>
                                <div class="user-progress d-flex align-items-center gap-1">
                                  <h6 class="mb-0">-92.45</h6>
                                  <span class="text-muted">USD</span>
                                </div>
                              </div>
                            </li>
                          </ul>
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

export default Dashboard;
