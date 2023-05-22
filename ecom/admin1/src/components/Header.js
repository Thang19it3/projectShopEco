import React, { useEffect } from "react";
import $ from "jquery";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../Redux/Actions/UserAction";

const Header = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    $("[data-trigger]").on("click", function (e) {
      e.preventDefault();
      e.stopPropagation();

      var offcanvas_id = $(this).attr("data-trigger");
      $(offcanvas_id).toggleClass("show");
    });

    $(".btn-aside-minimize").on("click", function () {
      if (window.innerWidth < 768) {
        $("body").removeClass("aside-mini");
        $(".navbar-aside").removeClass("show");
      } else {
        $("body").toggleClass("aside-mini");
      }
    });
  }, []);

  const logoutHandler = () => {
    dispatch(logout());
  };
  return (
    <header className="main-header navbar">
      <div className="col-search">
        <form className="searchform">
          <div className="input-group">
            <input
              list="search_terms"
              type="text"
              className="form-control"
              placeholder="Search term"
            />
            <button className="btn btn-light bg" type="button">
              <i class="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
          <datalist id="search_terms">
            <option value="Products" />
            <option value="Products" />
            <option value="Products" />
            <option value="Products" />
          </datalist>
        </form>
      </div>
      <div className="col-nav">
        <button
          className="btn btn-icon btn-mobile me-auto"
          data-trigger="#offcanvas_aside"
        >
          <i class="fa-solid fa-bars"></i>
        </button>
        <ul className="nav">
          <li className="nav-item">
            <Link className={`nav-link btn-icon`} title="Dark mode" to="#">
              <i class="fa-duotone fa-moon"></i>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link btn-icon" to="#">
              <i class="fa-regular fa-bell"></i>
            </Link>
          </li>
          <li className="dropdown nav-item">
            <Link className="dropdown-toggle" data-bs-toggle="dropdown" to="#">
              <img />
            </Link>
            <div className="dropdown-menu dropdown-menu-end">
              <Link className="dropdown-item" to="/">
                My profile
              </Link>
              <Link
                onClick={logoutHandler}
                className="dropdown-item text-danger"
                to="#"
              >
                Exit
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
