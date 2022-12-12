import React, { Component } from "react";
import "./ItemPreview.scss";
import Item from "../item/Item";
export class ItemPreview extends Component {
  render() {
    const { items, title } = this.props;
    return (
      <div className="collection-page">
        <h1 className="title">{title.toUpperCase()}</h1>
        <div className="items">
          {items.map(({ id, name, price, imageUrl }) => {
            return (
              <Item
                key={id}
                id={id}
                name={name}
                price={price}
                imageUrl={imageUrl}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default ItemPreview;
