import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";

let stripePromise;

const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(
      "pk_test_51KMGSvD2oePE5Ls1FOKrZWSCMC57ahMvUc7rgw4g7i1z25hS8aLUo0VrKbSlp6otfISbc9PH3YKLvFjfF51fgBxe00GLeFCgIs"
    );
  }
  return stripePromise;
};

const StripeForm = () => {
  const [stripeError, setStripeError] = useState(null);
  const [isLoading, setLoading] = useState(false);

  const cartProducts = useSelector((state) => state.products.cart);

  let TotalPrice = cartProducts.reduce(function (prev, cur) {
    return prev + cur.price * cur.count;
  }, 0);

  const item = [
    { price: "price_1KNMRSD2oePE5Ls16AfRTzVX", quantity: 4 },
    { price: "price_1KNNUBD2oePE5Ls1xres4toQ", quantity: 4 },
  ];
  console.log(item);

  const checkoutOptions = {
    lineItems: item,
    mode: "payment",
    successUrl: "http://localhost:3000/checkout/success",
    cancelUrl: "http://localhost:3000/checkout/cancel",
  };

  const redirectToCheckout = async () => {
    setLoading(true);
    console.log("redirectToCheckout");
    const stripe1 = await getStripe();
    console.log(stripe1);
    const { error } = await stripe1.redirectToCheckout(checkoutOptions);
    console.log("Stripe checkout error", error);
    if (error) setStripeError(error.message);
    setLoading(false);
  };

  if (stripeError) alert(stripeError);

  return (
    <Box
      component="form"
      sx={{ display: { xs: "flex" }, justifyContent: { xs: "center" } }}
    >
      <Box
        sx={{
          width: { xs: "80%", md: "40%" },
          marginLeft: { xs: "0rem", md: "2rem" },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            boxShadow: 1,
            padding: "3rem",
            borderRadius: "7px",
            width: "15rem",
            backgroundColor: "#F4F4FC",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              borderBottom: "1px #D3D3D3 solid",
            }}
          >
            <Typography>Total a pagar:</Typography>
            <Typography>${TotalPrice}</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <Button
              variant="contained"
              color="success"
              sx={{
                backgroundColor: "#19D16F",
                padding: "0.75rem",
                marginTop: "1.5rem",
              }}
              onClick={redirectToCheckout}
              disabled={isLoading}
            >
              Ir a checkout
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default StripeForm;
