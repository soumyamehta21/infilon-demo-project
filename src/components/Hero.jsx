import { Box, Typography, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import fishingImage from "../assets/fishing.png";

const HeroSection = () => {
  const theme = useTheme();
  return (
    <div style={{ backgroundColor: theme.palette.neutral[2] }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          maxWidth: "1024px",
          margin: "0 auto",
          padding: {
            xs: "80px 16px",
            md: "80px 24px",
            lg: "80px 24px",
            xl: "80px 0",
          },
          backgroundColor: theme.palette.neutral[2],
        }}
      >
        <Box sx={{ maxWidth: "600px" }}>
          <Typography
            sx={{
              fontFamily: theme.typography.default,
              fontSize: {
                xs: theme.typography.h3.fontSize,
                md: theme.typography.h2.fontSize,
                lg: theme.typography.h1.fontSize,
                xl: theme.typography.h1.fontSize,
              },
              fontWeight: theme.typography.h1.fontWeight,
              lineHeight: theme.typography.h1.lineHeight,
              marginBottom: "1rem",
              color: theme.palette.neutral[90],
            }}
            gutterBottom
          >
            Central Texas Fly Fishing
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: theme.palette.neutral[60], marginBottom: "1rem" }}
          >
            At lacus vitae nulla sagittis scelerisque nisl. Pellentesque duis
            cursus vestibulum, facilisi ac, sed faucibus.
          </Typography>
          <Button
            variant="contained"
            sx={{
              fontFamily: theme.typography.default,
              fontSize: {
                xs: theme.typography.body4.fontSize,
                md: theme.typography.body4.fontSize,
                lg: theme.typography.body3.fontSize,
                xl: theme.typography.body3.fontSize,
              },
              fontWeight: theme.typography.body3.fontWeight,
              lineHeight: theme.typography.body3.lineHeight,
              backgroundColor: theme.palette.brown.default,
              color: theme.palette.neutral[5],
              borderRadius: "4px",
              padding: "8px 12px",
              position: "relative",
              textTransform: "initial",
              "&:hover": { backgroundColor: "brown.light" },
              "&:focus": {
                border: `2px solid ${theme.palette.neutral[90]}`,
                borderRadius: "5px",
                outline: "none",
                backgroundColor: "brown.default",
              },
              "&:active": { backgroundColor: theme.palette.brown.dark },
            }}
          >
            Get started
          </Button>
        </Box>

        <Box
          component="img"
          src={fishingImage}
          alt="Fishing"
          sx={{
            width: "400px",
            height: "300px",
            display: { xs: "none", md: "block" },
            objectFit: "cover",
          }}
        />
      </Box>
    </div>
  );
};

export default HeroSection;
