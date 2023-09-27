import "./App.css";
import Header from "./component/layout/header/Header.js";
import Footer from "./component/layout/footer/Footer";
import { BrowserRouter as Router } from "react-router-dom";
function App() {
  return (
    <Router>
      <Header />
      <Footer />
    </Router>
  );
}

export default App;
