import React from "react";
import SectionBar from "../../components/SectionBar";
import TableCart from "../../components/TableCart";
import Box from "@mui/material/Box";

const CartScreen = () => {
  return (
    <>
      <SectionBar page="Shopping Cart" />
      <Box sx={{ width: "50%", margin: "4rem" }}>
        <TableCart />
      </Box>
    </>
  );
};

export default CartScreen;
