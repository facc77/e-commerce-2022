import React from "react";
import SectionBar from "../../components/SectionBar";
import TableCart from "../../components/TableCart";
import Box from "@mui/material/Box";
import { useSelector } from "react-redux";
import GenerateForm from "../../components/GenerateForm";

const CartScreen = () => {
  const cartProducts = useSelector((state) => state.products.cart);

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

        {cartProducts.length > 0 ? <GenerateForm /> : null}
      </Box>
    </>
  );
};

export default CartScreen;
