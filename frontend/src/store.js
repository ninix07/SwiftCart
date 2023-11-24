import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  productdetailReducer,
  productReducer,
} from "./reducers/productReducer";
import { userReducer } from "./reducers/userReducer";
import { profileReducer } from "./reducers/profileReducer";

const reducer = combineReducers({
  products: productReducer,
  productDetails: productdetailReducer,
  user: userReducer,
  profile: profileReducer,
});
let initialState = {};
const midleware = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...midleware))
);

export default store;
