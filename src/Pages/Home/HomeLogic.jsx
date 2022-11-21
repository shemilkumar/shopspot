import React, { useEffect } from "react";
import fetchAllProducts from "../../api/fetchAllProducts";
import Spinner from "../Spinner";
import Home from "./Home";
import { useDispatch, useSelector } from "react-redux";
import firebaseDbService from "../../Firebase/FirebaseDbService";
import { useNavigate } from "react-router-dom";
import useAuth from "../../Firebase/useAuth";

function HomeLogic() {
  let fullProducts = [];
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.allProducts.allProducts);
  const allSellProducts = useSelector((state) => state.user.sellAllProducts);
  const uid = useAuth();

  const storeCartProduct = (product) => {
    uid
      ? firebaseDbService.storeCartProducts(product, uid)
      : navigate("/login");
  };

  useEffect(() => {
    dispatch(fetchAllProducts());
    dispatch(firebaseDbService.getAllSellProducts());
    // console.log(products,)
  }, [uid]);

  if (allSellProducts && products) {
    if (allSellProducts.length !== 0 && products.length !== 0) {
      fullProducts = [...allSellProducts, ...products];
    } else if (products.length !== 0 && allSellProducts.length === 0) {
      fullProducts = [...products];
    }
  }

  console.log(products, allSellProducts);

  return (
    <>
      {fullProducts.length === 0 ? (
        <Spinner />
      ) : (
        <Home fullProducts={fullProducts} storeCartProduct={storeCartProduct} />
      )}
    </>
  );
}

export default HomeLogic;
