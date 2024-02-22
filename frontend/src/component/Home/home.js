import React, { Fragment, useEffect } from "react";
import { GiMouse } from "react-icons/gi";
import "./styles/home.scss";
import ProductCard from "./productCard.js";
import MetaData from "../layout/metaData";
import { clearError, getProduct } from "../../actions/productAction";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../layout/loader/Loader";
import { useAlert } from "react-alert";
import background from "../../image/background.png";

const Home = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector((state) => state.products);
  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearError());
    }
    dispatch(getProduct());
  }, [dispatch, error, alert]);
  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="Ecommerce" />
          <div className="homeUpper">
            <div className="Banner">
              <div>
                <h1>WELCOME TO SwiftCart</h1>
                <p>
                  Your one stop <b>shopping</b> solution
                </p>
              </div>
              <div>
                <img src={background} alt="home-image" />
              </div>
            </div>

            <a href="#container">
              <button>
                Scroll to find amazing products
                <GiMouse className="icon" />
              </button>
            </a>
          </div>
          <h2 className="homeHeading">Featured Products</h2>
          <div className="container" id="container">
            {products &&
              products.map((product) => <ProductCard product={product} />)}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Home;
