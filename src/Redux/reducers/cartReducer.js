import { ActionTypes } from "../constants/actionTypes";

const initialState = {
  isLoading: false,
  isError: false,
  allProducts: [],
  isSelectedLoading: false,
  isSelectedError: false,
  selectedProduct: {},
  uid: "",
  cart: [],
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_CART_PRODUCT:
      return { ...state, cart: action.payload };
      break;

    default:
      return state;
      break;
  }
};
