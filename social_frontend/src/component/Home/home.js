import React, { Fragment } from "react";
import { CgMouse } from "react-icons/cg";
import "./styles/home.scss";
import Product from "./product.js";
import MetaData from "../layout/metaData";
const product = {
  name: "Blue Shirt",
  images: [
    {
      url: "https://cdn.suitdirect.co.uk/upload/siteimages/large/0070631_031_a.jpg",
    },
  ],
  price: "$3000",
  _id: "adsd",
};
const Home = () => {
  return (
    <Fragment>
      <MetaData title="Ecommerce"/>
      <div className="Banner">
        <p>Welcome to Ecommerce</p>
        <h1>Find Amazing Products Below</h1>
        <a href="#container">
          <button>
            Scroll
            <CgMouse />
          </button>
        </a>
      </div>
      <h2 className="homeHeading">Featured Products</h2>
      <div className="container">
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
      </div>
    </Fragment>
  );
};

export default Home;
