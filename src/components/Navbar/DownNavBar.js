import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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
import { useDispatch } from "react-redux";
import { setEditCate } from "../../redux/reducers/categorieReducer";

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
const categories = [
  "Televisores",
  "Laptops & Computadoras",
  "Camaras & Fotografias",
  "Smartphones & Tablets",
  "Consolas & Videojuegos",
];

const ResponsiveAppBar = () => {
  let navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const dispatch = useDispatch();
  const callDispatch = (name) => {
    console.log(name);
    dispatch(setEditCate(name));
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const [search, setSearch] = useState("");
  console.log(search);

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/busqueda/${search}`);
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
                <MenuItem>
                  <Box sx={{ flexGrow: 0 }}>
                    <IconButton
                      onClick={handleOpenUserMenu}
                      sx={{ p: "0.5rem", mt: "0.5rem", borderRadius: "0px" }}
                    >
                      <Typography
                        sx={{
                          color: "#0D0E43",
                          fontFamily: "Lato",
                          fontSize: "16px",
                          textTransform: "capitalize",
                        }}
                      >
                        categorias
                      </Typography>
                    </IconButton>
                    <Menu
                      sx={{ mt: "45px" }}
                      id="menu-appbar"
                      anchorEl={anchorElUser}
                      anchorOrigin={{
                        vertical: "top",
                        horizontal: "right",
                      }}
                      keepMounted
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "right",
                      }}
                      open={Boolean(anchorElUser)}
                      onClose={handleCloseUserMenu}
                    >
                      {categories.map((categorie) => (
                        <MenuItem
                          component={Link}
                          to={`/productos/${categorie}`}
                          key={categorie}
                          onClick={() => callDispatch(categorie.toUpperCase())}
                        >
                          <Typography textAlign="center">
                            {categorie}
                          </Typography>
                        </MenuItem>
                      ))}
                    </Menu>
                  </Box>
                </MenuItem>
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
                    key={page}
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
                <Box sx={{ flexGrow: 0 }}>
                  <IconButton
                    onClick={handleOpenUserMenu}
                    sx={{ p: "0.5rem", mt: "0.5rem", borderRadius: "0px" }}
                  >
                    <Typography
                      sx={{
                        color: "#0D0E43",
                        fontFamily: "Lato",
                        fontSize: "16px",
                        textTransform: "capitalize",
                      }}
                    >
                      categorias
                    </Typography>
                  </IconButton>
                  <Menu
                    sx={{ mt: "45px" }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                  >
                    {categories.map((categorie) => (
                      <MenuItem
                        component={Link}
                        to={"/productos"}
                        key={categorie}
                        /* onClick={handleCloseNavMenu} */
                        onClick={() =>
                          callDispatch(categorie.name.toUpperCase())
                        }
                      >
                        <Typography textAlign="center">{categorie}</Typography>
                      </MenuItem>
                    ))}
                  </Menu>
                </Box>
              </Box>
              <Box
                sx={{
                  color: "#0D0E43",
                  display: "flex",
                  margin: { xs: "0" },
                }}
                component="form"
                onSubmit={(e) => handleSearch(e)}
              >
                <Search>
                  <SearchIconWrapper>
                    <SearchIcon
                      sx={{
                        backgroundColor: "#FB2E86",
                        padding: "8px",
                      }}
                      type="submit"
                    />
                  </SearchIconWrapper>
                  <StyledInputBase
                    sx={{ color: "#0D0E43", display: "flex", ml: "20px" }}
                    placeholder="Buscar…"
                    inputProps={{ "aria-label": "search" }}
                    onChange={(event) => setSearch(event.target.value)}
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
