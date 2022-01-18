import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Image from "material-ui-image";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MailIcon from "@mui/icons-material/Mail";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import { Badge, Button, ButtonGroup } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setLogout } from "../../redux/reducers/authReducer";
const settings = ["Backoffice", "Logout"];
const NavBar = () => {
  const { logged, user } = useSelector((state) => state.auth);
  const ProductsCart = useSelector((state) => state.products.cart);
  const dispatch = useDispatch();
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleClick = (e) => {
    if ("Logout") {
      dispatch(setLogout());
    }
  };

  const handleCartMenu = () => {
    console.log("menu click");
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <MailIcon sx={{ display: { xs: "none", md: "flex" } }} />
          <Typography
            variant="h6"
            noWrap
            component="div"
            ml={1}
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            hekto@gmail.com
          </Typography>
          <LocalPhoneIcon sx={{ ml: 3, display: { xs: "none", md: "flex" } }} />
          <Typography
            variant="h6"
            noWrap
            component="div"
            ml={1}
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            11 3423 2342
          </Typography>

          <Typography
            variant="h7"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            hekto@gmail.com
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {}
          </Box>

          {/* <Box mr={2} sx={{ flexGrow: 0 }}>
            <IconButton
              size="large"
              aria-label="show 4 new favorites"
              color="inherit"
            >
              <Badge badgeContent={4} color="error">
                <FavoriteIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new shops"
              color="inherit"
            >
              <Badge badgeContent={ProductsCart.length} color="error">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          </Box> */}
          <Box mr={2} sx={{ flexGrow: 0 }}>
            <Tooltip title="Abrir Carrito">
              <IconButton
                size="large"
                onClick={handleOpenUserMenu}
                color="inherit"
                sx={{ p: 0 }}
              >
                <Badge badgeContent={ProductsCart.length} color="error">
                  <ShoppingCartIcon />
                </Badge>
              </IconButton>
            </Tooltip>
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
              {ProductsCart.map((product) => (
                <MenuItem key={product} onClick={handleCartMenu}>
                  <Grid container>
                    <Grid item sx={{ heigth: "65px", width: "65px" }}>
                      <Image
                        imageStyle={{
                          height: "100%",
                          width: "100%",
                        }}
                        src={product.img}
                        alt="image"
                      />
                    </Grid>
                    <Grid>
                      <Typography
                        sx={{ fontFamily: "Lato", textTransform: "capitalize" }}
                      >
                        {product.name}
                      </Typography>
                      <Typography
                        color="#FB2448"
                        sx={{
                          fontFamily: "Lato",
                          textTransform: "capitalize",
                          float: "right",
                          fontSize: "14px",
                        }}
                      >
                        ${product.price}
                      </Typography>
                    </Grid>
                  </Grid>
                </MenuItem>
              ))}
              <MenuItem component={Link} to="/carrito">
                <Typography
                  sx={{
                    fontFamily: "Lato",
                  }}
                >
                  Ver todo el carrito
                </Typography>
              </MenuItem>
            </Menu>
          </Box>

          {logged ? (
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt={user.name} src={user.img} />
                </IconButton>
              </Tooltip>
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
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={(e) => handleClick(e)}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          ) : (
            <ButtonGroup variant="text">
              <Link
                to="/auth/login"
                style={{ textDecoration: "none", color: "white" }}
              >
                <Button color="inherit">Login</Button>
              </Link>
              <Link
                to="/auth/register"
                style={{ textDecoration: "none", color: "white" }}
              >
                <Button
                  color="inherit"
                  sx={{ ml: 3, display: { xs: "none", md: "flex" } }}
                >
                  Register
                </Button>
              </Link>
            </ButtonGroup>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;
