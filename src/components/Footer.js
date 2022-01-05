import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <Box
      sx={{
        height: "60px",
        backgroundColor: "#E7E4F8",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <Typography color="#9DA0AE" fontSize="16px">
        © Todos los derechos reservados
      </Typography>
      <Box>
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
  );
};

export default Footer;
