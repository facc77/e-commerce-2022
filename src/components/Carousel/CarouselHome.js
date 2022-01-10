import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Box, Typography } from "@mui/material";
import Image from "./xbox.jpg";
import Image2 from "./play.jpg";

function CarouselHome(props) {
  var items = [
    {
      name: "Lo último en consolas",
      description: "Aprovecha descuentos!",
      image: Image,
    },
    {
      name: "Playstation 5",
      description: "Llegó el último modelo!",
      image: Image2,
    },
  ];

  return (
    <Carousel sx={{ height: { xs: "240px", md: "450px" } }}>
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

function Item(props) {
  return (
    <Paper
      sx={{
        height: { xs: "240px", md: "450px" },
        backgroundImage: `url(${props.item.image})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-end",
      }}
    >
      <Box
        sx={{
          marginBottom: { xs: "1rem", md: "4rem" },
          textAlign: "center",
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "25px", md: "34px" },
            fontFamily: "Josefin Sans",
          }}
        >
          {props.item.name}
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "14px", md: "17px" },
            fontFamily: "Lato",
          }}
        >
          {props.item.description}
        </Typography>
      </Box>
    </Paper>
  );
}

export default CarouselHome;
