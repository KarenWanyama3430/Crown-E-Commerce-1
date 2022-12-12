import "./CollectionItem.scss";
import CustomButton from "../CustomButton/CustomButton";
import { connect } from "react-redux";
import { addItem } from "../../actions/cartActions";
import React, { Component } from "react";

export class CollectionItem extends Component {
  test = () => {
    const { name, price, imageUrl, addItem, id } = this.props;

    return addItem({ name, price, imageUrl, id });
  };
  render() {
    const { name, price, imageUrl } = this.props;
    return (
      <div className="collection-item">
        <div
          className="image"
          style={{ backgroundImage: `url(${imageUrl})` }}
        />

        <div className="collection-footer">
          <span className="name">{name}</span>
          <span className="price">{price}</span>
        </div>

        <CustomButton inverted className="custom-button" onClick={this.test}>
          ADD TO CART
        </CustomButton>
      </div>
    );
  }
}

export default connect(null, { addItem })(CollectionItem);
