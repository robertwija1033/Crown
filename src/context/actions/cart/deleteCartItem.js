export const deleteCartItem = (cartItems, productToDelete) => {
  return cartItems.filter((product) => product.id !== productToDelete.id);
};
