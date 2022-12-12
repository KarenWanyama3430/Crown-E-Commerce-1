import React, { Component } from "react";
import MenuItem from "../menuItem/MenuItem";
import "./Directory.scss";
import { connect } from "react-redux";
export class Directory extends Component {
  render() {
    return (
      <div className="directory-menu">
        {this.props.sections.map(({ title, imageUrl, size, id, linkUrl }) => {
          return (
            <MenuItem
              key={id}
              title={title}
              imageUrl={imageUrl}
              size={size}
              linkUrl={linkUrl}
            />
          );
        })}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    sections: state.directory.sections,
  };
};
export default connect(mapStateToProps)(Directory);
