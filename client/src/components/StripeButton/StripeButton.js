import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { connect } from "react-redux";
import { paymentSuccessful } from "../../actions/cartActions";
const StripeButton = ({ price, paymentSuccessful }) => {
  const priceForStripe = price * 100;
  const stripeKey = "pk_test_FEJFBJZnuMuv13hNXWi3ejcm00gCzXqImZ";
  const onToken = (token) => {
    axios({
      url: "payment",
      method: "post",
      data: {
        amount: priceForStripe,
        token,
      },
    })
      .then((response) => {
        alert("Payment successful");
        paymentSuccessful();
        console.log(response);
      })
      .catch((error) => {
        console.log("Payment error", error);
        alert(
          "There was an issue with your payment. Please make sure you use the porvided credentials"
        );
      });
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      token={onToken}
      stripeKey={stripeKey}
    />
  );
};

export default connect(null, { paymentSuccessful })(StripeButton);
