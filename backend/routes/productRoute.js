const express = require("express");
const {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getSingleProduct,
  createProductReview,
  getAllReviews,
  deleteReview,
} = require("../controllers/productControllers");
const { isUserAuthenticated, isAdmin } = require("../middleware/auth");
const router = express.Router();

router.route("/products").get(getAllProducts);
router
  .route("/products/new")
  .post(isUserAuthenticated, isAdmin("admin"), createProduct);
router
  .route("/products/:id")
  .put(isUserAuthenticated, isAdmin("admin"), updateProduct)
  .delete(isUserAuthenticated, isAdmin("admin"), deleteProduct)
  .get(getSingleProduct);
router.route("/review").put(isUserAuthenticated, createProductReview);
router
  .route("/reviews/")
  .get(getAllReviews)
  .delete(isUserAuthenticated, deleteReview);
module.exports = router;
