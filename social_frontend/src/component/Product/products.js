import React, { Fragment, useEffect } from "react";
import "./styles/products.scss";
import { clearError, getProduct } from "../../actions/productAction";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Loader from "../layout/loader/Loader";
import ProductCard from "../Home/productCard";
const Products = () => {
  const dispatch = useDispatch();
  const match = useParams();
  const { products, loading, error, productCount } = useSelector(
    (state) => state.products
  );
  console.log(`match is ${match}`);
  const keyword = match.keyword;
  console.log(`keyword is ${keyword}`);
  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearError());
    }
    dispatch(getProduct(keyword));
  }, [dispatch, keyword]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <h2 className="productsHeading">Products</h2>
          <div className="products">
            {products &&
              products.map((product) => (
                <ProductCard product={product} key={product._id} />
              ))}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Products;
