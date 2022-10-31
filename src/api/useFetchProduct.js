import { api } from "../Constants/constants";
import { useDispatch, useSelector } from "react-redux";
import {
  selectedProductAction,
  removeSelectedAction,
} from "../Redux/actions/productActions";
import { useEffect } from "react";

function useFetchProduct(id) {
  // REDUX
  const dispatch = useDispatch();
  const selectedProduct = useSelector(
    (state) => state.selectedProduct.selectedProduct
  );

  // console.log(selectedProduct);

  useEffect(() => {
    // CHEKCING API CALLED OR NOT
    if (
      Object.keys(selectedProduct).length === 0 ||
      selectedProduct.id !== +id
    ) {
      dispatch(removeSelectedAction());

      api
        .get(`/${id}`)
        .then((response) => {
          // STORING PRODUCTS IN REDUX STORE
          dispatch(selectedProductAction(response.data));
        })
        .catch((err) => console.log(err));
    }
  }, []);

  return selectedProduct;
}

export default useFetchProduct;
