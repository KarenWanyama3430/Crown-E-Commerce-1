export const addItemsToCart = (cartItems, itemsToBeAdded) => {
  const existingCartItem = cartItems.find((cartItem) => {
    return cartItem.id === itemsToBeAdded.id;
  });
  if (existingCartItem) {
    return cartItems.map((cartItem) => {
      return cartItem.id === itemsToBeAdded.id
        ? { ...itemsToBeAdded, quantity: cartItem.quantity + 1 }
        : cartItem;
    });
  }
  return [...cartItems, { ...itemsToBeAdded, quantity: 1 }];
};
export const removeItemFromCart = (cartItems, itemsToBeRemoved) => {
  const existingCartItem = cartItems.find((cartItem) => {
    return cartItem.id === itemsToBeRemoved.id;
  });
  if (existingCartItem.quantity === 1) {
    return cartItems.filter((item) => {
      return item.id !== itemsToBeRemoved.id;
    });
  }
  return cartItems.map((item) => {
    return item.id === itemsToBeRemoved.id
      ? { ...itemsToBeRemoved, quantity: item.quantity - 1 }
      : item;
  });
};
