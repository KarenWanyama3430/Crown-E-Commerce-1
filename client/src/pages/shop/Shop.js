import React, { Component } from "react";
import CollectionPreview from "../../components/Collection-preview/CollectionPreview";
import { connect } from "react-redux";
import { fetchItemsFromFirebaseAsync } from "../../actions/shopAction";

import Spinner from "../../components/spinner/Spinner";

export class Shop extends Component {
  componentDidMount() {
    this.props.fetchItemsFromFirebaseAsync();
  }

  render() {
    if (this.props.collections.length > 0) {
      return (
        <div>
          {this.props.collections.map(({ title, id, items }) => {
            return <CollectionPreview title={title} key={id} items={items} />;
          })}
        </div>
      );
    } else {
      return <Spinner />;
    }
  }
}
const mapStateToProps = (state) => {
  return {
    collections: state.shop.collections,
  };
};
export default connect(mapStateToProps, {
  fetchItemsFromFirebaseAsync,
})(Shop);
