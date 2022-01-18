import React from "react";
import { useDispatch } from "react-redux";
import { setAddProduct } from "../redux/reducers/productsReducer";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Image from "material-ui-image";
import Typography from "@mui/material/Typography";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

const HorizontalCard = ({ product }) => {
  const dispatch = useDispatch();
  const callDispatch = (product) => {
    console.log(product);
    dispatch(setAddProduct(product));
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          height: "250px",
          width: { xs: "90%", md: "60%" },
          borderBottom: "1px solid #D3D3D3",
          marginTop: "2rem",
        }}
      >
        <Grid container>
          <Grid item xs={6} md={3} mt={5}>
            <Image
              sx={{
                height: "250px",
                width: "350px",
                paddingTop: { xs: "2rem" },
              }}
              src={product.img}
              alt="image"
            />
          </Grid>

          <Grid item xs={6} md={9} mt={5}>
            <Typography
              variant="h5"
              m={1}
              sx={{
                fontFamily: "Josefin Sans",
                fontSize: "20px",
                color: "#111C85",
              }}
            >
              {product.name}
            </Typography>
            <Typography
              variant="h5"
              m={1}
              sx={{
                fontFamily: "Josefin Sans",
                fontSize: "15px",
                color: "#111C85",
              }}
            >
              ${product.price}
            </Typography>
            <Typography
              m={1}
              variant="h5"
              sx={{
                fontFamily: "Lato",
                fontSize: "18px",
                color: "#9295AA",
                display: { xs: "none", md: "block" },
              }}
            >
              {product.description}
            </Typography>
            <Box>
              <ShoppingCartOutlinedIcon
                sx={{
                  color: "#151875",
                  fontSize: "22px",
                  padding: "5px",
                  margin: "0.25rem",
                  "&:hover": {
                    cursor: "pointer",
                  },
                }}
                onClick={() => callDispatch(product)}
              />
              <FavoriteBorderOutlinedIcon
                sx={{
                  color: "#151875",
                  fontSize: "22px",
                  padding: "5px",
                  margin: "0.25rem",
                  "&:hover": {
                    cursor: "pointer",
                  },
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default HorizontalCard;
