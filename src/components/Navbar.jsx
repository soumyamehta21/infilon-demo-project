import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Tabs,
  Tab,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { mainNav } from "../routes";
import logo from "../assets/navigation-logo.svg";
import footerLogo from "../assets/footer-logo.svg";

const Navbar = () => {
  const location = useLocation();
  const theme = useTheme();
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <div style={{ backgroundColor: theme.palette.neutral[2] }}>
      <AppBar
        position="static"
        sx={{
          backgroundColor: theme.palette.neutral[2],
          boxShadow: "none",
          maxWidth: "1024px",
          alignItems: "normal",
          margin: "0 auto",
          padding: { xs: "0px 16px", md: "0px 24px", lg: "0px 24px", xl: "0" },
          ["@media (max-width:480px)"]: {
            padding: "0px 16px",
          },
          "& .MuiToolbar-gutters": {
            padding: "0px",
          },
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: theme.palette.neutral[2],
            border: "none",
          }}
        >
          <Box
            component={Link}
            to="/infilon-demo-project"
            sx={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
              ["@media (max-width:480px)"]: {
                display: "none",
              },
            }}
          >
            <img src={logo} alt="Logo" style={{ height: "40px" }} />
          </Box>

          <Box
            component={Link}
            to="/infilon-demo-project"
            sx={{
              display: "none",
              alignItems: "center",
              textDecoration: "none",
              ["@media (max-width:480px)"]: {
                display: "flex",
              },
            }}
          >
            <img src={footerLogo} alt="Logo" style={{ height: "40px" }} />
          </Box>

          <Tabs
            value={location.pathname}
            textColor="inherit"
            indicatorColor={false}
            sx={{
              minHeight: "24px",
              display: { xs: "none", md: "flex" },
              ["@media (max-width:480px)"]: {
                display: "none",
              },
              "& .MuiTabs-flexContainer": {
                gap: "24px",
              },
              "& .MuiTabs-indicator": {
                backgroundColor: theme.palette.neutral[90],
                height: "2px",
                display: "none",
              },
            }}
          >
            {mainNav.map(({ name, url }) => (
              <Tab
                key={url}
                label={name}
                value={url}
                component={Link}
                to={url}
                sx={{
                  textTransform: "none",
                  fontFamily: theme.typography.default,
                  fontSize: theme.typography.body3.fontSize,
                  fontWeight: theme.typography.body3.fontWeight,
                  lineHeight: theme.typography.body3.lineHeight,
                  padding: "4px 5px",
                  borderRadius: "5px",
                  minHeight: "24px",
                  minWidth: "45px",
                  color: `${theme.palette.neutral[90]}`,
                  "&.Mui-selected": {
                    borderBottom: `2px solid ${theme.palette.neutral[90]}`,
                    borderRadius: "0px",
                  },
                  "&:hover": {
                    borderBottom: `2px solid ${theme.palette.neutral[20]}`,
                    borderRadius: "0px",
                  },
                }}
              />
            ))}
          </Tabs>

          <IconButton
            edge="end"
            aria-label="menu"
            onClick={() => setDrawerOpen(true)}
            sx={{
              display: { xs: "flex", md: "none" },
              ["@media (max-width:480px)"]: {
                display: "flex",
              },
              color: theme.palette.neutral[90],
            }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        sx={{
          "& .MuiDrawer-paper": {
            width: "250px",
            backgroundColor: theme.palette.neutral[2],
          },
        }}
      >
        <Box
          sx={{ display: "flex", justifyContent: "flex-end", padding: "16px" }}
        >
          <IconButton onClick={() => setDrawerOpen(false)}>
            <CloseIcon sx={{ color: theme.palette.neutral[90] }} />
          </IconButton>
        </Box>

        <List>
          {mainNav.map(({ name, url }) => (
            <ListItem
              key={url}
              component={Link}
              to={url}
              onClick={() => setDrawerOpen(false)}
              sx={{
                textDecoration: "none",
                color: theme.palette.neutral[90],
                padding: "12px 24px",
                "&:hover": { backgroundColor: theme.palette.neutral[10] },
              }}
            >
              <ListItemText primary={name} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
};

export default Navbar;
