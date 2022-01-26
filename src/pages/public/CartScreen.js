import React from "react";
import SectionBar from "../../components/SectionBar";
import TableCart from "../../components/TableCart";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useSelector } from "react-redux";

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
          width: "80%",
          margin: "4rem",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <TableCart />
        {cartProducts.length > 0 ? (
          <Box
            sx={{
              width: "40%",
              marginLeft: "2rem",
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
                >
                  Ir a checkout
                </Button>
              </Box>
            </Box>
          </Box>
        ) : null}
      </Box>
    </>
  );
};

export default CartScreen;
