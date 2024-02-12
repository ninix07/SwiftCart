import React, { Fragment, useEffect, useState } from "react";
import Carousel from "react-material-ui-carousel";
import "./styles/ProductDetails.scss";
import { useSelector, useDispatch } from "react-redux";
import { clearError, getProductDetails } from "../../actions/productAction";
import { useParams } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import ReviewCard from "./ReviewCard.js";
import Loader from "../layout/loader/Loader";
import { useAlert } from "react-alert";
import MetaData from "../layout/metaData";
import { addItemsToCart } from "../../actions/cartAction.js";
const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const alert = useAlert();
  const [quantity, setQuantity] = useState(1);
  const { loading, product, error } = useSelector(
    (state) => state.productDetails
  );
  const increaseQuantity = () => {
    if (product.stock <= quantity) return;
    const temp_quantity = quantity + 1;
    setQuantity(temp_quantity);
  };
  const decreaseQuantity = () => {
    if (quantity <= 1) return;
    const temp_quantity = quantity - 1;
    setQuantity(temp_quantity);
  };
  const addToCartHandler = () => {
    dispatch(addItemsToCart(id, quantity));
    alert.success("Item has been added to cart successfully.");
  };
  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearError());
    }
    dispatch(getProductDetails(id));
  }, [dispatch, id, alert, error]);
  const options = {
    value: product.rating,
    count: 5,
    edit: false,
    isHalf: true,
    color: "gray",
    activeColor: "tomato",
    size: window.innerWidth < 768 ? 20 : 22,
    starSpacing: "0",
    className: "customStars",
  };

  return (
    <Fragment>
      <MetaData title={product.name} />
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <div className="productDetails">
            <div className="Carousel">
              <Carousel>
                {product.images &&
                  product.images.map((item, i) => (
                    <div className="CarouselImageCenterd">
                      <img
                        className="CarouselImage"
                        key={item.url}
                        src={item.url}
                        alt={`${i}Slide`}
                      />
                    </div>
                  ))}
              </Carousel>
            </div>
            <div>
              <div className="detailsBlock-1">
                <h2>{product.name}</h2>
                <p>#{product._id}</p>
              </div>
              <div className="detailsBlock-2">
                <div className="stars-container">
                  <ReactStars {...options} />
                </div>

                <span className="reviewsNo">
                  ({product.numOfReviews} reviews)
                </span>
              </div>
              <div className="detailsBlock-3">
                <h1>Rs.{product.price}</h1>
                <div className="detailsBlock-3-1">
                  <div className="detailsBlock-3-1-1">
                    <button onClick={decreaseQuantity}>-</button>
                    <input readOnly value={quantity} type="number" />
                    <button onClick={increaseQuantity}>+</button>
                  </div>
                  <button onClick={addToCartHandler}>Add to Cart</button>
                </div>
                <p>
                  Status:
                  <b className={product.Stock < 1 ? "redColor" : "greenColor"}>
                    {product.Stock < 1 ? "Out Of Stock" : "InStock"}
                  </b>
                </p>
              </div>
              <div className="detailsBlock-4">
                Description :<p>{product.description}</p>
              </div>
              <button className="submitReview">Submit Review</button>
            </div>
          </div>
          <h3 className="reviewsHeading">REVIEWS</h3>
          {product.reviews && product.reviews[0] ? (
            <div className="reviews">
              {product.reviews &&
                product.reviews.map((review) => <ReviewCard review={review} />)}
            </div>
          ) : (
            <p className="noReviews">No Reviews Yet</p>
          )}
        </Fragment>
      )}
    </Fragment>
  );
};

export default ProductDetails;
