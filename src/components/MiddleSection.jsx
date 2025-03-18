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

  return (
    <Box sx={{ backgroundColor: theme.palette.tan.light }}>
      <Box
        sx={{
          maxWidth: "1024px",
          margin: "0 auto",
          padding: {
            xs: "80px 16px",
            md: "80px 24px",
            lg: "80px 24px",
            xl: "80px 0",
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

        <Accordion
          defaultExpanded
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
              Fly Fishing Experiences
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
            }}
          >
            <Box
              component="img"
              src={fishes}
              alt="Fishes"
              sx={{
                width: { xs: "100%", md: "400px" },
                height: "220px",
                objectFit: "cover",
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
                Explore Fly Fishing
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
                Proin nibh nisl condimentum id venenatis a condimentum vitae
                sapien. Tellus in metus vulputate eu scelerisque felis.
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
                  "&:active": { backgroundColor: theme.palette.neutral[20] },
                  "&:focus": {
                    border: `2px solid ${theme.palette.neutral[90]}`,
                    borderRadius: "5px",
                    outline: "none",
                    backgroundColor: theme.palette.neutral[10],
                  },
                }}
              >
                Learn more
              </Button>
            </Box>
          </AccordionDetails>
        </Accordion>

        <Accordion
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
              Gear Up and Catch More
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
            }}
          >
            <Box
              component="img"
              src={fishes}
              alt="Fishes"
              sx={{
                width: { xs: "100%", md: "400px" },
                height: "220px",
                objectFit: "cover",
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
                Explore Fly Fishing
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
                Proin nibh nisl condimentum id venenatis a condimentum vitae
                sapien. Tellus in metus vulputate eu scelerisque felis.
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
                  "&:active": { backgroundColor: theme.palette.neutral[20] },
                  "&:focus": {
                    border: `2px solid ${theme.palette.neutral[90]}`,
                    borderRadius: "5px",
                    outline: "none",
                    backgroundColor: theme.palette.neutral[10],
                  },
                }}
              >
                Learn more
              </Button>
            </Box>
          </AccordionDetails>
        </Accordion>

        <Accordion
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
              Explore Fly Fishing
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
            }}
          >
            <Box
              component="img"
              src={fishes}
              alt="Fishes"
              sx={{
                width: { xs: "100%", md: "400px" },
                height: "220px",
                objectFit: "cover",
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
                Explore Fly Fishing
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
                Proin nibh nisl condimentum id venenatis a condimentum vitae
                sapien. Tellus in metus vulputate eu scelerisque felis.
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
                  "&:active": { backgroundColor: theme.palette.neutral[20] },
                  "&:focus": {
                    border: `2px solid ${theme.palette.neutral[90]}`,
                    borderRadius: "5px",
                    outline: "none",
                    backgroundColor: theme.palette.neutral[10],
                  },
                }}
              >
                Learn more
              </Button>
            </Box>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Box>
  );
};

export default MiddleSection;
