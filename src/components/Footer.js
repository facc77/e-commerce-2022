import React from "react";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Button from "@mui/material/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    fontSize: "44px !important",
    fontFamily: "Josefin Sans !important",
  },
});

const Footer = () => {
  const classes = useStyles();
  return (
    <>
      <Box sx={{ backgroundColor: "#EEEFFB" }}>
        <Grid container>
          <Grid item container xs={6}>
            <Grid item xs={6} sx={{ padding: "5rem" }}>
              <Typography sx={{ fontSize: "32px", fontFamily: "Josefin Sans" }}>
                Hekto
              </Typography>
              <Typography
                mt={3}
                sx={{ color: "#8A8FB9", textTransform: "capitalize" }}
              >
                Contact Info 17 Princess Road, London, Greater London NW1 8JR,
                UK
              </Typography>
            </Grid>
            <Grid item xs={6} sx={{ padding: "3rem" }}>
              <List>
                <ListItem disablePadding>
                  <Typography
                    sx={{ fontSize: "25px", fontFamily: "Josefin Sans" }}
                  >
                    Categories
                  </Typography>
                </ListItem>
                <ListItem disablePadding>
                  <Link to="/login">
                    <Button
                      sx={{ color: "#8A8FB9", textTransform: "capitalize" }}
                    >
                      Laptops & Computers
                    </Button>
                  </Link>
                </ListItem>
                <ListItem disablePadding>
                  <Link to="/login">
                    <Button
                      sx={{ color: "#8A8FB9", textTransform: "capitalize" }}
                    >
                      Cameras & Photography
                    </Button>
                  </Link>
                </ListItem>
                <ListItem disablePadding>
                  <Link to="/login">
                    <Button
                      sx={{ color: "#8A8FB9", textTransform: "capitalize" }}
                    >
                      Smart Phones & Tablets
                    </Button>
                  </Link>
                </ListItem>
                <ListItem disablePadding>
                  <Link to="/login">
                    <Button
                      sx={{ color: "#8A8FB9", textTransform: "capitalize" }}
                    >
                      Video Games & Consoles
                    </Button>
                  </Link>
                </ListItem>
                <ListItem disablePadding>
                  <Link to="/login">
                    <Button
                      sx={{ color: "#8A8FB9", textTransform: "capitalize" }}
                    >
                      Waterproof Headphones
                    </Button>
                  </Link>
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </Grid>
      </Box>

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
    </>
  );
};

export default Footer;
