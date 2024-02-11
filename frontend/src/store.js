import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  productdetailReducer,
  productReducer,
} from "./reducers/productReducer";
import { forgotPasswordReducer, userReducer } from "./reducers/userReducer";
import { profileReducer } from "./reducers/profileReducer";
import { cartReducer } from "./reducers/cartReducer";

const reducer = combineReducers({
  products: productReducer,
  productDetails: productdetailReducer,
  user: userReducer,
  profile: profileReducer,
  forgotPassword: forgotPasswordReducer,
  cart: cartReducer,
});
let initialState = {
  cart: {
    cartItems: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],
  },
};
const midleware = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...midleware))
);

export default store;
