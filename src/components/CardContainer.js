import React from "react";
import { Box, Typography } from "@mui/material";
import Image from "../img/NotFound.png";

import ProductCard from "./Card";

const CardContainer = () => {
  var products = [
    {
      name: "Titulo nro #1",
      description: "Aprovecha la promo!",
      image: Image,
      precioTotal: "2131",
      precioDescuento: "233",
    },
    {
      name: "Titulo nro #2",
      description: "No te lo podes perder!",
      image: Image,
      precioTotal: "2342",
      precioDescuento: "655",
    },
    {
      name: "Titulo nro #3",
      description: "No te lo podes perder!",
      image: Image,
      precioTotal: "3040",
      precioDescuento: "456",
    },
    {
      name: "Titulo nro #4",
      description: "No te lo podes perder!",
      image: Image,
      precioTotal: "300",
      precioDescuento: "200",
    },
    {
      name: "Titulo nro #5",
      description: "No te lo podes perder!",
      image: Image,
      precioTotal: "300",
      precioDescuento: "20450",
    },
    {
      name: "Titulo nro #6",
      description: "No te lo podes perder!",
      image: Image,
      precioTotal: "36600",
      precioDescuento: "20660",
    },
  ];
  return (
    <>
      <Box
        sx={{
          display: "flex",
          mt: "3rem",
          justifyContent: "center",
          my: "3rem",
        }}
      >
        <Typography sx={{ fontSize: "32px", fontFamily: "Josefin Sans" }}>
          Ultimos Productos
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {products.map((product, id) => (
          <ProductCard
            key={id}
            name={product.name}
            image={product.image}
            precioTotal={product.precioTotal}
            precioDescuento={product.precioDescuento}
          />
        ))}
      </Box>
    </>
  );
};

export default CardContainer;
