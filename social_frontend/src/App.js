import "./App.css";
import Header from "./component/layout/header/Header.js";
import Footer from "./component/layout/footer/Footer";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Home from "./component/Home/home";
import Loader from "./component/layout/loader/Loader";
function App() {
  return (
    <Router>
    
      <Header />
      <Routes>
        <Route exact path="/" Component={Home} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
