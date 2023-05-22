import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Toast from "./../LoandingError/Toast";
import Message from "./../LoandingError/Error";
import Loading from "../LoandingError/Loading";
import { toast } from "react-toastify";
import { updateProfile } from "./../../Redux/Actions/UserActions";
import supabase from "./../../screens/supabage";

const ProfileTabs = ({ url, size }) => {
  const [avatarUrl, setAvatarUrl] = useState(null);
  const [uploading, setUploading] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [avatar, setAvatar] = useState("");

  const toastId = React.useRef(null);

  const ToastObject = {
    pauseOnFocusLoss: false,
    draggable: false,
    pauseOnHover: false,
    autoClose: 2000,
  };

  const dispatch = useDispatch();

  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;

  const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
  const { loading: updateLoading } = userUpdateProfile;

  useEffect(() => {
    if (url) downloadImage(url);
  }, [url]);

  const downloadImage = async (path) => {
    try {
      const { data, error } = await supabase.storage
        .from("ecomme")
        .download(path);
      if (error) {
        throw error;
      }
      const url = URL.createObjectURL(data);
      setAvatarUrl(url);
    } catch (error) {
      console.log("Error downloading image: ", error.message);
    }
  };

  const uploadAvatar = async (event) => {
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

      if (uploadError) {
        throw uploadError;
      }

      const linkSu =
        `https://zpplzucbznkfhzthtbfh.supabase.co/storage/v1/object/public/ecomme/` +
        filePath;
      setAvatar(
        `https://zpplzucbznkfhzthtbfh.supabase.co/storage/v1/object/public/ecomme/` +
          filePath
      );
    } catch (error) {
      alert(error.message);
    } finally {
      setUploading(false);
    }
  };

  useEffect(() => {
    if (user) {
      setName(user.name);
      setEmail(user.email);
      setPhone(user.phone);
    }
  }, [dispatch, user]);

  const submitHandler = (e) => {
    e.preventDefault();

    if (password !== confirmpassword) {
      if (!toast.isActive(toastId.current)) {
        toastId.current = toast.error("Mật khẩu không khớp", ToastObject);
      }
    } else {
      dispatch(
        updateProfile({ id: user._id, name, email, password, avatar, phone })
      );
      if (!toast.isActive(toastId.current)) {
        toastId.current = toast.success("Cập nhập thành công", ToastObject);
      }
    }
  };

  return (
    <>
      <Toast />
      {error && <Message variant="alert-danger">{error}</Message>}
      {loading && <Loading />}
      {updateLoading && <Loading />}
      <form className="row form-container" onSubmit={submitHandler}>
        <div
          style={{
            background: "#fff",
            paddingTop: "40px",
            paddingBottom: "40px",
            paddingLeft: "20px",
            marginLeft: "20px",
          }}
        >
          <div className="col-md-12">
            <div className="form">
              <label for="account-fn">Họ và tên</label>
              <input
                className="form-control"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>

          <div className="col-md-12 mt-3">
            <div className="form">
              <label for="account-email">Email </label>
              <input
                className="form-control"
                type="email"
                required
                disabled
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className="col-md-12 mt-3">
            <div className="form">
              <label for="account-email">Số điện thoại</label>
              <input
                className="form-control"
                type="text"
                required
                disabled
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
          </div>

          <div className="col-md-12 mt-3">
            <div className="form">
              <label for="account-pass">Mật khẩu mới</label>
              <input
                className="form-control"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div className="col-md-12 mt-3">
            <div className="form">
              <label for="account-pass">Xác nhận mật khẩu</label>
              <input
                className="form-control"
                type="password"
                required
                value={confirmpassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
          </div>
          {/* <div
            style={{ width: size, marginLeft: "20px", marginTop: "20px" }}
            aria-live="polite"
          >
            <img
              src={
                avatarUrl ? avatarUrl : `https://place-hold.it/${size}x${size}`
              }
              alt={avatarUrl ? "Avatar" : "No image"}
              className="avatar image"
              style={{ height: size, width: size }}
            />
            {uploading ? (
              "Uploading..."
            ) : (
              <>
                <label className="button primary block" htmlFor="single">
                  Upload an avatar
                </label>
                <div className="visually-hidden">
                  <input
                    type="file"
                    id="single"
                    accept="image/*"
                    onChange={uploadAvatar}
                    disabled={uploading}
                  />
                </div>
              </>
            )}
          </div> */}

          <button
            type="submit"
            className=""
            style={{
              border: "none",
              background: "#FF8800",
              padding: "10px 20px",
              marginTop: "20px",
              marginLeft: "20px",
              borderRadius: "10px",
            }}
          >
            Cập nhập thông tin
          </button>
        </div>
      </form>
    </>
  );
};

export default ProfileTabs;
