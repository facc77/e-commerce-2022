import React from "react";
import { Box, Typography } from "@mui/material";
import ServicesCard from "./ServicesCard";
import Support1 from "../img/support1.png";
import Support2 from "../img/support2.png";
import Support3 from "../img/support3.png";
import Support4 from "../img/support4.png";

const CardContainer = () => {
  var products = [
    {
      name: "Titulo nro #1",
      description: "Aprovecha la promo!",
      image: Support1,
      precioTotal: "2131",
      precioDescuento: "233",
    },
    {
      name: "Titulo nro #2",
      description: "No te lo podes perder!",
      image: Support2,
      precioTotal: "2342",
      precioDescuento: "655",
    },
    {
      name: "Titulo nro #3",
      description: "No te lo podes perder!",
      image: Support3,
      precioTotal: "3040",
      precioDescuento: "456",
    },
    {
      name: "Titulo nro #4",
      description: "No te lo podes perder!",
      image: Support4,
      precioTotal: "300",
      precioDescuento: "200",
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
          Nuestros Servicios
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
          <ServicesCard key={id} image={product.image} />
        ))}
      </Box>
    </>
  );
};

export default CardContainer;
