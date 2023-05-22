import React from "react";
import Header from "./Header";
import "./../css/contac.css";
import Footer from "./Footer";

const Contact = () => {
  return (
    <div>
      <Header />
      <div className="axil-contact-page-area axil-section-gap">
        <div className="container">
          <div className="axil-contact-page">
            <div
              className="row row--30"
              style={{
                background: "#fff",
                paddingTop: "40px",
                paddingBottom: "40px",
              }}
            >
              <div className="col-lg-8">
                <div className="contact-form">
                  <h4 className="title mb--10" style={{ fontWeight: "bold" }}>
                    Gửi thông tin phản hồi đến với chúng tôi
                  </h4>
                  <p>Nếu bạn có bất kì vấn đề gì với sản phẩm</p>
                  <form className="axil-contact-form">
                    <div className="row row--10">
                      <div className="col-lg-4">
                        <div className="form-group">
                          <label>
                            Họ và tên <span>*</span>
                          </label>
                          <input type="text" />
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="form-group">
                          <label>
                            Email <span>*</span>
                          </label>
                          <input type="text" />
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="form-group">
                          <label>
                            Số điện thoại <span>*</span>
                          </label>
                          <input type="text" />
                        </div>
                      </div>

                      <div className="col-lg-12">
                        <div className="form-group">
                          <label>Nội dung</label>
                          <textarea
                            name="contact-message"
                            id="contact-message"
                            cols="12"
                            rows="2"
                            style={{
                              border: "0 none",
                              borderRadius: "6px",
                              height: "50px",
                              fontSize: "14px",
                              padding: "0 20px",
                              backgroundColor: "#fff",
                              border: "1px solid #cbd3d9",
                              width: "100%",
                            }}
                          ></textarea>
                        </div>
                      </div>
                      <div className="col-lg-12"></div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="contact-location mb--40">
                  <h4 className="title mb--20" style={{ fontWeight: "bold" }}>
                    Cửa hàng chúng tôi
                  </h4>
                  <p className="address mb--20">
                    470 Đường Trần Đại Nghĩa, Khu đô thị, Ngũ Hành Sơn, Đà Nẵng
                    <br></br>
                    <span>Phone: 0123229120</span>
                    <br></br>
                    <span>Email: thang@etrade.com</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="axil-google-map-wrap axil-section-gap pb--0">
              <div className="mapouter">
                <div className="gmap_canvas">
                  <iframe
                    width="100%"
                    height="500"
                    id="gmap_canvas"
                    src="https://maps.google.com/maps?q=melbourne&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
