import React from "react";
import { useSelector } from "react-redux";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { postOrder } from "../services/stripe.service.js";

const GenerateForm = () => {
  const navigate = useNavigate();

  const cartProducts = useSelector((state) => state.products.cart);

  let TotalPrice = cartProducts.reduce(function (prev, cur) {
    return prev + cur.price * cur.count;
  }, 0);

  let data = {
    amount: TotalPrice,
  };

  const handleGenerateOrder = async (e, data) => {
    e.preventDefault();
    const newOrder = await postOrder(data);
    localStorage.setItem("uid", newOrder.resp.data.uid);
    if (newOrder) {
      navigate("/checkout");
    } else {
      alert("ocurrió un error al generar el link");
    }
  };
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
            <Typography>Total:</Typography>
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
              type="submit"
              color="success"
              sx={{
                backgroundColor: "#19D16F",
                padding: "0.75rem",
                marginTop: "1.5rem",
              }}
              onClick={(e) => handleGenerateOrder(e, data)}
            >
              Ir a checkout
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default GenerateForm;
