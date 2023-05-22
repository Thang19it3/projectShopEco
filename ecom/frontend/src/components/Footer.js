import React from "react";
import "./../css/footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="col-12 footer1">
          <div className="row">
            <div className="col-3 footer-qr">
              <h4
                style={{
                  fontSize: "18px",
                  fontWeight: "500",
                  marginBottom: "20px",
                }}
              >
                Tải ứng dụng điện thoại
              </h4>
              <div className="footer-qr-1">
                <img
                  src="https://static.chotot.com/storage/default/group-qr.webp"
                  className="qr"
                />
                <div className="footer-qr-1-1">
                  <img src="https://static.chotot.com/storage/default/ios.svg" />
                  <img src="https://static.chotot.com/storage/default/android.svg" />
                  <img src="https://static.chotot.com/storage/default/huawei_app_install.webp" />
                </div>
              </div>
            </div>
            <div className="col-3 footer-qr">
              <h4
                style={{
                  fontSize: "18px",
                  fontWeight: "500",
                  marginBottom: "20px",
                }}
              >
                Hỗ trợ khách hàng
              </h4>
              <h6
                style={{
                  fontSize: "16px",
                  marginBottom: "10px",
                  color: "gray",
                }}
              >
                Trung tâm trợ giúp
              </h6>
              <h6
                style={{
                  fontSize: "16px",
                  marginBottom: "10px",
                  color: "gray",
                }}
              >
                An toàn mua bán
              </h6>
              <h6
                style={{
                  fontSize: "16px",
                  marginBottom: "10px",
                  color: "gray",
                }}
              >
                Quy định cần thiết
              </h6>
              <h6
                style={{
                  fontSize: "16px",
                  marginBottom: "10px",
                  color: "gray",
                }}
              >
                Liên hệ hỗ trợ{" "}
              </h6>
            </div>
            <div className="col-3 footer-qr">
              <h4
                style={{
                  fontSize: "18px",
                  fontWeight: "500",
                  marginBottom: "20px",
                }}
              >
                Về chúng tôi
              </h4>
              <h6
                style={{
                  fontSize: "16px",
                  marginBottom: "10px",
                  color: "gray",
                }}
              >
                Giới thiệu
              </h6>
              <h6
                style={{
                  fontSize: "16px",
                  marginBottom: "10px",
                  color: "gray",
                }}
              >
                Tuyển dụng
              </h6>
              <h6
                style={{
                  fontSize: "16px",
                  marginBottom: "10px",
                  color: "gray",
                }}
              >
                Truyền thông
              </h6>
              <h6
                style={{
                  fontSize: "16px",
                  marginBottom: "10px",
                  color: "gray",
                }}
              >
                Blog
              </h6>
            </div>
            <div className="col-3 footer-qr">
              <h4
                style={{
                  fontSize: "18px",
                  fontWeight: "500",
                  marginBottom: "20px",
                }}
              >
                Liên kết
              </h4>
              <div style={{ marginBottom: "10px" }}>
                <img
                  src="https://static.chotot.com/storage/default/facebook.svg"
                  style={{ marginRight: "10px" }}
                />
                <img
                  src="https://static.chotot.com/storage/default/youtube.svg"
                  style={{ marginRight: "10px" }}
                />
                <img src="https://static.chotot.com/storage/default/linkedin.svg" />
              </div>
              <h4
                style={{
                  fontSize: "18px",
                  fontWeight: "500",
                  marginBottom: "20px",
                }}
              >
                Chứng nhận
              </h4>
              <img src="https://static.chotot.com/storage/default/certificate.webp" />
            </div>
          </div>
        </div>
      </div>
      <hr></hr>
      <div className="footer-bottom border-enable">
        <div className="container">
          <div className="site-copyright">
            <p
              style={{
                textAlign: "center",
                marginBottom: "20px",
                marginTop: "20px",
              }}
            >
              Copyright 2022 © Thang Theme. All rights reserved. Powered by
              KlbTheme.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
