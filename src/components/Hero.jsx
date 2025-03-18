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
          flexDirection: { xs: "column-reverse", sm: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          maxWidth: "1024px",
          margin: "0 auto",
          padding: { sm: "40px 24px", md: "80px 24px", xl: "80px 0" },
          ["@media (max-width:480px)"]: {
            flexDirection: "column-reverse",
            padding: "0",
          },
        }}
      >
        <Box
          sx={{
            maxWidth: "600px",
            padding: { xs: "40px 24px", sm: "0px" },
            ["@media (max-width:480px)"]: {
              padding: "40px 24px",
            },
          }}
        >
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
              textTransform: "initial",
              "&:hover": { backgroundColor: "brown.light" },
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
            width: "100%",
            maxWidth: { xs: "100%", sm: "400px" },
            height: { xs: "auto", sm: "300px" },
            objectFit: "cover",
            marginBottom: { xs: "0px", sm: "0" },
            ["@media (max-width:480px)"]: {
              maxWidth: "100%",
              height: "500px",
              marginBottom: "0px",
            },
          }}
        />
      </Box>
    </div>
  );
};

export default HeroSection;
