// import Home from " Home/Home";
import { BrowserRouter as Router,
  Routes,
  Route, } from "react-router-dom";
import HomeLogic from "./Pages/Home/HomeLogic";
import ProductDetailLogic from "./Pages/Product/ProductDetailLogic";
import SignUpLogic from "./Pages/SignUp/signUpLogic";
import LoginLogic from "./Pages/Login/loginLogic";


function App() {

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomeLogic />} />
        <Route path="/signup" element={<SignUpLogic />} />
        <Route path="/login" element={<LoginLogic />} />
        <Route path="/cart" element={<LoginLogic />} />
          
        <Route path="/product/:id" element={<ProductDetailLogic />} />
      </Routes>
    </Router>
  )
}

export default App
