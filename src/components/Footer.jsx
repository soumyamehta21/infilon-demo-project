import { Box, Typography, Link, IconButton } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { footerNav } from "../routes";
import logo from "../assets/footer-logo.svg";
import Facebook from "../assets/facebook.svg";
import Instagram from "../assets/instagram.svg";
import LinkedIn from "../assets/linkedin.svg";

const Footer = () => {
  const theme = useTheme();

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: theme.palette.neutral[90],
        padding: {
          xs: "24px 16px",
          md: "24px 24px",
          lg: "24px 24px",
          xl: "24px 0",
        },
      }}
    >
      <Box
        sx={{
          maxWidth: "1024px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: "24px" }}>
          <img src={logo} alt="Logo" width="50" height="50" />

          <Box sx={{ display: "flex", gap: "24px" }}>
            {footerNav.map(({ name, url }, index) => (
              <Link
                key={index}
                href={url}
                underline="none"
                sx={{
                  color: theme.palette.neutral[5],
                  fontFamily: theme.typography.default,
                  fontSize: theme.typography.body3.fontSize,
                  fontWeight: theme.typography.body3.fontWeight,
                  lineHeight: theme.typography.body3.lineHeight,
                  "&:hover": { color: theme.palette.primary.main },
                }}
              >
                {name}
              </Link>
            ))}
          </Box>
        </Box>

        <Box sx={{ display: "flex", gap: "8px" }}>
          <IconButton sx={{ height: "40px", width: "40px" }} color="inherit">
            <img src={Facebook} alt="Facebook" width="24" height="24" />
          </IconButton>
          <IconButton sx={{ height: "40px", width: "40px" }} color="inherit">
            <img src={Instagram} alt="Facebook" width="24" height="24" />
          </IconButton>
          <IconButton sx={{ height: "40px", width: "40px" }} color="inherit">
            <img src={LinkedIn} alt="Facebook" width="24" height="24" />
          </IconButton>
        </Box>
      </Box>

      <Typography
        sx={{
          textAlign: "center",
          marginTop: "16px",
          fontFamily: theme.typography.default,
          fontSize: theme.typography.caption.fontSize,
          fontWeight: theme.typography.caption.fontWeight,
          lineHeight: theme.typography.caption.lineHeight,
          color: theme.palette.neutral[30],
        }}
      >
        © 2024 Central Texas Fly Fishing. All Rights Reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
