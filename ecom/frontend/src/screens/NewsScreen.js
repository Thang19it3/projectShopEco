import React, { useState, useEffect } from "react";
import Header from "./../components/Header";
import supabase from "./supabage";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  PRODUCT_CREATE_REQUEST,
  PRODUCT_CREATE_RESET,
} from "./../Redux/Constants/ProductConstants";
import { createProduct } from "./../Redux/Actions/ProductActions";
import Toast from "./../components/profileComponents/Toast";
import "./../css/new.css";
import Footer from "../components/Footer";

const NewsScreen = ({ url }) => {
  const [avatarUrl, setAvatarUrl] = useState(null);
  const [uploading, setUploading] = useState(false);

  const [image1, setImage1] = useState("");
  const [image2, setImage2] = useState("");

  const [category, setCategory] = useState("Đồ điện tử");
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [isNew, setIsNew] = useState(false);
  const [city, setCity] = useState("");
  const [district, setDistrict] = useState("");
  const [ward, setWard] = useState("");

  const cities = ["Đà Nẵng", "Huế", "Quảng Nam", "Quảng Ngãi"];
  const district1 = ["Hải châu", "Thanh khê", "Ngũ hành sơn", "Liên chiểu"];
  const district2 = ["Nam Đông", "Phong Điền", "Phú Lộc", "Phú Vang"];
  const district3 = ["Đại Lộc", "Đông Giang", "Phú Ninh", "Quế Sơn"];
  const wards = ["Hải Châu 1", "Hoà Cường Bắc", "Nam Dương", "Phước Ninh"];

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      createProduct(
        category,
        title,
        image,
        image1,
        image2, 
        description,
        price,
        isNew,
        city,
        district,
        ward
      )
    );
    window.location.href = "/quan-ly-tin";
  };

  const uploadimage = async (event) => {
    try {
      setUploading(true);

      if (!event.target.files || event.target.files.length === 0) {
        throw new Error("You must select an image to upload.");
      }

      const file = event.target.files[0];
      const fileExt = file.name.split(".").pop();
      const fileName = `${Math.random()}.${fileExt}`;
      const filePath = `${fileName}`;

      let { error: uploadError } = await supabase.storage
        .from("ecomme")
        .upload(filePath, file);

      setImage(
        `https://zpplzucbznkfhzthtbfh.supabase.co/storage/v1/object/public/ecomme/` +
          filePath
      );

      if (uploadError) {
        throw uploadError;
      }
    } catch (error) {
      alert(error.message);
    } finally {
      setUploading(false);
    }
  };

  const uploadimage1 = async (event) => {
    try {
      setUploading(true);

      if (!event.target.files || event.target.files.length === 0) {
        throw new Error("You must select an image to upload.");
      }

      const file = event.target.files[0];
      const fileExt = file.name.split(".").pop();
      const fileName = `${Math.random()}.${fileExt}`;
      const filePath = `${fileName}`;

      let { error: uploadError } = await supabase.storage
        .from("ecomme")
        .upload(filePath, file);
      setImage1(
        `https://zpplzucbznkfhzthtbfh.supabase.co/storage/v1/object/public/ecomme/` +
          filePath
      );
      if (uploadError) {
        throw uploadError;
      }
    } catch (error) {
      alert(error.message);
    } finally {
      setUploading(false);
    }
  };
  const uploadimage2 = async (event) => {
    try {
      setUploading(true);

      if (!event.target.files || event.target.files.length === 0) {
        throw new Error("You must select an image to upload.");
      }

      const file = event.target.files[0];
      const fileExt = file.name.split(".").pop();
      const fileName = `${Math.random()}.${fileExt}`;
      const filePath = `${fileName}`;

      let { error: uploadError } = await supabase.storage
        .from("ecomme")
        .upload(filePath, file);
      setImage2(
        `https://zpplzucbznkfhzthtbfh.supabase.co/storage/v1/object/public/ecomme/` +
          filePath
      );
      if (uploadError) {
        throw uploadError;
      }
    } catch (error) {
      alert(error.message);
    } finally {
      setUploading(false);
    }
  };

  return (
    <>
      <Header />
      <div className="newProduct">
        <div className="container">
          <div
            className="row"
            style={{ background: "#fff", paddingTop: "50px" }}
          >
            <h1>ĐĂNG TIN</h1>
            <form className="col-12" onSubmit={submitHandler}>
              <div className="row">
                <div className="col-4" style={{ paddingLeft: "20px" }}>
                  <input
                    type="file"
                    id="single"
                    accept="image/*"
                    onChange={uploadimage}
                    disabled={uploading}
                    className="fileImage"
                  />

                  <input
                    type="file"
                    id="single"
                    accept="image/*"
                    onChange={uploadimage1}
                    disabled={uploading}
                    className="fileImage"
                  />

                  <input
                    type="file"
                    id="single"
                    accept="image/*"
                    onChange={uploadimage2}
                    disabled={uploading}
                    className="fileImage"
                  />
                </div>
                <div className="col-8" style={{ paddingLeft: "40px" }}>
                  <div className="danhMuc">
                    <label className="danhMucLa">
                      <h4>Danh Mục</h4>
                    </label>
                    <select
                      onChange={(e) => {
                        const selectedCa = e.target.value;
                        setCategory(selectedCa);
                      }}
                      value={category}
                    >
                      <option value="" disabled>
                        Chọn Danh Mục
                      </option>
                      <option value="Đồ điện tử">Đồ điện tử</option>
                      <option value="Thời trang, đồ dùng cá nhân">
                        Thời trang, đồ dùng cá nhân
                      </option>
                      <option value="Giải trí thể thao">
                        Giải trí thể thao
                      </option>
                    </select>
                  </div>
                  <h4>Thông tin chi tiết</h4>

                  <h3 style={{ marginBottom: "20px" }}>Tình Trạng</h3>
                  <div className="radio">
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        setIsNew(true);
                      }}
                      style={{
                        background: isNew === true ? "#ff8800" : "#fff",
                        border: isNew === true ? "none" : "0.2px solid gray",
                        color: isNew === true ? "#fff" : "black",
                        marginRight: "20px",
                      }}
                    >
                      Mới
                    </button>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        setIsNew(false);
                      }}
                      style={{
                        background: isNew === false ? "#ff8800" : "#fff",
                        border: isNew === false ? "none" : "0.2px solid gray",
                        color: isNew === false ? "#fff" : "black",
                        marginRight: "20px",
                      }}
                    >
                      Đã sử dụng
                    </button>
                  </div>

                  <input
                    placeholder="Giá"
                    value={price}
                    type="number"
                    min={1}
                    max={1000000000}
                    required
                    onChange={(e) => setPrice(e.target.value)}
                    className="gia"
                  />
                  <input
                    placeholder="Tiêu đề"
                    value={title}
                    required
                    onChange={(e) => setTitle(e.target.value)}
                    className="gia"
                  />
                  <textarea
                    placeholder="Mô tả chi tiết"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="gia1"
                    style={{ marginBottom: "30px" }}
                  />
                  <h4>Về người bán</h4>
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
                  {image.trim() !== "" &&
                  image1.trim() !== "" &&
                  image2.trim() !== "" &&
                  price.trim() !== "" &&
                  title.trim() !== "" &&
                  description.trim() !== "" &&
                  city.trim() !== "" &&
                  district.trim() !== "" &&
                  ward.trim() !== "" ? (
                    <button
                      type="submit"
                      className="sup"
                      style={{ borderRadius: "5px" }}
                    >
                      Đăng tin
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="sup"
                      disabled
                      style={{ borderRadius: "5px" }}
                    >
                      Đăng tin
                    </button>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NewsScreen;
