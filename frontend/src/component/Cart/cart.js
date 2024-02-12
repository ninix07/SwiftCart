import React, { Fragment } from "react";
import "./styles/cartStyles.scss";
import CartItemCard from "./CartItemCard";
import { useSelector, useDispatch } from "react-redux";
import { addItemsToCart } from "../../actions/cartAction";
const Cart = () => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);
  const increaseQuantity = (id, quantity, stock) => {
    const tempQty = quantity + 1;
    if (stock <= quantity) {
      return;
    }
    dispatch(addItemsToCart(id, tempQty));
  };
  const decreaseQuantity = (id, quantity) => {
    const tempQty = quantity - 1;
    if (quantity <= 1) {
      return;
    }
    dispatch(addItemsToCart(id, tempQty));
  };
  return (
    <Fragment>
      <div className="cartPage">
        <div className="cartHeader">
          <p>Product</p>
          <p>Quantity</p>
          <p>Subtotal</p>
        </div>
        {cartItems &&
          cartItems.map((item) => (
            <div className="cartContainer">
              <CartItemCard item={item} />
              <div className="cartInput">
                <button
                  onClick={() => decreaseQuantity(item.product, item.quantity)}
                >
                  -
                </button>
                <input type="number" value={item.quantity} readOnly />
                <button
                  onClick={() =>
                    increaseQuantity(item.product, item.quantity, item.stock)
                  }
                >
                  +
                </button>
              </div>
              <div className="cartSubtotal">
                {`Rs.${item.quantity * item.price}`}
              </div>
            </div>
          ))}

        <div className="cartTotal">
          <div></div>
          <div className="TotalBox">
            <p>Total Amount</p>
            <p>{`Rs.600`}</p>
          </div>
          <div></div>
          <div className="checkOut">
            <button>Check Out</button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Cart;
