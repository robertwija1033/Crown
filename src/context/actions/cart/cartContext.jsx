import { createContext, useReducer } from "react";
import { addCartItem } from "./addCartItem";
import { subtractCartItem } from "./subtractCartItem";
import { deleteCartItem } from "./deleteCartItem";
import cartReducer from "../../reducers/cartReducer";
import CartTypes from "../../types/cartTypes";

export const CartContext = createContext({
  cartItems: [],
  addItemToCart: () => {},
  subtractItemToCart: () => {},
  deleteItemToCart: () => {},
  cartTotal: 0,
  totalPrice: 0,
});

const INITIAL_STATE = {
  cartItems: [],
  cartTotal: 0,
  totalPrice: 0,
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);
  const { cartItems, cartTotal, totalPrice } = state;
  console.log(state);

  const setCartItems = (cartItems) => {
    const cartTotal = cartItems.reduce(
      (total, product) => total + product.quantity,
      0
    );

    const totalPrice = cartItems.reduce(
      (total, product) => total + product.quantity * product.price,
      0
    );

    dispatch({
      type: CartTypes.SET_CART_ITEMS,
      payload: {
        cartItems,
        cartTotal,
        totalPrice,
      },
    });
  };

  const addItemToCart = (productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    setCartItems(newCartItems);
  };

  const subtractItemToCart = (productToSubtract) => {
    const newCartItems = subtractCartItem(cartItems, productToSubtract);
    setCartItems(newCartItems);
  };

  const deleteItemToCart = (productToDelete) => {
    const newCartItems = deleteCartItem(cartItems, productToDelete);
    setCartItems(newCartItems);
  };

  const value = {
    cartItems,
    addItemToCart,
    subtractItemToCart,
    deleteItemToCart,
    cartTotal,
    totalPrice,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
