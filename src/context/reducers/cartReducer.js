import CartTypes from "../types/cartTypes";

const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case CartTypes.SET_CART_ITEMS:
      return {
        ...state,
        ...payload,
      };

    default:
      throw new Error(`Unhandled type ${type} in cartReducer`);
  }
};

export default cartReducer;
