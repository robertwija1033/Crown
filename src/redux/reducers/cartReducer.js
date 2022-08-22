import CartTypes from "../types/cartTypes";

const CART_INITIAL_STATE = {
  cartItems: [],
};

const cartReducer = (state = CART_INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case CartTypes.SET_CART_ITEMS:
      return {
        ...state,
        cartItems: payload,
      };

    default:
      return state;
  }
};

export default cartReducer;
