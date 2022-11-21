// import Home from " Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeLogic from "./Pages/Home/HomeLogic";
import ProductDetailLogic from "./Pages/Product/ProductDetailLogic";
import SignUpLogic from "./Pages/SignUp/signUpLogic";
import LoginLogic from "./Pages/Login/loginLogic";
import CartLogic from "./Pages/Cart/cartLogic";
import ProfileLogic from "./Pages/Profile/profileLogic";
import SetProfileLogic from "./Pages/SetProfile/setProfileLogic";
import SellPageLogic from "./Pages/SellPage/sellPageLogic";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomeLogic />} />
        <Route path="/signup" element={<SignUpLogic />} />
        <Route path="/login" element={<LoginLogic />} />
        <Route path="/cart" element={<CartLogic />} />
        <Route path="/profile" element={<ProfileLogic />} />
        <Route path="/set-profile" element={<SetProfileLogic />} />
        <Route path="/sell" element={<SellPageLogic />} />

        <Route path="/product/:id" element={<ProductDetailLogic />} />
      </Routes>
    </Router>
  );
}

export default App;
