import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Image from "material-ui-image";

export default function MediaCard({ image }) {
  return (
    <Card sx={{ maxWidth: 220, margin: "2rem" }}>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box sx={{ height: "120px", width: "120px" }}>
          <Image src={image} />
        </Box>
      </Box>
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{
            fontFamily: "Josefin Sans",
            fontSize: "22px",
            color: "#151875",
          }}
        >
          24/7 Support
        </Typography>
        <Typography
          variant="body2"
          color="#D3D3D3"
          sx={{ fontWeight: "bold", fontSize: "16px" }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Restatis
          igitur vos
        </Typography>
      </CardContent>
    </Card>
  );
}
