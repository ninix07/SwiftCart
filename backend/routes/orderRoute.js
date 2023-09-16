const express = require("express");
const { isUserAuthenticated } = require("../middleware/auth");
const { newOrder } = require("../controllers/ordercontroller");
const router = express.Router();

router.route("/order/new").post(isUserAuthenticated, newOrder);
module.exports = router;
