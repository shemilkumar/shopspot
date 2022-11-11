import { combineReducers } from "redux";
import {
  productReducer,
  selectedProductReducer,
  removeSelected,
} from "./productReducer";

import { firebaseAuthReducer } from "./firebaseAuthReducer";

const reducers = combineReducers({
  allProducts: productReducer,
  selectedProduct: selectedProductReducer,
  removeSelected,
  user: firebaseAuthReducer,
});

export default reducers;
