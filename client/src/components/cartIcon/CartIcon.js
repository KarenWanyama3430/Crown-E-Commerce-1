import React from "react";
import "./CartIcon.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/CartIcon.svg";
import { connect } from "react-redux";
const CartIcon = ({ onClick, itemsArray }) => {
  const test = itemsArray.map((item) => {
    return item.quantity;
  });

  const res = test.reduce((acc, currentVal) => {
    return acc + currentVal;
  }, 0);

  return (
    <div className="cart-icon" onClick={onClick}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{res}</span>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    itemsArray: state.cart.itemsArray,
  };
};
export default connect(mapStateToProps)(CartIcon);
