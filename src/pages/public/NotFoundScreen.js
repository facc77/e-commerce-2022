import React from "react";
import SectionBar from "../../components/SectionBar";
import NotFound from "../../img/NotFound.png";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Image from "material-ui-image";

const NotFoundScreen = () => {
  return (
    <>
      <SectionBar page="404 Not Found" />
      <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <Box
          sx={{
            height: "600px",
            width: "500px",
          }}
        >
          <Image src={NotFound} />
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Button
              sx={{
                color: "#fff",
                textTransform: "lowercase",
                backgroundColor: "#FB2E86",
                fontFamily: "Lato",
                fontSize: "16px",
                "&:hover": {
                  backgroundColor: "#FB2E86",
                },
              }}
              type="button"
            >
              Regresar a Home
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default NotFoundScreen;
