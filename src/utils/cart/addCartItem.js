export const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (product) => product.id === productToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((product) =>
      product.id === productToAdd.id
        ? { ...product, quantity: product.quantity + 1 }
        : product
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};
