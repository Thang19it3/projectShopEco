import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { register } from "./../Redux/Actions/UserActions.js";
import Loading from "./../components/LoandingError/Loading.js";
import Message from "./../components/LoandingError/Error.js";
import "./../css/login.css";
import logo from "./../image/logo.png";

const Register = ({ location, history }) => {
  window.scrollTo(0, 0);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const dispatch = useDispatch();
  const redirect = location.search ? location.search.split("=")[1] : "/";

  const userRegister = useSelector((state) => state.userRegister);
  const { error, loading, userInfo } = userRegister;

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [userInfo, history, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(register(name, email, phone, password));
  };
  return (
    <>
      {/*  <div className='container d-flex flex-column justify-content-center'>

        { error && <Message variant='alert-danger'>{error}</Message>}
        {loading && <Loading />}

            <form className = 'Login col-md-8 col-lg-4 col-11'
            onSubmit = {
                submitHandler
            } >
                <input type='text' placeholder='UserName' value={name} onChange={(e) => setName(e.target.value)}/>
                <input type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />

                <button type='submit'>Register</button>
                <p>
                    <Link to = { redirect ? `/login?redirect=${redirect}` : "/register" }>
                        I have Accoutn <strong>Login</strong>
                    </Link>
                </p>
            </form>
        </div> 
        */}
      <div className="login">
        <div className="signin-header">
          <div className="row align-items-center">
            <div className="col-sm-4">
              <a>
                <Link></Link>
                <img
                  src="https://static.chotot.com/storage/default/transparent_logo.webp"
                  alt="logo"
                />
              </a>
            </div>
            <div className="col-sm-8">
              <div className="signin-header-btn">
                <p>Bạn đã có tài khoản?</p>
                <button className="axil-btn btn-bg-secondary sign-up-btn">
                  <Link to="/login" style={{ color: "white" }}>
                    Đăng nhập
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-4 col-lg-6">
            <div className="signin-banner bg_image bg_image--9">
              <h3
                className="title"
                style={{ color: "#fff", fontWeight: "900" }}
              >
                Chúng tôi cung cấp những sản phẩm tốt nhất
              </h3>
            </div>
          </div>
          <div className="col-lg-6 offset-xl-2">
            <div>
              <div>
                <h3 className="title">Đăng ký tài khoản mới</h3>
                <p className="b2">Nhập thông tin đăng ký</p>

                <form
                  className="Login col-md-8 col-lg-4 col-11 login1"
                  onSubmit={submitHandler}
                >
                  <div className="form-group">
                    <label>Họ và tên</label>
                    <input
                      className="form-control"
                      placeholder="Họ tên"
                      value={name}
                      style={{ fontSize: "15px" }}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label>Email</label>
                    <input
                      className="form-control"
                      type="email"
                      placeholder="Email"
                      value={email}
                      style={{ fontSize: "15px" }}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label>Số điện thoại</label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Số điện thoại"
                      value={phone}
                      style={{ fontSize: "15px" }}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label>Mật khẩu</label>
                    <input
                      className="form-control"
                      type="password"
                      placeholder="Mật khẩu"
                      value={password}
                      style={{ fontSize: "15px" }}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label>Xác nhận mật khẩu</label>
                    <input
                      className="form-control"
                      type="password"
                      placeholder="Xác nhận mật khẩu"
                      value={password2}
                      style={{ fontSize: "15px" }}
                      onChange={(e) => setPassword2(e.target.value)}
                    />
                  </div>
                  <div className="form-group d-flex align-items-center justify-content-between">
                    <button
                      type="submit"
                      className="axil-btn btn-bg-primary sign-up-btn"
                    >
                      Đăng ký
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
