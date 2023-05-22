import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../Redux/Actions/UserAction";

const LoginScreen = ({ history }) => {
  window.scrollTo(0, 0);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { error, loading, userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      history.push("/");
    }
  }, [userInfo, history]);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(email, password);
    dispatch(login(email, password));
  };
  return (
    <html
      lang="en"
      class="light-style customizer-hide"
      dir="ltr"
      data-theme="theme-default"
      data-assets-path="assets/"
      data-template="vertical-menu-template-free"
    >
      <head>
        <meta charset="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0"
        />

        <title>
          Login Basic - Pages | Sneat - Bootstrap 5 HTML Admin Template - Pro
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

        <link rel="stylesheet" href="assets/vendor/fonts/boxicons.css" />

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
        <link rel="stylesheet" href="assets/css/demo.css" />

        <link
          rel="stylesheet"
          href="assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.css"
        />

        <link rel="stylesheet" href="assets/vendor/css/pages/page-auth.css" />
        <script src="assets/vendor/js/helpers.js"></script>
        <script src="assets/js/config.js"></script>
      </head>

      <body>
        <div class="container-xxl">
          <div class="authentication-wrapper authentication-basic container-p-y">
            <div class="authentication-inner">
              <div class="card">
                <div class="card-body">
                  <form
                    id="formAuthentication"
                    class="mb-3"
                    onSubmit={submitHandler}
                  >
                    <div class="mb-3">
                      <label for="email" class="form-label">
                        Email
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="email"
                        name="email-username"
                        placeholder="Nhập email"
                        onChange={(e) => setEmail(e.target.value)}
                        autofocus
                      />
                    </div>
                    <div class="mb-3 form-password-toggle">
                      <div class="d-flex justify-content-between">
                        <label class="form-label" for="password">
                          Mật khẩu
                        </label>
                      </div>
                      <div class="input-group input-group-merge">
                        <input
                          type="password"
                          id="password"
                          class="form-control"
                          name="password"
                          placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                          aria-describedby="password"
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>
                    </div>
                    <div class="mb-3">
                      <button
                        class="btn btn-primary d-grid w-100"
                        type="submit"
                      >
                        Đăng nhập
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        <script src="assets/vendor/libs/jquery/jquery.js"></script>
        <script src="assets/vendor/libs/popper/popper.js"></script>
        <script src="assets/vendor/js/bootstrap.js"></script>
        <script src="assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.js"></script>

        <script src="assets/vendor/js/menu.js"></script>
        <script src="assets/js/main.js"></script>

        <script async defer src="https://buttons.github.io/buttons.js"></script>
      </body>
    </html>
  );
};

export default LoginScreen;
