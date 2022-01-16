import React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import GroupIcon from "@mui/icons-material/Group";
import CategoryIcon from "@mui/icons-material/Category";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import { Link } from "react-router-dom";

const SideBar = ({ anchor, toggleDrawer }) => {
  return (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <Link to="/backoffice/users">
          <ListItem button>
            <ListItemIcon>
              <GroupIcon />
            </ListItemIcon>
            <ListItemText primary={"Users"} />
          </ListItem>
        </Link>
        <Link to="/backoffice/categories">
          <ListItem button>
            <ListItemIcon>
              <CategoryIcon />
            </ListItemIcon>
            <ListItemText primary={"Categories"} />
          </ListItem>
        </Link>
        <Link to="/backoffice/products">
          <ListItem button>
            <ListItemIcon>
              <LocalMallIcon />
            </ListItemIcon>
            <ListItemText primary={"Products"} />
          </ListItem>
        </Link>
      </List>
    </Box>
  );
};

export default SideBar;
