import ProductType from "../types/productType";

const productReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case ProductType.SET_PRODUCTS:
      return {
        ...state,
        products: payload,
      };
      break;

    default:
      throw new Error(`Unhandled type ${type} in productReducer`);
  }
};

export default productReducer;
