import React, { useEffect } from "react";
import useFetchProduct from "../../api/useFetchProduct";
import { useNavigate, useParams } from "react-router-dom";
import ProductDetail from "../Product/ProductDetail";
import Spinner from "../Spinner";
import useAuth from "../../Firebase/useAuth";
import { useDispatch, useSelector } from "react-redux";
import FirebaseDbService from "../../Firebase/FirebaseDbService";

function ProductDetailLogic() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const uid = useAuth();
  let selectedProduct = {};

  let sellProduct = useSelector((state) => state.user.singleSellProduct);

  // console.log(parseInt(id));

  if (!isNaN(parseInt(id))) {
    sellProduct = {};
    selectedProduct = useFetchProduct(id);
  }

  useEffect(() => {
    if (isNaN(parseInt(id))) {
      selectedProduct = {};
      dispatch(FirebaseDbService.getSellProduct(id));
    }
  }, []);

  return (
    <div>
      {Object.keys(selectedProduct).length === 0 &&
      Object.keys(sellProduct).length === 0 ? (
        <Spinner />
      ) : (
        <ProductDetail
          product={
            Object.keys(selectedProduct).length === 0
              ? sellProduct
              : selectedProduct
          }
          navigate={navigate}
          uid={uid}
        />
      )}
    </div>
  );
}

export default ProductDetailLogic;
