import React from "react";
import "./CollectionPreview.scss";
import CollectionItem from "../CollectionItem/CollectionItem";
import { withRouter } from "react-router-dom";
import history from "../../history/history";
const CollectionPreview = ({ items, title, match }) => {
  return (
    <div className="collection-preview">
      <h1
        className="title"
        onClick={() => history.push(`${match.path}/${title.toLowerCase()}`)}
      >
        {title.toUpperCase()}
      </h1>
      <div className="preview">
        {items
          .filter((item, index) => index < 4)
          .map(({ id, name, price, imageUrl }) => {
            return (
              <CollectionItem
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
};

export default withRouter(CollectionPreview);
