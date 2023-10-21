import "./App.css";
import Header from "./component/layout/header/Header.js";
import Footer from "./component/layout/footer/Footer";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Home from "./component/Home/home";
import ProductDetails from "./component/Product/ProductDetails.js";
import Products from "./component/Product/products.js";
import Search from "./component/Search/Search.js";
import Login from "./component/User/login";
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" exact Component={Home} />
        <Route exact path="/product/:id" Component={ProductDetails} />
        <Route exact path="/products" Component={Products} />
        <Route exact path="/products/:keyword" Component={Products} />
        <Route exact path="/search" Component={Search} />
        <Route exact path="/login" Component={Login} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
