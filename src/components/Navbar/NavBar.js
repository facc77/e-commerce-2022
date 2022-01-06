import * as React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const theme = createTheme({
  palette: {
    neutral: {
      main: "#FB2E86",
      contrastText: "#fff",
    },
    navbar: {
      main: "#7E33E0",
    },
  },
  typography: {
    button: {
      textTransform: "lowercase",
    },
  },
});

const pages = [
  "hekto@gmail.com",
  "11 3423 2342",
  "Registro",
  "Login",
  "Lista deseos",
];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static" style={{ background: "#7E33E0" }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
            >
              LOGO
            </Typography>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "space-around",
              }}
            >
              <Box sx={{ color: "white", display: "inline" }}>
                <Button sx={{ color: "white" }}>
                  <MailOutlineIcon sx={{ fontSize: 20 }} />
                  hekto@gmail.com
                </Button>
                <Button sx={{ color: "white" }}>
                  <LocalPhoneOutlinedIcon sx={{ fontSize: 20 }} />
                  11 3423 2342
                </Button>
              </Box>
              <Box sx={{ color: "white", display: "inline" }}>
                <Link to="/register">
                  <Button sx={{ color: "white", textTransform: "capitalize" }}>
                    Registro
                  </Button>
                </Link>
                <Link to="/login">
                  <Button sx={{ color: "white", textTransform: "capitalize" }}>
                    Login
                  </Button>
                </Link>
                <Button sx={{ color: "white", textTransform: "capitalize" }}>
                  Lista deseos
                  <FavoriteBorderOutlinedIcon sx={{ fontSize: 20 }} />
                </Button>
                <Button sx={{ color: "white" }}>
                  <Badge badgeContent={4} color="error">
                    <ShoppingCartOutlinedIcon sx={{ fontSize: 25 }} />
                  </Badge>
                </Button>
              </Box>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
};
export default ResponsiveAppBar;
