import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Image from "material-ui-image";
import Typography from "@mui/material/Typography";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

const HorizontalCard = ({ image, name, price, description }) => {
  console.log(image, name, price, description);
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
              src={image}
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
              {name}
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
              ${price}
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
              {description}
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
