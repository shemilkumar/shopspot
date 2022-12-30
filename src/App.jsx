import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeLogic from "./Pages/Products/ProductsLogic";
import ProductDetailLogic from "./Pages/Product/ProductDetailLogic";
import SignUpLogic from "./Pages/SignUp/signUpLogic";
import LoginLogic from "./Pages/Login/loginLogic";
import CartLogic from "./Pages/Cart/cartLogic";
import ProfileLogic from "./Pages/Profile/profileLogic";
import SetProfileLogic from "./Pages/SetProfile/setProfileLogic";
import SellPageLogic from "./Pages/SellPage/sellPageLogic";
import HomePageLogic from "./Pages/Home/HomePageLogic";
import PageNotFoundError from "./Errors/PageNotFoundError";
import NetworkError from "./Errors/NetworkError";

function App() {
  return (
    <Router>
      <Routes>
        {["/", "home"].map((path, key) => (
          <Route key={key} path={path} element={<HomePageLogic />} />
        ))}

        <Route path="/products" element={<HomeLogic />} />
        <Route path="/products/:category" element={<HomeLogic />} />

        <Route path="/product/:id" element={<ProductDetailLogic />} />

        <Route path="/cart" element={<CartLogic />} />

        <Route path="/profile" element={<ProfileLogic />} />
        <Route path="/profile/:userUid" element={<ProfileLogic />} />

        <Route path="/set-profile" element={<SetProfileLogic />} />
        <Route path="/sell" element={<SellPageLogic />} />

        <Route path="/signup" element={<SignUpLogic />} />
        <Route path="/login" element={<LoginLogic />} />

        <Route path="/networkError" element={<NetworkError />} />

        <Route path="*" element={<PageNotFoundError />} />
      </Routes>
    </Router>
  );
}

export default App;
