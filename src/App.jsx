// import Home from " Home/Home";
import { BrowserRouter as Router,
  Routes,
  Route, } from "react-router-dom";
import HomeLogic from "./Pages/Home/HomeLogic";
import ProductDetailLogic from "./Pages/Product/ProductDetailLogic";


function App() {

  return (
    <Router>
      <Routes>
      <Route exact path="/" element={<HomeLogic />} />
      {/* <Route exact path="/profile" element={<Home />} /> */}
      <Route exact path="/product/:id" element={<ProductDetailLogic />} />
      </Routes>
    </Router>
  )
}

export default App
