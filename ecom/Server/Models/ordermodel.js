import mongoose from "mongoose";
const getDate = () => {
  let ts = Date.now();
  let date_ob = new Date(ts);
  let date = date_ob.getDate();
  let month = date_ob.getMonth() + 1;
  let year = date_ob.getFullYear();
  return date + "/" + month + "/" + year;
};
const orderSchema = mongoose.Schema(
  {
    buyerId: {
      type: String,
      require: true,
    },
    seller: {
      type: Object,
      require: true,
    },
    blog: {
      type: Object,
      require: true,
    },
    name: {
      type: String,
      require: true,
    },
    phone: {
      type: String,
      require: true,
    },
    city: {
      type: String,
      require: true,
    },
    district: {
      type: String,
      require: true,
    },
    ward: {
      type: String,
      require: true,
    },
    address: {
      type: String,
      require: true,
    },
    total: {
      type: Number,
      require: true,
    },
    note: {
      type: String,
      default: null,
    },
    // chua xac nhan, xac nhan, tu choi, dang giao, da giao
    status: {
      type: String,
      default: "Chờ xác nhận",
    },
    timeReceived: {
      type: String,
      default: null,
    },
    timeCreated: {
      type: String,
      require: true,
    },
    createdAt: {
      type: String,
      default: getDate(),
    },
  },
  {
    timestamps: false,
  }
);

const Order = mongoose.model("Order", orderSchema);
export default Order;
