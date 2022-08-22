import ProductType from "../types/productType";

const PRODUCT_INITIAL_STATE = {
  // products: {},
  products: [], // for speed using this
  isLoading: false,
  error: null,
};

const productReducer = (state = PRODUCT_INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case ProductType.FETCH_PRODUCT_START:
      return { ...state, isLoading: true };
    case ProductType.FETCH_PRODUCT_SUCCESS:
      return {
        ...state,
        products: payload,
        isLoading: false,
      };
    case ProductType.FETCH_PRODUCT_FAILED:
      return { ...state, error: payload, isLoading: false };

    default:
      return state;
  }
};

export default productReducer;
