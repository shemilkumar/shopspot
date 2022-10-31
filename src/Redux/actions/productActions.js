export const setProductsAction = (products) => {
  return {
    type: "SET_PRODUCTS",
    payload: products,
  };
};

export const selectedProductAction = (product) => {
  return {
    type: "SELECTED_PRODUCT",
    payload: product,
  };
};

export const removeSelectedAction = () => {
  return {
    type: "SELECTED_PRODUCT",
    payload: {},
  };
};
