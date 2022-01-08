import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MailIcon from '@mui/icons-material/Mail';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { Badge } from '@mui/material';

const settings = ['Backoffice', 'Logout'];
const NavBar = () => {
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
        
          <MailIcon sx={{display:{xs:"none", md:"flex"}}}/>
          <Typography
            variant="h6"
            noWrap
            component="div"
            ml={1}
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            hekto@gmail.com
          </Typography>
          <LocalPhoneIcon  sx={{ml:3, display:{xs:"none", md:"flex"}}} />
          <Typography
            variant="h6"
            noWrap
            component="div"
            ml={1}
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            11 3423 2342
          </Typography>

          
          <Typography
            variant="h7"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            hekto@gmail.com
          </Typography>

        
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {}
          </Box>

          <Box mr={2} sx={{ flexGrow: 0 }}>
            <IconButton size="large" aria-label="show 4 new favorites" color="inherit">
              <Badge badgeContent={4} color="error">
                <FavoriteIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new shops"
              color="inherit"
            >
              <Badge badgeContent={17} color="error">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;


// const pages = [
//   "hekto@gmail.com",
//   "11 3423 2342",
//   "Registro",
//   "Login",
//   "Lista deseos",
// ];