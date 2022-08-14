import { createContext, useEffect, useState } from "react";
import { addCartItem } from "./addCartItem";
import { subtractCartItem } from "./subtractCartItem";
import { deleteCartItem } from "./deleteCartItem";

export const CartContext = createContext({
  cartItems: [],
  addItemToCart: () => {},
  subtractItemToCart: () => {},
  deleteItemToCart: () => {},
  cartTotal: 0,
  totalPrice: 0,
});

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const cartCount = cartItems.reduce(
      (total, product) => total + product.quantity,
      0
    );

    setCartTotal(cartCount);
  }, [cartItems]);

  useEffect(() => {
    const priceCount = cartItems.reduce(
      (total, product) => total + product.quantity * product.price,
      0
    );

    setTotalPrice(priceCount);
  }, [cartItems]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const subtractItemToCart = (productToSubtract) => {
    setCartItems(subtractCartItem(cartItems, productToSubtract));
  };

  const deleteItemToCart = (productToDelete) => {
    setCartItems(deleteCartItem(cartItems, productToDelete));
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
