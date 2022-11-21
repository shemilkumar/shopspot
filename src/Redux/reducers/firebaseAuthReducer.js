import { ActionTypes } from "../constants/actionTypes";

const initialState = {
  isLoading: false,
  isError: false,
  allProducts: [],
  isSelectedLoading: false,
  isSelectedError: false,
  selectedProduct: {},
  user: {},
  uid: "",
  profilepic: "",
  sellProductByUser: [],
  sellAllProducts: [],
};

export const firebaseAuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_UID:
      return { ...state, uid: action.payload };
      break;

    case ActionTypes.SET_USER:
      return { ...state, user: action.payload };
      break;

    case ActionTypes.ADD_PROFILE_PIC:
      return { ...state, imageUrl: action.payload };
      break;

    case ActionTypes.SET_SELL_PRODUCTS_BY_USER:
      return { ...state, sellProductByUser: action.payload };
      break;

    case ActionTypes.SET_SELL_PRODUCTS:
      return { ...state, sellAllProducts: action.payload };
      break;

    default:
      return state;
      break;
  }
};
