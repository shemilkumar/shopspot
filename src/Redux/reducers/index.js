import { combineReducers } from "redux";
import {
  productReducer,
  selectedProductReducer,
  removeSelected,
} from "./productReducer";
import { firebaseAuthReducer } from "./firebaseAuthReducer";
import { cartReducer } from "./cartReducer";

const reducers = combineReducers({
  allProducts: productReducer,
  selectedProduct: selectedProductReducer,
  removeSelected,
  user: firebaseAuthReducer,
  cart: cartReducer,
});

export default reducers;
