import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Image from "material-ui-image";
import Box from "@mui/material/Box";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

export default function MediaCard({ name, image, price, showIcons }) {
  return (
    <Card sx={{ width: 300, m: "3rem" }}>
      {showIcons ? (
        <Image
          imageStyle={{
            height: "80%",
            width: "80%",
            marginLeft: "2rem",
            marginTop: "2rem",
          }}
          src={image}
          alt="image"
        />
      ) : (
        <Image src={image} alt="image" />
      )}
      <CardContent sx={{ textAlign: "center" }}>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          color="#151875"
          sx={{
            display: "inline",
            fontSize: "15px",
            fontFamily: "Josefin Sans",
            textTransform: "capitalize",
          }}
        >
          {name}
        </Typography>
        <Typography
          variant="body2"
          color="#FB2448"
          sx={{
            display: "inline",
            fontSize: "16px",
            fontFamily: "Josefin Sans",
            marginLeft: "0.5rem",
            marginTop: "0.15rem",
            float: "right",
          }}
        >
          {price ? `$${price}` : ""}
        </Typography>
      </CardContent>
      {showIcons ? (
        <>
          <Box sx={{ position: "relative" }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                position: "absolute",
                top: "-120px",
                left: "10px",
              }}
            >
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
          </Box>
        </>
      ) : null}
    </Card>
  );
}
