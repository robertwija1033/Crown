import CartTypes from "../types/cartTypes";
import { addCartItem } from "../../utils/cart/addCartItem";
import { subtractCartItem } from "../../utils/cart/subtractCartItem";
import { deleteCartItem } from "../../utils/cart/deleteCartItem";

export const addItemToCart = (cartItems, productToAdd) => {
  const newCartItems = addCartItem(cartItems, productToAdd);
  return { type: CartTypes.SET_CART_ITEMS, payload: newCartItems };
};

export const subtractItemToCart = (cartItems, productToSubtract) => {
  const newCartItems = subtractCartItem(cartItems, productToSubtract);
  return { type: CartTypes.SET_CART_ITEMS, payload: newCartItems };
};

export const deleteItemToCart = (cartItems, productToDelete) => {
  const newCartItems = deleteCartItem(cartItems, productToDelete);
  return { type: CartTypes.SET_CART_ITEMS, payload: newCartItems };
};
