import history from "../history/history";

export const toggleDropdown = () => {
  return {
    type: "TOGGLE_DROPDOWN",
  };
};

export const addItem = (itemsAddedToCart) => {
  return {
    type: "ADD_ITEM",
    payload: { ...itemsAddedToCart },
  };
};
export const removeItem = (itemTobeRemovedFromCheckout) => {
  return {
    type: "REMOVE_ITEM",
    payload: itemTobeRemovedFromCheckout,
  };
};
export const cartToggleDropdownInCheckout = () => {
  return {
    type: "CART_TOGGLE_DROPDOWN_IN_CHECKOUT",
  };
};
export const removeItemInCheckout = (id) => {
  return {
    type: "REMOVE_ITEM_IN_CHECKOUT",
    payload: id,
  };
};

export const paymentSuccessful = () => {
  history.push("/");
  return {
    type: "PAYMENT_SUCCESSFUL",
  };
};
