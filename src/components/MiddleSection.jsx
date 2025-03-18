import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useTheme } from "@mui/material/styles";
import fishes from "../assets/fishes.png";

const MiddleSection = () => {
  const theme = useTheme();

  const contentData = [
    {
      title: "Fly Fishing Experiences",
      heading: "Explore Fly Fishing",
      description:
        "Proin nibh nisl condimentum id venenatis a condimentum vitae sapien. Tellus in metus vulputate eu scelerisque felis.",
      image: fishes,
      alt: "Fishes",
    },
    {
      title: "Gear Up and Catch More",
      heading: "Explore Fly Fishing",
      description:
        "Proin nibh nisl condimentum id venenatis a condimentum vitae sapien. Tellus in metus vulputate eu scelerisque felis.",
      image: fishes,
      alt: "Fishes",
    },
    {
      title: "Explore Fly Fishing",
      heading: "Explore Fly Fishing",
      description:
        "Proin nibh nisl condimentum id venenatis a condimentum vitae sapien. Tellus in metus vulputate eu scelerisque felis.",
      image: fishes,
      alt: "Fishes",
    },
  ];

  return (
    <Box sx={{ backgroundColor: theme.palette.tan.light }}>
      <Box
        sx={{
          maxWidth: "1024px",
          margin: "0 auto",
          padding: {
            xs: "40px 24px",
            md: "80px 24px",
            lg: "80px 24px",
            xl: "80px 0",
          },
          ["@media (max-width:480px)"]: {
            padding: "40px 24px",
          },
        }}
      >
        <Typography
          sx={{
            fontFamily: theme.typography.default,
            fontSize: {
              xs: theme.typography.h4.fontSize,
              md: theme.typography.h3.fontSize,
              lg: theme.typography.h2.fontSize,
              xl: theme.typography.h2.fontSize,
            },
            fontWeight: theme.typography.h2.fontWeight,
            lineHeight: theme.typography.h2.lineHeight,
            marginBottom: "1.5rem",
            color: theme.palette.neutral[90],
          }}
        >
          Featured options
        </Typography>

        <Box
          sx={{
            display: { xs: "flex", sm: "none" },
            flexDirection: "column",
            gap: "24px",
            ["@media (min-width:481px)"]: {
              display: "none",
            },
            ["@media (max-width:480px)"]: {
              display: "flex",
            },
          }}
        >
          {contentData.map((item, index) => (
            <Box
              key={`card-${index}`}
              sx={{
                position: "relative",
                padding: "24px",
                minHeight: "266px",
                maxHeight: "266px",
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-start",
                flexDirection: "column",
                height: "auto",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  opacity: "0.3",
                  backgroundImage: `url(${item.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                },
              }}
            >
              <Typography
                sx={{
                  fontSize: theme.typography.h4.fontSize,
                  fontWeight: theme.typography.h4.fontWeight,
                  color: theme.palette.neutral[90],
                  marginBottom: "8px",
                }}
              >
                {item.title}
              </Typography>
              <Typography
                sx={{
                  color: theme.palette.neutral[60],
                  fontSize: theme.typography.body3.fontSize,
                  fontWeight: theme.typography.body3.fontWeight,
                  marginBottom: "16px",
                }}
              >
                {item.description}
              </Typography>
              <Button
                variant="outlined"
                sx={{
                  fontSize: theme.typography.body4.fontSize,
                  fontWeight: theme.typography.body4.fontWeight,
                  textTransform: "none",
                  color: theme.palette.neutral[90],
                  backgroundColor: theme.palette.neutral[10],
                  borderRadius: "4px",
                  border: "none",
                  "&:hover": {
                    backgroundColor: theme.palette.neutral[5],
                  },
                }}
              >
                Learn more
              </Button>
            </Box>
          ))}
        </Box>

        <Box
          sx={{
            display: { xs: "none" },
            ["@media (min-width:481px)"]: {
              display: "block",
            },
            ["@media (max-width:480px)"]: {
              display: "none",
            },
          }}
        >
          {contentData.map((item, index) => (
            <Accordion
              key={`accordion-${index}`}
              defaultExpanded={index === 0}
              sx={{
                backgroundColor: "transparent",
                boxShadow: "none",
                borderBottom: `1px solid ${theme.palette.neutral[40]}`,
                "&:before": { display: "none" },
                "&.Mui-expanded": {
                  borderBottom: "none",
                },
                "&:last-of-type": {
                  borderRadius: "0",
                },
                "&:last-of-type.Mui-expanded": {
                  borderRadius: "8px",
                },
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                sx={{
                  padding: "8px 0",
                  "& .MuiAccordionSummary-content": {
                    margin: "0",
                  },
                  ".MuiAccordionSummary-content.Mui-expanded": {
                    margin: 0,
                  },
                }}
              >
                <Typography
                  sx={{
                    fontFamily: theme.typography.default,
                    fontSize: {
                      xs: theme.typography.body3.fontSize,
                      md: theme.typography.body3.fontSize,
                      lg: theme.typography.body2.fontSize,
                      xl: theme.typography.body2.fontSize,
                    },
                    fontWeight: theme.typography.body2.fontWeight,
                    lineHeight: theme.typography.body2.lineHeight,
                    color: theme.palette.neutral[90],
                  }}
                >
                  {item.title}
                </Typography>
              </AccordionSummary>
              <AccordionDetails
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", md: "row" },
                  gap: "24px",
                  alignItems: "center",
                  padding: "0 !important",
                  margin: "0 !important",
                  ["@media (max-width:480px)"]: {
                    flexDirection: "column",
                  },
                }}
              >
                <Box
                  component="img"
                  src={item.image}
                  alt={item.alt}
                  sx={{
                    width: { xs: "100%", md: "400px" },
                    height: { xs: "auto", md: "220px" },
                    objectFit: "cover",
                    ["@media (max-width:480px)"]: {
                      width: "100%",
                      height: "auto",
                    },
                  }}
                />

                <Box sx={{ flex: 1 }}>
                  <Typography
                    sx={{
                      fontSize: {
                        xs: theme.typography.h3.fontSize,
                        md: theme.typography.h3.fontSize,
                        lg: theme.typography.h4.fontSize,
                        xl: theme.typography.h4.fontSize,
                      },
                      fontWeight: theme.typography.h4.fontWeight,
                      color: theme.palette.neutral[90],
                    }}
                  >
                    {item.heading}
                  </Typography>
                  <Typography
                    sx={{
                      marginTop: "8px",
                      color: theme.palette.neutral[60],
                      fontSize: {
                        xs: theme.typography.body3.fontSize,
                        md: theme.typography.body3.fontSize,
                        lg: theme.typography.body2.fontSize,
                        xl: theme.typography.body2.fontSize,
                      },
                      fontWeight: theme.typography.body2.fontWeight,
                    }}
                  >
                    {item.description}
                  </Typography>
                  <Button
                    variant="outlined"
                    sx={{
                      marginTop: "8px",
                      fontSize: theme.typography.body4.fontSize,
                      fontWeight: theme.typography.body4.fontWeight,
                      textTransform: "none",
                      color: theme.palette.neutral[90],
                      backgroundColor: theme.palette.neutral[10],
                      borderRadius: "4px",
                      border: "none",
                      "&:hover": {
                        backgroundColor: theme.palette.neutral[5],
                      },
                    }}
                  >
                    Learn more
                  </Button>
                </Box>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default MiddleSection;
