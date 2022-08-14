export const subtractCartItem = (cartItems, productToSubtract) => {
  const existingCartItem = cartItems.find(
    (product) => product.id === productToSubtract.id
  );

  if (existingCartItem.quantity === 1) {
    return cartItems.filter((product) => product.id !== productToSubtract.id);
  }

  return cartItems.map((product) =>
    product.id === productToSubtract.id
      ? { ...product, quantity: product.quantity - 1 }
      : product
  );
};
