import { Box, Typography } from "@mui/material";

import bgstar from "../../../assets/HeroImg/bgstar.png";
import nordic from "../../../assets/HeroImg/nordic.png";

function NordicSection() {
  const items = [
    {
      id: "01",
      title: "Explore Nordic Sea",
      description: "Feel the cold breeze of nordic seas",
      dark: true,
      gridArea: "card1",
      bgImage: { bgstar },
    },
    {
      id: "02",
      title: "Wilderness",
      description: "Embrace the Wild Wilderness",
      dark: false,
      gridArea: "card2",
    },
    {
      id: "03",
      title: "Wilderness",
      description: "Embrace the Wild Wilderness",
      dark: false,
      gridArea: "card3",
    },
    {
      id: "04",
      title: "Nordic Sea",
      description: "Enjoy cold breeze",
      dark: true,
      gridArea: "card4",
      bgImage: { bgstar },
    },
  ];

  return (
    <Box
      sx={{
        mr: { xs: 2, md: 4, xl: 14 },
        ml: { xs: 2, md: 4, xl: 14 },
      }}
    >
      <Box
        sx={{
          display: "grid",
          gap: 3,
          mt: 4,
          gridTemplateAreas: {
            xs: `
              "card1"
              "card2"
              "card3"
              "card4"
              "image"
            `,
            md: `
              "card1 card2 image"
              "card3 card4 image"
            `,
          },
          gridTemplateColumns: {
            xs: "1fr",
            md: "1fr 1fr 1.5fr",
          },
        }}
      >
        {items.map((item) => (
          <Box
            key={item.id}
            sx={{
              position: "relative",
              minHeight: "200px",
              borderRadius: 4,
              overflow: "hidden",
              backgroundColor: item.dark ? "#1a1a1a" : "#f1f1f1",
              p: 3,
              gridArea: item.gridArea,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              "&::before":
                item.bgImage && (item.id === "01" || item.id === "04")
                  ? {
                      content: '""',
                      position: "absolute",
                      top: "30%",
                      left: "75%",
                      transform: "translate(-50%, -50%)",
                      width: "60%",
                      height: "60%",
                      backgroundImage: `url(${item.bgImage})`,
                      backgroundSize: "contain",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                      opacity: 0.3,
                      zIndex: 0,
                    }
                  : {},
            }}
          >
            {item.dark && (
              <Box
                component="img"
                src={bgstar}
                alt=""
                sx={{
                  position: "absolute",
                  width: "60%",
                  height: "auto",
                  opacity: 0.1,
                  pointerEvents: "none",
                }}
              />
            )}
            <Typography
              sx={{
                color: item.dark ? "#666" : "#999",
                fontSize: "0.875rem",
                position: "relative",
                zIndex: 1,
              }}
            >
              /{item.id}
            </Typography>
            <Box sx={{ position: "relative", zIndex: 1 }}>
              <Typography
                variant="h5"
                sx={{
                  color: item.dark ? "white" : "black",
                  mb: 1,
                  fontWeight: "bold",
                }}
              >
                {item.title}
              </Typography>
              <Typography
                sx={{
                  color: item.dark ? "#999" : "#666",
                }}
              >
                {item.description}
              </Typography>
            </Box>
          </Box>
        ))}

        <Box
          sx={{
            gridArea: "image",
            borderRadius: 4,
            overflow: "hidden",
            position: "relative",
            height: { xs: "400px", md: "100%" },
          }}
        >
          <Box
            component="img"
            src={nordic}
            alt="Nordic landscape"
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default NordicSection;