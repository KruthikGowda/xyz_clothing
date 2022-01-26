import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51HrhmJB9KaRUpzT0a23NSqhM2RFI02DL9PTil8you4GD5P4nW302JeBqvCJEaHfdORcOgWog1vUbeiflzUQRGgHq00hPbIqogV";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Sucessful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="The Fashion Store"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is: ₹${price.toFixed(2)}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
      allowRememberMe
    />
  );
};

export default StripeCheckoutButton;
