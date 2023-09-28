import React, { Fragment } from "react";
import { CgMouse } from "react-icons/cg";
import "./styles/home.scss";
const Home = () => {
  return (
    <Fragment>
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
    </Fragment>
  );
};

export default Home;
