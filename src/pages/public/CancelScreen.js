import React from "react";
import SectionBar from "../../components/SectionBar";
import Box from "@mui/material/Box";
import Image from "material-ui-image";
import Success from "../../img/success.png";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const CancelScreen = () => {
  return (
    <>
      <SectionBar page="Compra Cancelada" />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: { xs: "70%", md: "50%" },
            marginY: "3rem",
          }}
        >
          <Box sx={{ width: "100px", height: "100px" }}>
            <Image
              imageStyle={{
                height: "100%",
                width: "100%",
              }}
              src={Success}
              alt="image"
            />
          </Box>
          <Typography
            sx={{
              fontFamily: "Josefin Sans",
              fontSize: "36px",
              color: "#101750",
              textAlign: "center",
            }}
          >
            Tu compra fue cancelada!
          </Typography>
          <Typography
            sx={{
              fontFamily: "Lato",
              fontSize: "16px",
              color: "#8D92A7",
              textAlign: "center",
            }}
          >
            Sigue visitando nuestros productos o envíanos un mensaje de tener
            alguna duda!
          </Typography>
          <Link to={"/"}>
            <Button
              sx={{
                backgroundColor: "#FF1788",
                fontSize: "16px",
                color: "#ffffff",
                fontFamily: "Lato",
                marginY: "1rem",
                textTransform: "capitalize",
                "&:hover": {
                  textDecoration: "none",
                  backgroundColor: "#FF1788",
                },
              }}
            >
              Seguir comprando
            </Button>
          </Link>
        </Box>
      </Box>
    </>
  );
};

export default CancelScreen;
