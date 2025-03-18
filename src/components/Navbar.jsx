import React from "react";
import { AppBar, Toolbar, Tabs, Tab, Box } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import { mainNav } from "../routes";
import logo from "../assets/navigation-logo.svg";

const Navbar = () => {
  const location = useLocation();
  const theme = useTheme();

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
            }}
          >
            <img src={logo} alt="Logo" style={{ height: "40px" }} />
          </Box>

          <Tabs
            value={location.pathname}
            textColor="inherit"
            indicatorColor={false}
            sx={{
              minHeight: "24px",
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
                  "&:focus": {
                    border: `2px solid ${theme.palette.neutral[90]}`,
                    borderRadius: "5px",
                    outline: "none",
                  },
                }}
              />
            ))}
          </Tabs>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
