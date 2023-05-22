import asyncHandler from "express-async-handler";
import express from "express";
import Order from "./../Models/ordermodel.js";

const orderRoute = express.Router();

// get order by buyerId
orderRoute.get(
  "/buyer/:id",
  asyncHandler(async (req, res) => {
    const order = await Order.find({ buyerId: req.params.id });
    if (order) {
      res.json(order);
    } else {
      res.status(404);
      throw new Error("order not found");
    }
  })
);

// get order by sellerid
orderRoute.get(
  "/seller/:id",
  asyncHandler(async (req, res) => {
    const order = await Order.find({ "seller._id": req.params.id });
    if (order) {
      res.json(order);
    } else {
      res.status(404);
      throw new Error("order not found");
    }
  })
);

// update status order
orderRoute.put(
  "/update-status",
  asyncHandler(async (req, res) => {
    const order = await Order.findById(req.body.id);
    if (order) {
      order.status = req.body.status;
      order.timeReceived = req.body.timeReceived || order.timeReceived;
      const orderupdated = await order.save();
      res.json(orderupdated);
    } else {
      res.status(404);
      throw new Error("order not found");
    }
  })
);

orderRoute.get("/:id", asyncHandler(async (req, res) => {
  const orders = await Order.findById(req.params.id);
  if (orders)
  {
    res.json(orders);
  } else 
  {
    res.status(404);
    throw new Error("Order not found");
  }
}))
// place order
orderRoute.post(
  "/",
  asyncHandler(async (req, res) => {
    const {
      buyerId,
      seller,
      blog,
      name,
      phone,
      city,
      district,
      ward,
      address,
      total,
      note,
      timeCreated,
    } = req.body;
    const order = await Order.create({
      buyerId,
      seller,
      blog,
      name,
      phone,
      city,
      district,
      ward,
      address,
      total,
      note,
      timeCreated,
    });
    if (order) {
      res.status(201).json(order);
    } else {
      res.status(400);
      throw new Error("Fail to create order");
    }
  })
);

//  delete
orderRoute.delete(
  "/delete/:id",
  asyncHandler(async (req, res) => {
    const order = await Order.findByIdAndDelete(req.params.id);
    if (order) {
      const orderupdated = await order.save();
      res.json(orderupdated);
    } else {
      res.status(404);
      throw new Error("order not found");
    }
  })
);

// get order
orderRoute.get("/", asyncHandler( async (req, res) => {
  const order = await Order.find({});
  res.json(order);
}))
export default orderRoute;
