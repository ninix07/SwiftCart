import React from "react";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import "./styles/product.scss";

const ProductCard = ({ product }) => {
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
    <Link className="product" to={`/product/${product._id}`}>
      <img src={product.images[0].url} alt="" />
      <p>{product.name}</p>
      <div className="product-review">
        <div className="stars-container">
          <ReactStars {...options} />
        </div>

        <span className="reviewsNo">({product.numOfReviews} reviews)</span>
      </div>
      <span className="price">{`रू${product.price}`}</span>
    </Link>
  );
};

export default ProductCard;
