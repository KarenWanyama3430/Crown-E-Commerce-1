import React, { Component } from "react";
import { connect } from "react-redux";
import ItemPreview from "../../components/itemPreview/ItemPreview";

import { fetchItemsFromFirebaseAsync } from "../../actions/shopAction";
import Spinner from "../../components/spinner/Spinner";

export class ShopItem extends Component {
  componentDidMount() {
    this.props.fetchItemsFromFirebaseAsync();
  }

  render() {
    if (this.props.section) {
      const { title, id, items } = this.props.section;
      return (
        <div>
          <ItemPreview title={title} key={id} items={items} />;
        </div>
      );
    } else {
      return <Spinner />;
    }
  }
}

const checkSectionId = {
  mens: 0,
  sneakers: 1,
  jackets: 2,
  womens: 3,
  hats: 4,
};
const mapStateToProps = (state, ownProps) => {
  let param = ownProps.match.params.sectionId;
  param = checkSectionId[param];
  return {
    section: state.shop.collections[param],
  };
};

export default connect(mapStateToProps, {
  fetchItemsFromFirebaseAsync,
})(ShopItem);
