import React from "react";
import { ReactComponent as Logo } from "../../assets/Header.svg";
import { Link } from "react-router-dom";
import "./Header.scss";
import { auth } from "../../firebase/Firebase";
import { connect } from "react-redux";
import CartIcon from "../cartIcon/CartIcon";
import CartDropdown from "../cartDropdown/CartDropdown";
import { toggleDropdown } from "../../actions/cartActions";
const Header = ({ currentUser, toggleDropdown, cartToggleDropdown }) => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP{" "}
        </Link>
        <Link className="option" to="/shop">
          CONTACT{" "}
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link to="/signin">SIGN IN</Link>
        )}
        <CartIcon onClick={() => toggleDropdown()} />
      </div>
      {cartToggleDropdown ? <CartDropdown /> : null}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    currentUser: state.user.currentUser,
    cartToggleDropdown: state.cart.cartToggleDropdown,
  };
};
export default connect(mapStateToProps, { toggleDropdown })(Header);
