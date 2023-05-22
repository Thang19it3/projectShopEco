import express from "express";
import asyncHandler from "express-async-handler";
import User from "./../Models/UserModel.js";
import genegateToken from "../utils/RenegateToken.js";
import { protect, admin } from "../Middleware/AuthMiddleware.js";

const userRouter = express.Router();

// login
userRouter.post(
  "/login",
  asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({
      email,
    });
    if (user && (await user.matchPassword(password))) {
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        isAdmin: user.isAdmin,
        rating: user.rating,
        numReviews: user.numReviews,
        avatar: user.avatar,
        reviews: user.reviews,
        createdAt: user.createdAt,
        token: genegateToken(user._id),
      });
    } else {
      res.status(404);
      throw new Error("Sai thông tin đăng nhập");
    }
  })
);

//register
userRouter.post(
  "/",

  asyncHandler(async (req, res) => {
    const { name, email, phone, password } = req.body;
    const userExits = await User.findOne({ email });
    const phoneExits = await User.findOne({ phone });
    if (userExits && phoneExits) {
      res.status(400);
      throw new Error("Số điện thoại và email bị trùng lặp");
    }
    if (userExits) {
      res.status(400);
      throw new Error("Email bị trùng lặp");
    }
    if (phoneExits) {
      res.status(400);
      throw new Error("Số điện thoại bị trùng lặp");
    }

    const user = await User.create({
      name,
      email,
      phone,
      password,
    });

    if (user) {
      res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        isAdmin: user.isAdmin,
        avatar: user.avatar,
        rating: user.rating,
        numReviews: user.numReviews,
        reviews: user.reviews,
        createdAt: user.createdAt,
        token: genegateToken(user._id),
      });
    } else {
      res.status(400);
      throw new Error("Invalid user data ");
    }
  })
);

// profile
userRouter.get(
  "/profile",
  protect,
  asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id);
    if (user) {
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        isAdmin: user.isAdmin,
        rating: user.rating,
        numReviews: user.numReviews,
        reviews: user.reviews,
        avatar: user.avatar,
        createdAt: user.createdAt,
      });
    } else {
      res.status(404);
      throw new Error("user not found");
    }
  })
);
// update profile
userRouter.put(
  "/profile",
  protect,
  asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id);
    if (user) {
      user.name = req.body.name || user.name;
      if (req.body.password) {
        user.password = req.body.password;
      }
      user.avatar = req.body.avatar || user.avatar;

      const updateUser = await user.save();
      res.json({
        _id: updateUser._id,
        name: updateUser.name,
        email: updateUser.email,
        phone: updateUser.phone,
        isAdmin: updateUser.isAdmin,
        rating: updateUser.rating,
        numReviews: updateUser.numReviews,
        avatar: updateUser.avatar,
        reviews: updateUser.reviews,
        createdAt: updateUser.createdAt,
        token: genegateToken(updateUser._id),
      });
    } else {
      res.status(404);
      throw new Error("user not found");
    }
  })
);

userRouter.get(
  "/seller/profile/:id",
  asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id);
    if (user) {
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        isAdmin: user.isAdmin,
        rating: user.rating,
        numReviews: user.numReviews,
        reviews: user.reviews,
        avatar: user.avatar,
        createdAt: user.createdAt,
      });
    } else {
      res.status(404);
      throw new Error("user not found");
    }
  })
);

// get all user
userRouter.get(
  "/",
  protect,
  admin,
  asyncHandler(async (req, res) => {
    const users = await User.find({});
    res.json(users);
  })
);

export default userRouter;
