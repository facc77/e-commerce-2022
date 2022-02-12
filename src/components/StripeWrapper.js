import React from "react";
import StripeForm from "./StripeForm";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

//used backtics to solve :Invalid value for Stripe(): apiKey should be a string.
const stripePromise = loadStripe(
  "pk_test_51KMGSvD2oePE5Ls1FOKrZWSCMC57ahMvUc7rgw4g7i1z25hS8aLUo0VrKbSlp6otfISbc9PH3YKLvFjfF51fgBxe00GLeFCgIs"
);

const StripeWrapper = () => {
  return (
    <Elements stripe={stripePromise}>
      <StripeForm />
    </Elements>
  );
};

export default StripeWrapper;
