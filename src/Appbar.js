import React, { useState } from "react";

import { Outlet, Link } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuList from "@mui/material/MenuList";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import AddCardIcon from "@mui/icons-material/AddCard";

import CenterFocusWeakIcon from "@mui/icons-material/CenterFocusWeak";

import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";

import LibraryAddCheckIcon from '@mui/icons-material/LibraryAddCheck';
import SettingsIcon from '@mui/icons-material/Settings';
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";


import AvatImage from "./images/2.jpg";

const settings = ["Profile", "Account", "Dashboard", "Logout"];

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(3.4)",
      opacity: 0,
    },
  },
}));

const Appbar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Link
              style={{
                textDecoration: "none",
                color: "inherit",
                display: "inherit",
              }}
              to=""
            >
              <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
              <Typography
                variant="h6"
                noWrap
                component="a"
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                LOGO
              </Typography>
            </Link>

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
                sx={{
                  minWidth: 500,
                  display: { xs: "block", md: "none" },
                }}
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
              >
                <Box sx={{ minWidth: 115, px: 1 }}>
                  <MenuList>
                    <MenuItem onClick={handleCloseNavMenu}>
                      <Link to="contact"> Contact </Link>
                    </MenuItem>
                    <MenuItem onClick={handleCloseNavMenu}>
                      <Link to="product">Product</Link>
                    </MenuItem>
                    <MenuItem onClick={handleCloseNavMenu}>
                      <Link to="blog">Blogs</Link>
                    </MenuItem>
                    <MenuItem onClick={handleCloseNavMenu}>
                      <Link to="">Species</Link>
                    </MenuItem>
                  </MenuList>
                </Box>
              </Menu>
            </Box>
            <Link
              to=""
              style={{
                textDecoration: "none",
                display: "inherit",
                color: "inherit",
                flexGrow: 1,
              }}
            >
              <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
              <Typography
                variant="h5"
                noWrap
                component="a"
                sx={{
                  mr: 2,
                  display: { xs: "flex", md: "none" },
                  flexGrow: 1,
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                LOGO
              </Typography>
            </Link>
            <Box
              sx={{
                flexGrow: 1,
                textDecoration: "none",
                display: { xs: "none", md: "flex" },
              }}
            >
              <Link to="contact">
                <Button sx={{ color: "white" }}>Contact</Button>
              </Link>

              <Link to="product">
                <Button sx={{ color: "white" }}>Product</Button>
              </Link>

              <Link to="blog">
                <Button sx={{ color: "white" }}>Blog</Button>
              </Link>

              <Link to="">
                <Button sx={{ color: "white" }}>Species</Button>
              </Link>
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <StyledBadge
                    overlap="circular"
                    anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                    variant="dot"
                  >
                    <Avatar alt="Remy" src={AvatImage} />
                  </StyledBadge>
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
                <Box sx={{ width: 135 }}>
                  <MenuList>
                    <MenuItem>
                      <ListItemIcon>
                        <AddCardIcon fontSize="small" />
                      </ListItemIcon>
                      Inbox
                    </MenuItem>
                    <MenuItem>
                      <ListItemIcon>
                        <CenterFocusWeakIcon fontSize="small" />
                      </ListItemIcon>
                      Drafts
                    </MenuItem>
                    <MenuItem>
                      <ListItemIcon>
                        <LibraryAddCheckIcon  fontSize="small" />
                      </ListItemIcon>
                      Profile
                    </MenuItem>
                    <MenuItem>
                      <ListItemIcon>
                        <SettingsIcon fontSize="small" />
                      </ListItemIcon>
                      <Typography >Settings</Typography>
                      
                    </MenuItem>
                  </MenuList>
                </Box>
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Outlet />
    </>
  );
};

export default Appbar;
