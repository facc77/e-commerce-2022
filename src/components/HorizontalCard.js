import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setAddProduct,
  setActiveProduct,
} from "../redux/reducers/productsReducer";
import { toast } from "react-toastify";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Image from "material-ui-image";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

const HorizontalCard = ({ product }) => {
  const { logged } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const verifyProduct = (productSelected) => {
    let product = JSON.parse(JSON.stringify(productSelected));
    product.count = 1;
    dispatch(setAddProduct(product));
  };
  const addProductDispatch = (name) => {
    dispatch(setActiveProduct(name));
  };

  const callDispatch = (product) => {
    logged
      ? verifyProduct(product)
      : toast.error("Debes loguearte para comprar!", {
          position: "bottom-left",
        });
  };

  /* function fold(input, lineSize, lineArray) {
    lineArray = lineArray || [];
    if (input.length <= lineSize) {
      lineArray.push(input);
      return lineArray;
    }
    lineArray.push(input.substring(0, lineSize));
    var tail = input.substring(lineSize);
    return fold(tail, lineSize, lineArray);
  }

   var arrayOfLines = fold(product.name, 15);
     var foldedString = arrayOfLines.join("<br/>");
    */
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
            <MenuItem
              component={Link}
              to={`/detalleProducto/${product.category.name}/${product.name}`}
              onClick={() => addProductDispatch(product.name)}
              sx={{
                padding: "0",
                "&:hover": {
                  textDecoration: "underline",
                  backgroundColor: "#fff",
                },
              }}
            >
              <Typography
                variant="h5"
                m={1}
                sx={{
                  fontFamily: "Josefin Sans",
                  fontSize: "20px",
                  color: "#111C85",
                  width: { xs: "10rem", md: "100%" },
                  display: { xs: "inline-block" },
                  whiteSpace: { xs: "pre-line" },
                }}
              >
                {product.name}
              </Typography>
            </MenuItem>

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
                    backgroundColor: "#EBECF0",
                    borderRadius: "12px",
                  },
                  "&:active": {
                    backgroundColor: "#949494",
                    borderRadius: "12px",
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
                    backgroundColor: "#EBECF0",
                    borderRadius: "12px",
                  },
                  "&:active": {
                    backgroundColor: "#949494",
                    borderRadius: "12px",
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
