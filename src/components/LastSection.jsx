import { Box, Typography, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import JohnStory from "../assets/john-story.png";
import Journey from "../assets/the-journey.png";
import CatchDay from "../assets/catch-day.png";
import TroutTales from "../assets//trout-tales.png";

const LastSection = () => {
  const theme = useTheme();

  const stories = [
    {
      title: "John’s Story",
      description:
        "Non arcu risus quis varius quam quisque. Ornare suspendisse sed nisi lacus. Eu feugiat pretium nibh.",
      image: JohnStory,
    },
    {
      title: "The Journey",
      description:
        "Proin nibh nisl condimentum id venenatis a condimentum vitae sapien. Tellus in metus vulputate eu.",
      image: Journey,
    },
    {
      title: "Catch Day",
      description:
        "Elit pellentesque habitant morbi tristique senectus et netus et. In hendrerit gravida rutrum.",
      image: CatchDay,
    },
    {
      title: "Trout Tales",
      description:
        "Sit amet mattis vulputate enim nulla aliquet. At augue eget arcu dictum varius.",
      image: TroutTales,
    },
  ];

  return (
    <Box sx={{ backgroundColor: theme.palette.neutral[2] }}>
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
          Member stories
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            gap: "48px",
          }}
        >
          {stories.map((story, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                flexDirection: "row",
                backgroundColor: theme.palette.neutral[2],
                overflow: "hidden",
              }}
            >
              <Box
                component="img"
                src={story.image}
                alt={story.title}
                sx={{
                  width: "200px",
                  height: "200px",
                  minWidth: "200px",
                  minHeight: "200px",
                  objectFit: "cover",
                  display: "block",
                  flexShrink: 0,
                }}
              />
              <Box sx={{ padding: "0 24px" }}>
                <Typography
                  sx={{
                    fontSize: {
                      xs: theme.typography.body1.fontSize,
                      md: theme.typography.body1.fontSize,
                      lg: theme.typography.h4.fontSize,
                      xl: theme.typography.h4.fontSize,
                    },
                    fontWeight: theme.typography.body1.fontWeight,
                    fontFamily: theme.typography.accent,
                    color: theme.palette.neutral[90],
                  }}
                >
                  {story.title}
                </Typography>
                <Typography
                  sx={{
                    marginTop: "4px",
                    color: theme.palette.neutral[60],
                    fontSize: theme.typography.body4.fontSize,
                    fontWeight: theme.typography.body4.fontWeight,
                    fontFamily: theme.typography.default,
                  }}
                >
                  {story.description}
                </Typography>
                <Button
                  variant="outlined"
                  sx={{
                    marginTop: "16px",
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
                  Read more
                </Button>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default LastSection;
