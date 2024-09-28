import React, { useState } from "react";
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import { Link, NavLink} from "react-router-dom";
import "../../styles/HeaderStyle.css";
import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const menuItems = [
    { href: "/", title: "Home" },
    { href: "/menu", title: "Menu" },
    { href: "/about", title: "About" },
    { href: "/contact", title: "Contact" },
  ];

  // handle menu click
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // menu drawer
  const drawer = (
    <>
      <Link to="/home" className="homeLink">
        <Typography
          color={"goldenrod"}
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, textAlign: "center", my: 2 }}
        >
          <FastfoodIcon />
          Dawaat Restaurant
          <Divider />
        </Typography>
      </Link>

      <ul className="mobile-navigation">
        {menuItems.map((item) => (
          <li>
            <Link to={item.href}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );

  return (
    <>
      <Box>
        <AppBar component="nav" sx={{ bgcolor: "black" }}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              sx={{ mr: 2, display: { sm: "none" } }}
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
            <Box className="link-container">
              <Link to="/" className="homeLink">
                <Typography
                  color={"goldenrod"}
                  variant="h6"
                  component="div"
                  sx={{ flexGrow: 1 }}
                >
                  <FastfoodIcon />
                  Dawaat Restaurant
                </Typography>
              </Link>
            </Box>

            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <ul className="navigation-menu">
                {menuItems.map((item) => (
                  <li>
                    <NavLink activeClassName="active" to={item.href}>{item.title}</NavLink>
                  </li>
                ))}
              </ul>
            </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: "200px",
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Box>
          <Toolbar />
        </Box>
      </Box>
    </>
  );
};

export default Header;
