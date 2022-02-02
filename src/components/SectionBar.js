import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const SectionBar = ({ page }) => {
  return (
    <>
      <Box
        sx={{
          height: "200px",
          backgroundColor: "#F6F5FF",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Box sx={{ marginLeft: { xs: "2rem", md: "13rem" } }}>
          <Typography
            fontFamily="Josefin Sans"
            component="h1"
            variant="h4"
            mt={2}
          >
            {page}
          </Typography>
          <Typography
            fontFamily="Lato"
            component="h1"
            variant="h4"
            fontSize="16px"
            mt={1}
          >
            Home . Pages .
            <Typography
              display="inline"
              fontFamily="Lato"
              fontSize="16px"
              color="#FB2E86"
            >
              {page}
            </Typography>
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default SectionBar;
