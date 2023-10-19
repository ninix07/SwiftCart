import React from "react";
import ReactStars from "react-rating-stars-component";
import profilePng from "../../image/Profile.png";
import "./styles/reviewCard.scss";
const ReviewCard = ({ review }) => {
  const options = {
    value: review.rating,
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
    <div className="reviewCard">
      <img src={profilePng} alt="User" />
      <p>{review.name}</p>
      <ReactStars {...options} />
      <span>{review.comment}</span>
    </div>
  );
};

export default ReviewCard;
