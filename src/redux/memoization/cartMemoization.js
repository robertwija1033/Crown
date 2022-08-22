import { createSelector } from "reselect";

const selectCartReducer = (state) => state.cart;

export const CartMemoization = createSelector(
  [selectCartReducer],
  (cart) => cart.cartItems
);

export const cartTotalMemoization = createSelector(
  [CartMemoization],
  (cartItems) =>
    cartItems.reduce((total, product) => total + product.quantity, 0)
);

export const totalPriceMemoization = createSelector(
  [CartMemoization],
  (cartItems) =>
    cartItems.reduce(
      (total, product) => total + product.quantity * product.price,
      0
    )
);
