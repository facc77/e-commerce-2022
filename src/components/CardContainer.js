import React from "react";
import { useSelector } from "react-redux";
import { Box, Typography } from "@mui/material";
import ProductCard from "./Card";
import { Link } from "react-router-dom";
import MenuItem from "@mui/material/MenuItem";
import { useDispatch } from "react-redux";
import { setActiveProduct } from "../redux/reducers/productsReducer";

const CardContainer = () => {
  const { productsList } = useSelector((state) => state.products);
  let lastElements = productsList.slice(-3);

  const dispatch = useDispatch();
  const callDispatch = (name) => {
    dispatch(setActiveProduct(name));
  };

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
        {lastElements.map((product, id) => (
          <MenuItem
            key={id}
            component={Link}
            to="/detalleProducto"
            onClick={() => callDispatch(product.name)}
          >
            <ProductCard
              key={id}
              name={product.name}
              image={product.img || null}
              price={product.price}
              showIcons={true}
            />
          </MenuItem>
        ))}
      </Box>
    </>
  );
};

export default CardContainer;
