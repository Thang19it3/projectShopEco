import React, { useEffect } from "react";
import Header from "./../components/Header";
import ProfileTabs from "./../components/profileComponents/ProfileTabs";
import Orders from "./../components/profileComponents/Orders";
import { useDispatch, useSelector } from "react-redux";
import { getUserDetails } from "./../Redux/Actions/UserActions.js";
import moment from "moment";
import { ChangeEvent, useState } from "react";
import "./../css/profile.css";
import profile from "./../image/profile.png";
import Footer from "./../components/Footer";

const ProfileScreen = () => {
  window.scrollTo(0, 0);

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    dispatch(getUserDetails("profile"));
  }, [dispatch]);
  return (
    <>
      <Header />
      <div className="container mt-lg-5 mt-3">
        <div className="row align-items-start">
          <div
            className="col-lg-4 p-0 shadow"
            style={{ background: "#fff", marginBottom: "20px" }}
          >
            <div
              className="author-card pb-0 pb-md-3"
              style={{ background: "#fff", marginBottom: "20px" }}
            >
              <div className="author-card-cover"></div>
              <div className="author-card-profile row">
                <div className="author-card-avatar col-md-5">
                  <img
                    src={userInfo.avatar}
                    alt="profile"
                    style={{ borderRadius: "50%" }}
                  />
                </div>
                <div className="author-card-details col-md-7">
                  <h3 className="author-card-name mb-2">
                    <strong>{userInfo.name}</strong>
                  </h3>
                  <h5 className="author-card-postition">
                    <span style={{ color: "gray" }}>
                      Đã tham gia {userInfo.createdAt}
                    </span>
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div
            className="tab-content col-lg-8 pb-5 pt-lg-0 pt-3"
            id="v-pills-tabContent"
          >
            <ProfileTabs />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProfileScreen;
