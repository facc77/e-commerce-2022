import React from "react";
import { Link } from "react-router-dom";
import SectionBar from "../../components/SectionBar";
import TableCart from "../../components/TableCart";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useSelector } from "react-redux";
import StripeWrapper from "../../components/StripeWrapper";

const CartScreen = () => {
  const cartProducts = useSelector((state) => state.products.cart);

  let TotalPrice = cartProducts.reduce(function (prev, cur) {
    return prev + cur.price * cur.count;
  }, 0);

  return (
    <>
      <SectionBar page="Shopping Cart" />
      <Box
        sx={{
          width: { xs: "90%", md: "80%" },
          margin: { xs: "1.5rem", md: "4rem" },
          display: "flex",
          justifyContent: "center",
          flexWrap: { xs: "wrap", md: "nowrap" },
        }}
      >
        <TableCart />

        {cartProducts.length > 0 ? <StripeWrapper /> : null}
      </Box>
    </>
  );
};

export default CartScreen;
