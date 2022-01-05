import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button, Box, Typography } from "@mui/material";
import Image from "../../img/NotFound.png";

function CarouselHome(props) {
  var items = [
    {
      name: "Titulo nro #1",
      description: "Aprovecha la promo!",
      image: Image,
    },
    {
      name: "Titulo nro #2",
      description: "No te lo podes perder!",
      image: Image,
    },
  ];

  return (
    <Carousel sx={{ height: "450px" }}>
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
        height: "450px",
        backgroundImage: `url(${props.item.image})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-end",
      }}
    >
      <Box sx={{ marginBottom: "4rem" }}>
        <Typography
          sx={{
            display: "inline",
            fontSize: "34px",
            fontFamily: "Josefin Sans",
          }}
        >
          {props.item.name}
        </Typography>
        <Typography
          sx={{
            fontSize: "17px",
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
