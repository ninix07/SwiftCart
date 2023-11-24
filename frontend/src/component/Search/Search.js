import React, { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles/Search.scss";
import MetaData from "../layout/metaData";
import ProtectedRoute from "../Routes/ProtectedRoute";
const Search = () => {
  const [keyword, setKeyword] = useState("");
  let history = useNavigate();
  const searchSubmitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      history(`/products/${keyword}`);
    } else {
      history(`/products`);
    }
  };
  return (
    <Fragment>
      <MetaData title="Search" />
      <form className="searchBox" onSubmit={searchSubmitHandler}>
        <input
          type="text"
          placeholder="Search a product"
          onChange={(e) => setKeyword(e.target.value)}
        />
        <input type="submit" value="Search" />
      </form>
    </Fragment>
  );
};

export default Search;
