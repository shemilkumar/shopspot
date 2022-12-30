import React, { useEffect } from "react";
import useAuth from "../../Firebase/useAuth";
import fetchAllProducts from "../../api/fetchAllProducts";
import firebaseDbService from "../../Firebase/FirebaseDbService";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import Spinner from "../Spinner";
import Home from "./Products";

function HomeLogic() {
  let fullProducts = [];
  const filterCategory = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.allProducts.allProducts);
  const allSellProducts = useSelector((state) => state.user.sellAllProducts);
  const uid = useAuth();

  useEffect(() => {
    dispatch(fetchAllProducts());
    dispatch(firebaseDbService.getAllSellProducts());
  }, [uid]);

  if (allSellProducts && products) {
    if (allSellProducts.length !== 0 && products.length !== 0) {
      fullProducts = [...allSellProducts, ...products];
    } else if (products.length !== 0 && allSellProducts.length === 0) {
      fullProducts = [...products];
    }
  }

  return (
    <>
      {fullProducts.length === 0 ? (
        <Spinner />
      ) : (
        <Home
          wholeProducts={fullProducts}
          filterCategory={filterCategory.category}
        />
      )}
    </>
  );
}

export default HomeLogic;
