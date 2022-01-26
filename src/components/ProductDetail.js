import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Image from "material-ui-image";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { useDispatch, useSelector } from "react-redux";
import { setAddProduct } from "../redux/reducers/productsReducer";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { toast } from "react-toastify";

const ProductDetail = ({ product }) => {
  const dispatch = useDispatch();
  const { logged } = useSelector((state) => state.auth);

  const verifyProduct = (productSelected) => {
    let product = JSON.parse(JSON.stringify(productSelected));
    product.count = 1;
    dispatch(setAddProduct(product));
  };

  const callDispatch = (product) => {
    logged
      ? verifyProduct(product)
      : toast.error("Debes loguearte para comprar!", {
          position: "bottom-left",
        });
  };

  return (
    <>
      <Grid
        container
        sx={{
          height: "500px",
          display: "flex",
          alignItems: "center",
          width: "60%",
        }}
      >
        <Grid item sx={{ height: "500px", width: "35%" }}>
          <Image
            imageStyle={{
              height: "100%",
              width: "100%",
            }}
            src={product.img}
            alt="image"
          />
        </Grid>
        <Grid item sx={{ height: "500px", width: "65%" }}>
          <Typography
            fontFamily="Josefin Sans"
            component="h1"
            variant="h4"
            mt={2}
          >
            {product.name}
          </Typography>
          <Typography
            fontFamily="Josefin Sans"
            component="h1"
            variant="h4"
            fontSize="14px"
            mt={2}
          >
            ${product.price}
          </Typography>
          <Typography
            fontFamily="Josefin Sans"
            component="h1"
            variant="h4"
            fontSize="14px"
            mt={2}
          >
            {product.description}
          </Typography>
          <Typography
            fontFamily="Josefin Sans"
            component="h1"
            variant="h4"
            fontSize="14px"
            mt={2}
            sx={{ display: "flex", alignItems: "center" }}
          >
            Añadir al carrito
            <ShoppingCartOutlinedIcon
              sx={{
                color: "#151875",
                fontSize: "22px",
                padding: "5px",
                margin: "0.25rem",
                transition: "1s",
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
          </Typography>
          <Typography
            fontFamily="Josefin Sans"
            component="h1"
            variant="h4"
            fontSize="14px"
            mt={2}
          >
            Categoria: {product.category.name}
          </Typography>
          <Box sx={{ display: "flex" }}>
            <Box>
              <Typography
                fontFamily="Josefin Sans"
                component="h1"
                variant="h4"
                fontSize="14px"
                mt={2}
              >
                Compartelo!
              </Typography>
            </Box>
            <Box mt={1} ml={1}>
              <InstagramIcon
                sx={{
                  backgroundColor: "#151875",
                  borderRadius: "15px",
                  color: "#fff",
                  fontSize: "15px",
                  padding: "5px",
                  margin: "0.25rem",
                }}
              />
              <FacebookIcon
                sx={{
                  backgroundColor: "#151875",
                  borderRadius: "15px",
                  color: "#fff",
                  fontSize: "15px",
                  padding: "5px",
                  margin: "0.25rem",
                }}
              />
              <LinkedInIcon
                sx={{
                  backgroundColor: "#151875",
                  borderRadius: "15px",
                  color: "#fff",
                  fontSize: "15px",
                  padding: "5px",
                  margin: "0.25rem",
                }}
              />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default ProductDetail;
