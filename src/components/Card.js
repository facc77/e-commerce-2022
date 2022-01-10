import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Image from "material-ui-image";

export default function MediaCard({ name, image, price }) {
  return (
    <Card sx={{ width: 300, m: "3rem" }}>
      <Image sx={{ height: "200px", width: "300px" }} src={image} alt="image" />
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
            marginLeft: "1rem",
            float: "right",
          }}
        >
          ${price}
        </Typography>
      </CardContent>
    </Card>
  );
}
