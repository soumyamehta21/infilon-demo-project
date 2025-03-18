import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    neutral: {
      0: "#ffffff",
      1: "#dfdfdf",
      2: "#fcfcfb",
      3: "#fafafa",
      4: "#f9f9f8",
      5: "#f7f7f6",
      10: "#dfdedd",
      20: "#c6c5c3",
      30: "#aeadaa",
      40: "#969491",
      50: "#7d7b77",
      60: "#65625e",
      70: "#4d4a45",
      80: "#34312b",
      90: "#1c1812",
      100: "#000000",
    },
    tan: {
      lighter: "#f1ece1",
      light: "#e4d9c3",
      default: "#ddcfb4",
      dark: "#b1a690",
      darker: "#857c6c",
    },
    brown: {
      lighter: "#978f84",
      light: "#74695b",
      default: "#514432",
      dark: "#31291e",
      darker: "#201b14",
    },
  },
  typography: {
    accent: "'Gluten', sans-serif",
    default: "'Inter', sans-serif",
    h1: {
      fontSize: "3.5rem",
      fontWeight: 600,
      lineHeight: 1.125,
    },
    h2: {
      fontSize: "3rem",
      fontWeight: 600,
      lineHeight: 1.125,
    },
    h3: {
      fontSize: "2.5rem",
      fontWeight: 600,
      lineHeight: 1.25,
    },
    h4: {
      fontSize: "2rem",
      fontWeight: 600,
      lineHeight: 1.25,
    },
    body1: {
      fontSize: "1.5rem",
      fontWeight: 400,
      lineHeight: 1.5,
    },
    body2: {
      fontSize: "1.25rem",
      fontWeight: 400,
      lineHeight: 1.5,
    },
    body3: {
      fontSize: "1rem",
      fontWeight: 400,
      lineHeight: 1.5,
    },
    body4: {
      fontSize: "0.875rem",
      fontWeight: 400,
      lineHeight: 1.5,
    },
    caption: {
      fontSize: "0.75rem",
      fontWeight: 400,
      lineHeight: 1.5,
    },
  },
  spacing: 8,
  breakpoints: {
    values: {
      xs: 480,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
    },
  },
  shape: {
    borderRadius: 8,
  },
});

export default theme;
