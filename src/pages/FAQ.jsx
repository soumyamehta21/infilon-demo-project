import { Box, Typography, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
const FAQ = () => {
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
          padding: "80px 0",
          backgroundColor: theme.palette.neutral[2],
        }}
      >
        <Typography
          sx={{
            fontFamily: theme.typography.default,
            fontSize: theme.typography.h1.fontSize,
            fontWeight: theme.typography.h1.fontWeight,
            lineHeight: theme.typography.h1.lineHeight,
            marginBottom: "1rem",
            color: theme.palette.neutral[90],
            margin: "0 auto",
          }}
          gutterBottom
        >
          FAQ
        </Typography>
      </Box>
    </div>
  );
};
export default FAQ;
