import React, { Fragment, useEffect } from "react";
import "./styles/products.scss";
import { clearError, getProduct } from "../../actions/productAction";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Loader from "../layout/loader/Loader";
import ProductCard from "../Home/productCard";
import Pagination from "react-js-pagination";
import { useState } from "react";
import Slider from "@material-ui/core/Slider";
import { Typography } from "@material-ui/core";
import { useAlert } from "react-alert";
import MetaData from "../layout/metaData";
const categories = [
  "Laptop",
  "Footwear",
  "Bottom",
  "Tops",
  "Attire",
  "Camera",
  "SmartPhones",
];
const Products = () => {
  const dispatch = useDispatch();
  const match = useParams();
  const alert = useAlert();
  const [currentPage, setCurrentPage] = useState(1);
  const [price, setPrice] = useState([0, 25000]);
  const [category, setCategory] = useState("");
  const {
    products,
    loading,
    error,
    resultPerPage,
    productCount,
    filteredProductsCount,
  } = useSelector((state) => state.products);
  const setCurrentPageNo = (e) => {
    setCurrentPage(e);
  };
  const priceHandler = (event, newPrice) => {
    setPrice(newPrice);
  };
  const keyword = match.keyword;
  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearError());
    }
    dispatch(getProduct(keyword, currentPage, price, category));
  }, [dispatch, keyword, currentPage, error, price, category]);
  let count = filteredProductsCount;
  return (
    <Fragment>
      <MetaData title="Product" />
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <h2 className="productsHeading">Products</h2>
          <div className="productPage">
            <div className="filterBox">
              <h1>Filter</h1>
              <Typography>Price</Typography>
              <Slider
                value={price}
                onChange={priceHandler}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
                min={0}
                max={25000}
              />
              <Typography>Categories</Typography>
              <ul className="categoryBox">
                {categories.map((category) => (
                  <li
                    className="category-link"
                    key={category}
                    onClick={() => setCategory(category)}
                  >
                    {category}
                  </li>
                ))}
              </ul>
            </div>
            <div className="products">
              {products &&
                products.map((product) => (
                  <ProductCard product={product} key={product._id} />
                ))}
            </div>
          </div>
          {console.log(`Filtered Product COunt :${count}`)}
          {resultPerPage < count && (
            <div className="paginationBox">
              <Pagination
                activePage={currentPage}
                itemsCountPerPage={resultPerPage}
                totalItemsCount={count}
                onChange={setCurrentPageNo}
                nextPageText="Next"
                prevPageText="Prev"
                lastPageText="Last"
                firstPageText="1st"
                itemClass="page-item"
                linkClass="page-link"
                activeClass="pageItemActive"
                activeLinkClass="pageLinkActive"
                pageRangeDisplayed={4}
              />
            </div>
          )}
        </Fragment>
      )}
    </Fragment>
  );
};

export default Products;
