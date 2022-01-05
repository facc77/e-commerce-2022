import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Image from "material-ui-image";

export default function MediaCard({
  name,
  image,
  precioTotal,
  precioDescuento,
}) {
  return (
    <Card sx={{ width: 300, m: "3rem" }}>
      <Image sx={{ height: "200px", width: "300px" }} src={image} />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          color="#151875"
          sx={{
            display: "inline",
            fontSize: "17px",
            fontFamily: "Josefin Sans",
          }}
        >
          {name}
        </Typography>
        <Typography
          variant="body2"
          color="#FB2448"
          sx={{
            display: "inline",
            fontSize: "17px",
            fontFamily: "Josefin Sans",
            textDecoration: "line-through",
            marginLeft: "1rem",
            float: "right",
          }}
        >
          ${precioTotal}
        </Typography>
        <Typography
          variant="body2"
          color="#151875"
          sx={{
            display: "inline",
            fontSize: "17px",
            fontFamily: "Josefin Sans",
            float: "right",
          }}
        >
          ${precioTotal}
        </Typography>
      </CardContent>
    </Card>
  );
}
