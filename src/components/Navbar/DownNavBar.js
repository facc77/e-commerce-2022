import * as React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";

const Search = styled("div")(({ theme }) => ({
  display: "flex",
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

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
    fontFamily: ["Lato", "Josefin Sans"].join(","),
  },
});

const pages = ["home", "productos", "compras", "contacto"];

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
      <AppBar position="static" style={{ background: "#fff" }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box
              sx={{
                flexGrow: { xs: 0, sm: 0, md: 1 },
                display: { xs: "flex", md: "none" },
              }}
            >
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
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
                  <MenuItem
                    component={Link}
                    to={page === "home" ? "/" : `${page}`}
                    key={page}
                    onClick={handleCloseNavMenu}
                  >
                    <Typography
                      textAlign="center"
                      sx={{ textTransform: "capitalize" }}
                    >
                      {page}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Box
              sx={{
                flexGrow: { xs: 0, sm: 0, md: 1 },
                display: { md: "flex" },
                justifyContent: "space-around",
                color: "#0D0E43",
              }}
            >
              <Box
                sx={{
                  display: {
                    xs: "none",
                    md: "flex",
                  },
                }}
              >
                <Typography
                  variant="h6"
                  noWrap
                  component="div"
                  sx={{
                    display: "inline",
                    fontSize: "34px",
                    fontFamily: "Josefin Sans",
                  }}
                >
                  Hekto
                </Typography>
                {pages.map((page) => (
                  <MenuItem
                    component={Link}
                    to={page === "home" ? "/" : `${page}`}
                    sx={{
                      mt: "0.5rem",
                      height: "40px",
                      padding: "0px",
                    }}
                  >
                    <Button
                      sx={{
                        color: "#0D0E43",
                        fontFamily: "Lato",
                        fontSize: "16px",
                        textTransform: "capitalize",
                      }}
                    >
                      {page}
                    </Button>
                  </MenuItem>
                ))}
              </Box>
              <Box
                sx={{
                  color: "#0D0E43",
                  display: "flex",
                  margin: { xs: "0" },
                }}
              >
                <Search>
                  <SearchIconWrapper>
                    <SearchIcon
                      sx={{
                        backgroundColor: "#FB2E86",
                        padding: "8px",
                      }}
                    />
                  </SearchIconWrapper>
                  <StyledInputBase
                    sx={{ color: "#0D0E43", display: "flex", ml: "20px" }}
                    placeholder="Buscar…"
                    inputProps={{ "aria-label": "search" }}
                  />
                </Search>
              </Box>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
};
export default ResponsiveAppBar;
