const catchAsyncError = require("../middleware/catchAsyncError");
const Order = require("../models/orderModel");
const Product = require("../models/productModels");
const ErrorHandler = require("../utils/errorHandler");

exports.newOrder = catchAsyncError(async (req, res, next) => {
  const {
    shippingInfo,
    orderItems,
    paymentInfo,
    ItemPrice,
    taxPrice,
    shippingPrice,
    TotalPrice,
  } = req.body;

  const order = await Order.create({
    shippingInfo,
    orderItems,
    paymentInfo,
    ItemPrice,
    taxPrice,
    shippingPrice,
    TotalPrice,
    paidAt: Date.now(),
    user: req.user._id,
  });
  res.status(201).json({
    success: true,
    order,
  });
});
