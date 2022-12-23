import React, { useEffect } from "react";
import fetchAllProducts from "../../api/fetchAllProducts";
import Spinner from "../Spinner";
import Home from "./Products";
import { useDispatch, useSelector } from "react-redux";
import firebaseDbService from "../../Firebase/FirebaseDbService";
import { useNavigate, useParams } from "react-router-dom";
import useAuth from "../../Firebase/useAuth";

function HomeLogic() {
  let fullProducts = [];
  const filterCategory = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.allProducts.allProducts);
  const allSellProducts = useSelector((state) => state.user.sellAllProducts);
  const uid = useAuth();

  // const storeCartProduct = (product) => {
  //   uid
  //     ? firebaseDbService.storeCartProducts(product, uid)
  //     : navigate("/login");
  // };

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

  // console.log(fullProducts);

  return (
    <>
      {fullProducts.length === 0 ? (
        <Spinner />
      ) : (
        <Home
          wholeProducts={fullProducts}
          // storeCartProduct={storeCartProduct}
          filterCategory={filterCategory.category}
        />
      )}
    </>
  );
}

export default HomeLogic;
