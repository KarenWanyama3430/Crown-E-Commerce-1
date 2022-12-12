import React, { Component } from "react";
import { connect } from "react-redux";
import {
  cartToggleDropdownInCheckout,
  removeItemInCheckout,
  addItem,
  removeItem,
} from "../../actions/cartActions";
import "./checkout.scss";
import StripeButton from "../../components/StripeButton/StripeButton";
export class Checkout extends Component {
  componentDidMount() {
    this.props.cartToggleDropdownInCheckout();
  }

  renderTotalPrice = () => {
    const price = this.props.itemsArray.map((item) => {
      return item.price * item.quantity;
    });
    return price.reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    }, 0);
  };
  renderItemsArray = () => {
    return this.props.itemsArray.map((item) => {
      return (
        <div key={item.id} className="checkout-item">
          <div className="image-container">
            <img src={item.imageUrl} alt={item.name} />
          </div>
          <span className="name">{item.name}</span>
          <span className="quantity">
            <div className="arrow" onClick={() => this.props.removeItem(item)}>
              &#10094;
            </div>
            <span className="value">{item.quantity}</span>
            <div className="arrow" onClick={() => this.props.addItem(item)}>
              &#10095;
            </div>
          </span>
          <span className="price">{item.price}</span>
          <div
            className="remove-button"
            onClick={() => this.props.removeItemInCheckout(item.id)}
          >
            &#10008;
          </div>
        </div>
      );
    });
  };
  render() {
    return (
      <div className="checkout-page">
        <div className="checkout-header">
          <div className="header-block">
            <span>Product</span>
          </div>
          <div className="header-block">
            <span>Description</span>
          </div>
          <div className="header-block">
            <span>Quantity</span>
          </div>
          <div className="header-block">
            <span>Price</span>
          </div>
          <div className="header-block">
            <span>Remove</span>
          </div>
        </div>
        {this.renderItemsArray()}
        <div className="total">Total : ${this.renderTotalPrice()}</div>
        {this.props.itemsArray.length < 1 ? (
          <h3 className="test-warning">Please Start Adding Items</h3>
        ) : (
          <div>
            {this.props.currentUser ? (
              <div>
                {" "}
                <div className="test-warning">
                  *Please use the following test credit card for payments*
                  <br />
                  4242 4242 4242 4242 - Exp: 01/22 - CVV: 123
                </div>
                <StripeButton price={this.renderTotalPrice()} />{" "}
              </div>
            ) : (
              <h3 className="test-warning">Please Sign In To Purchase Items</h3>
            )}
          </div>
        )}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    itemsArray: state.cart.itemsArray,
    currentUser: state.user.currentUser,
  };
};
export default connect(mapStateToProps, {
  cartToggleDropdownInCheckout,
  removeItemInCheckout,
  addItem,
  removeItem,
})(Checkout);
