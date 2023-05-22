import mongoose from "mongoose";
const getDate = () => {
  let ts = Date.now();
  let date_ob = new Date(ts);
  let date = date_ob.getDate();
  let month = date_ob.getMonth() + 1;
  let year = date_ob.getFullYear();
  return date + "/" + month + "/" + year;
};
const productblogSchema =  mongoose.Schema(
  {
    userId: {
      type: String,
      require: true,
    },
    category: {
      type: String,
      require: true,
    },
    title: {
      type: String,
      require: true,
    },
    image: {
      type: String,
      require: true,
    },
    imageList: {
      type: Array,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
    price: {
      type: Number,
      require: true,
    },
    isNew: {
      type: Boolean,
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
    isShow: {
      type: Boolean,
      default: true,
    },
    isAccept: {
      type: Number,
      default: 0,
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

const ProductBlog = mongoose.model("ProductBlog", productblogSchema);
export default ProductBlog;
