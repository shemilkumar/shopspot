import { api } from "../Constants/constants";
import { useDispatch, useSelector } from "react-redux";
import { setProductsAction } from "../Redux/actions/productActions";
import { useEffect } from "react";

function useFetchAllProducts() {
  // REDUX
  const dispatch = useDispatch();
  const products = useSelector((state) => state.allProducts.allProducts);

  useEffect(() => {
    // CHEKCING API CALLED OR NOT
    if (products.length === 0) {
      api
        .get("/")
        .then((response) => {
          // STORING PRODUCTS IN REDUX STORE
          dispatch(setProductsAction(response.data.products));
        })
        .catch((err) => console.log(err));
    }
  }, []);

  return products;
}

export default useFetchAllProducts;
