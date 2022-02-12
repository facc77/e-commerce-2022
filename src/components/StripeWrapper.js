import React from "react";
import StripeForm from "./StripeForm";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

//used backtics to solve :Invalid value for Stripe(): apiKey should be a string.
const stripePromise = loadStripe(`${process.env.REACT_APP_STRIPE_KEY}`);

const StripeWrapper = () => {
  return (
    <Elements stripe={stripePromise}>
      <StripeForm />
    </Elements>
  );
};

export default StripeWrapper;
