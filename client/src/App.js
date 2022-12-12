import React, { Component } from "react";
import HomePage from "./pages/homepage/HomePage";
import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import Shop from "./pages/shop/Shop";
import Header from "./components/Header/Header";
import { auth, createUserProfileDocument } from "./firebase/Firebase";
import { connect } from "react-redux";
import { setCurrentUser } from "./actions/userAction";
import Checkout from "./pages/checkout/Checkout";
import ShopItem from "./pages/shopItem/ShopItem";
import SignInAndSignUp from "./pages/SignInAndSignUp/SignInAndSignUp";
import SignupPage from "./pages/SignupPage/SignupPage";
export class App extends Component {
  unSubscribeFromAuth = null;
  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapshot) => {
          setCurrentUser({
            currentUser: { ...snapshot.data(), id: snapshot.id },
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }
  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/shop" exact component={Shop} />
          <Route path="/shop/:sectionId" exact component={ShopItem} />
          <Route path="/checkout" component={Checkout} />
          <Route
            path="/signup"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <SignupPage />
            }
          />
          <Route
            path="/signin"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <SignInAndSignUp />
            }
          />
        </Switch>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    currentUser: state.user.currentUser,
  };
};

export default connect(mapStateToProps, { setCurrentUser })(App);
