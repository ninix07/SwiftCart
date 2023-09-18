const express = require("express");
const { isUserAuthenticated, isAdmin } = require("../middleware/auth");
const {
  newOrder,
  getSingleOrder,
  getMyOrders,
  getAllOrders,
  updateOrder,
  deleteOrder,
} = require("../controllers/ordercontroller");
const router = express.Router();

router.route("/order/new").post(isUserAuthenticated, newOrder);
router.route("/order/me").get(isUserAuthenticated, getMyOrders);
router
  .route("/order/:id")
  .get(isUserAuthenticated, isAdmin("admin"), getSingleOrder);
router
  .route("/admin/orders")
  .get(isUserAuthenticated, isAdmin("admin"), getAllOrders);
router
  .route("/admin/order/:id")
  .put(isUserAuthenticated, isAdmin("admin"), updateOrder)
  .delete(
    isUserAuthenticated,
    isAdmin("admin"),
    isUserAuthenticated,
    isAdmin("admin"),
    deleteOrder
  );

module.exports = router;
