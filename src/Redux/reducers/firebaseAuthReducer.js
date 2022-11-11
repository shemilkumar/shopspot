import { ActionTypes } from "../constants/actionTypes";

const initialState = {
  isLoading: false,
  isError: false,
  allProducts: [],
  isSelectedLoading: false,
  isSelectedError: false,
  selectedProduct: {},
  uid: "",
};

export const firebaseAuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_UID:
      return { ...state, uid: action.payload };
      break;

    default:
      return state;
      break;
  }
};
