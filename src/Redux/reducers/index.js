import { combineReducers } from "redux";
import {
  productReducer,
  selectedProductReducer,
  removeSelected,
} from "./productReducer";

const reducers = combineReducers({
  allProducts: productReducer,
  selectedProduct: selectedProductReducer,
  removeSelected,
});

export default reducers;
