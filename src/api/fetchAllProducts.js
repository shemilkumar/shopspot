import { api } from "../Constants/constants";
import { ActionTypes } from "../Redux/constants/actionTypes";

function fetchAllProducts() {
  return async function (dispatch, getState) {
    if (getState().allProducts.allProducts.length === 0) {
      const response = await api.get("/").catch((err) => console.log(err));
      dispatch({
        type: ActionTypes.FETCH_PRODUCTS,
        payload: response.data.products,
      });
    }
  };
}

export default fetchAllProducts;
