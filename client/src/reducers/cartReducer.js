import { addItemsToCart, removeItemFromCart } from "./cartUtils";
const INITIAL_STATE = {
  cartToggleDropdown: false,
  itemsArray: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "TOGGLE_DROPDOWN":
      return { ...state, cartToggleDropdown: !state.cartToggleDropdown };
    case "ADD_ITEM":
      return {
        ...state,
        itemsArray: addItemsToCart(state.itemsArray, action.payload),
      };
    case "REMOVE_ITEM":
      return {
        ...state,
        itemsArray: removeItemFromCart(state.itemsArray, action.payload),
      };
    case "CART_TOGGLE_DROPDOWN_IN_CHECKOUT":
      return {
        ...state,
        cartToggleDropdown: false,
      };
    case "REMOVE_ITEM_IN_CHECKOUT":
      const newItemsArray = state.itemsArray.filter(
        (item) => item.id !== action.payload
      );

      return {
        ...state,
        itemsArray: newItemsArray,
      };
    case "PAYMENT_SUCCESSFUL":
      return { ...state, itemsArray: [] };
    default:
      return state;
  }
};
