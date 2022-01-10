import React from "react";
import { useSelector } from "react-redux";
import { Box, Typography } from "@mui/material";
import Image from "../img/NotFound.png";

import ProductCard from "./Card";

const CardContainer = () => {
  const { productsList } = useSelector((state) => state.products);

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
        {productsList.map((product, id) => (
          <ProductCard
            key={id}
            name={product.name}
            image={product.img || null}
            price={product.price}
          />
        ))}
      </Box>
    </>
  );
};

export default CardContainer;
