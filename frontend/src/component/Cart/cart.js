import React, { Fragment } from "react";
import "./styles/cartStyles.scss";
import CartItemCard from "./CartItemCard";
import { useSelector, useDispatch } from "react-redux";
import { addItemsToCart, removeItemsFromCart } from "../../actions/cartAction";
import { useNavigate } from "react-router-dom";
import MetaData from "../layout/metaData";
const Cart = () => {
  const dispatch = useDispatch();
  const history = useNavigate();
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
  const removeCard = (id) => {
    dispatch(removeItemsFromCart(id));
  };
  const checkOutHandler = () => {
    history("/login?redirect=shipping");
  };
  return (
    <Fragment>
      <MetaData title="Cart" />
      <div className="cartPage">
        <div className="cartHeader">
          <p>Product</p>
          <p>Quantity</p>
          <p>Subtotal</p>
        </div>
        {cartItems.length === 0 ? (
          <div className="noProduct">
            <p>No Items in Cart. Please Add Some.</p>
            <button
              onClick={() => {
                history("/products");
              }}
            >
              Products
            </button>
          </div>
        ) : (
          <Fragment>
            {cartItems &&
              cartItems.map((item) => (
                <div className="cartContainer" key={item.id}>
                  <CartItemCard item={item} removeCard={removeCard} />
                  <div className="cartInput">
                    <button
                      onClick={() =>
                        decreaseQuantity(item.product, item.quantity)
                      }
                    >
                      -
                    </button>
                    <input type="number" value={item.quantity} readOnly />
                    <button
                      onClick={() =>
                        increaseQuantity(
                          item.product,
                          item.quantity,
                          item.stock
                        )
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
                <p>{`Rs.${cartItems.reduce(
                  (acc, item) => acc + item.quantity * item.price,
                  0
                )}`}</p>
              </div>
              <div></div>
              <div className="checkOut">
                <button onClick={checkOutHandler}>Check Out</button>
              </div>
            </div>
          </Fragment>
        )}
      </div>
    </Fragment>
  );
};

export default Cart;
