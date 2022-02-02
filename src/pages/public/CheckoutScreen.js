import React from "react";
import SectionBar from "../../components/SectionBar";
import Box from "@mui/material/Box";
import StripeWrapper from "../../components/StripeWrapper";

const CheckoutScreen = () => {
  return (
    <>
      <SectionBar page="Checkout" />
      <Box sx={{ display: "flex", justifyContent: "center", marginY: "4rem" }}>
        <StripeWrapper />
      </Box>
    </>
  );
};

export default CheckoutScreen;
