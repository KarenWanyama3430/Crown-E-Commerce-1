import React, { Component } from "react";
import FormInput from "../FormInput/FormInput";
import "./SignIn.scss";
import CustomButton from "../CustomButton/CustomButton";
import { signInWithGoogle, auth } from "../../firebase/Firebase";
import Spinner from "../spinner/Spinner";
import { connect } from "react-redux";
import { setSpinner, setSpinnerToFalse } from "../../actions/userAction";
import history from "../../history/history";
export class SignIn extends Component {
  state = {
    email: "",
    password: "",
    error: "",
  };
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  handleSubmit = async (event) => {
    event.preventDefault();
    this.props.setSpinner();
    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
      this.props.setSpinnerToFalse();
    } catch (error) {
      console.log(error);
      this.props.setSpinnerToFalse();
      this.setState({ error: error.message });
      setTimeout(() => {
        this.setState({ error: "" });
      }, 3000);
    }
  };
  render() {
    if (!this.props.loading) {
      return (
        <div className="sign-in">
          <h2>I already have an account</h2>
          <p>Sign in with your email and password</p>
          <form onSubmit={this.handleSubmit}>
            <h3 style={{ color: "red" }}>{this.state.error}</h3>
            <FormInput
              type="email"
              name="email"
              required
              handleChange={this.handleChange}
              value={this.state.email}
              label="Email"
            />
            <FormInput
              type="password"
              name="password"
              required
              handleChange={this.handleChange}
              value={this.state.password}
              label="Password"
            />
            <div className="buttons">
              <CustomButton type="submit">Sign In </CustomButton>
              {"  "}
              <CustomButton onClick={signInWithGoogle} isSignedIn type="submit">
                Sign In With Google
              </CustomButton>
              <CustomButton
                onClick={() => history.push("/signup")}
                type="submit"
              >
                Sign Up
              </CustomButton>
            </div>
          </form>
        </div>
      );
    } else {
      return <Spinner />;
    }
  }
}
const mapStateToProps = (state) => {
  return {
    loading: state.user.loading,
  };
};
export default connect(mapStateToProps, { setSpinner, setSpinnerToFalse })(
  SignIn
);
