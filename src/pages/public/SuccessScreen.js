import React, { useEffect, useState } from "react";
import SectionBar from "../../components/SectionBar";
import Box from "@mui/material/Box";
import Image from "material-ui-image";
import Success from "../../img/success.png";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { getOrder } from "../../services/stripe.service.js";

const SuccessScreen = () => {
  const [order, setOrder] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
    const id = localStorage.getItem("uid");
    const getData = async () => {
      const resp = await getOrder(id);
      setOrder(resp.resp.data);
    };
    getData();
  }, []);

  return (
    <>
      <SectionBar page="Compra Completada!" />
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
            width: { xs: "65%", md: "50%" },
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
            Tu compra fue exitosa!
          </Typography>
          <Typography
            sx={{
              fontFamily: "Lato",
              fontSize: "16px",
              color: "#8D92A7",
              textAlign: "center",
            }}
          >
            La compra por el monto de
            <Typography sx={{ color: "#FB2E86", display: "inline" }}>
              {" "}
              ${order.amount}{" "}
            </Typography>
            fue completada! .La misma está siendo procesada y será completada
            entre a 3-6 horas. Recibirás una confirmación en tu email cuando
            finalice el proceso.
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
              onClick={() => {
                localStorage.setItem("uid", "");
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

export default SuccessScreen;
