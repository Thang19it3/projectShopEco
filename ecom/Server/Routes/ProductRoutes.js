import express from "express";
import asyncHandler from "express-async-handler";
import Product from "./../Models/Productblog.js";
import { protect, admin } from "../Middleware/AuthMiddleware.js";

const productRoute = express.Router();

// get all product
productRoute.get(
  "/",
  asyncHandler(async (req, res) => {
    const keyword = req.query.keyword
      ? {
          name: {
            $regex: req.query.keyword,
            $options: "i",
          },
        }
      : {};
    const products = await Product.find({
      ...keyword,
    });
    res.json(products);
  })
);

// get single product
productRoute.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.json(product);
    } else {
      res.status(404);
      throw new Error("Product not Found");
    }
  })
);

// create product
productRoute.post(
  "/",
  asyncHandler(async (req, res) => {
    const {
      userId,
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
      ward,
      isShow,
      isAccept,
    } = req.body;

    const product = new Product({
      userId,
      category,
      title,
      image,
      imageList: [image, image1, image2],
      description,
      price,
      isNew,
      city,
      district,
      ward,
      isShow,
      isAccept,
    });
    if (product) {
      const createProduct = await product.save();
      res.status(201).json(createProduct);
    } else {
      res.status(400);
      throw new Error("Invalid");
    }
  })
);

productRoute.get(
  "/users/:id",
  asyncHandler(async (req, res) => {
    const product = await Product.find({ userId: req.params.id }).exec();
    if (product) {
      res.json(product);
    } else {
      res.status(404);
      throw new Error("Product not found");
    }
  })
);

productRoute.put(
  "/update-status",
  asyncHandler(async (req, res) => {
    const blog = await Product.findById(req.body.id);
    if (blog) {
      blog.isAccept = req.body.status;
      const blogupdated = await blog.save();
      res.json(blogupdated);
    } else {
      res.status(404);
      throw new Error("Blog not found");
    }
  })
);

productRoute.put(
  "/update-status-show",
  asyncHandler(async (req, res) => {
    const blog = await Product.findById(req.body.id);
    if (blog) {
      blog.isShow = req.body.status;
      const blogupdated = await blog.save();
      res.json(blogupdated);
    } else {
      res.status(404);
      throw new Error("Blog not found");
    }
  })
);

productRoute.put(
  "/update-sold",
  asyncHandler(async (req, res) => {
    const blog = await Product.findById(req.body.id);
    if (blog) {
      blog.isSold = req.body.status;
      const blogupdated = await blog.save();
      res.json(blogupdated);
    } else {
      res.status(404);
      throw new Error("Blog not found");
    }
  })
);

productRoute.put(
  "/update-blog",
  asyncHandler(async (req, res) => {
    const blog = await Product.findById(req.body.id);
    if (blog) {
      blog.category = req.body.category || blog.category;
      blog.isNew = req.body.isNew || blog.isNew;
      blog.price = req.body.price || blog.price;
      blog.title = req.body.title || blog.title;
      blog.description = req.body.description || blog.description;
      blog.city = req.body.city || blog.city;
      blog.district = req.body.district || blog.district;
      blog.ward = req.body.ward || blog.ward;
      blog.isAccept = 0;
      blog.image = req.body.image || blog.image;
      blog.imageList = [
        req.body.image || blog.image,
        req.body.image1 || blog.imageList[1],
        req.body.image2 || blog.imageList[2],
      ];
      const blogupdated = await blog.save();
      res.json(blogupdated);
    } else {
      res.status(404);
      throw new Error("Blog not found");
    }
  })
);

export default productRoute;
