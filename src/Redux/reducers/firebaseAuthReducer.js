import { ActionTypes } from "../constants/actionTypes";

const initialState = {
  isLoading: false,
  isError: false,
  allProducts: [],
  isSelectedLoading: false,
  isSelectedError: false,
  selectedProduct: {},
  allUsers: [],
  user: {},
  userProfile: {},
  uid: "",
  profilepic: "",
  sellProductByUser: [],
  sellProductByAnotherUser: [],
  sellAllProducts: [],
  images: [],
  singleSellProduct: {},
};

export const firebaseAuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_UID:
      return { ...state, uid: action.payload };
      break;

    case ActionTypes.SET_USER:
      return { ...state, user: action.payload };
      break;

    case ActionTypes.SET_USER_PROFILE:
      return { ...state, userProfile: action.payload };
      break;

    case ActionTypes.SET_ALL_USERS:
      return { ...state, allUsers: action.payload };
      break;

    case ActionTypes.ADD_IMAGE:
      return { ...state, imageUrl: action.payload };
      break;

    case ActionTypes.ADD_THUMBNAIL:
      return { ...state, thumbnail: action.payload };
      break;

    case ActionTypes.ADD_IMAGE_LINKS:
      return { ...state, images: action.payload };
      break;

    case ActionTypes.SET_SELL_PRODUCTS_BY_USER:
      return { ...state, sellProductByUser: action.payload };
      break;

    case ActionTypes.SET_SELL_PRODUCTS_BY_ANOTHER_USER:
      return { ...state, sellProductByAnotherUser: action.payload };
      break;

    case ActionTypes.SET_SELL_PRODUCTS:
      return { ...state, sellAllProducts: action.payload };
      break;

    case ActionTypes.GET_SINGLE_SELL_PRODUCT:
      return { ...state, singleSellProduct: action.payload };
      break;

    default:
      return state;
      break;
  }
};
