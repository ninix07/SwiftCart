import "./App.css";
import Header from "./component/layout/header/Header.js";
import Footer from "./component/layout/footer/Footer";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Home from "./component/Home/home";
import ProductDetails from "./component/Product/ProductDetails.js";
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route path="/product/:id" Component={ProductDetails} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
