import React from "react";
import "./styles/CartItemCard.scss";
import { Link } from "react-router-dom";
const CartItemCard = ({ item, removeCard }) => {
  return (
    <div className="CartItemCard">
      <img src={item.image.url} alt="" />
      <div>
        <Link to={`/product/${item.product}`}>{item.name}</Link>
        <span>{`Price: Rs.${item.price}`}</span>
        <p onClick={() => removeCard(item.product)}>Remove</p>
      </div>
    </div>
  );
};

export default CartItemCard;
