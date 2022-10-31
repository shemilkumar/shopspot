import { ActionTypes } from "../constants/actionTypes";

const initialState = {
  isLoading: false,
  isError: false,
  allProducts: [],
  isSelectedLoading: false,
  isSelectedError: false,
  selectedProduct: {},
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, allProducts: action.payload };
      break;

    default:
      return state;
      break;
  }
};

export const selectedProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SELECTED_PRODUCT:
      return { ...state, selectedProduct: action.payload };
      break;

    default:
      return state;
      break;
  }
};

export const removeSelected = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.REMOVE_SELECTED_PRODUCT:
      return { ...state, selectedProduct: action.payload };
      break;

    default:
      return state;
      break;
  }
};
