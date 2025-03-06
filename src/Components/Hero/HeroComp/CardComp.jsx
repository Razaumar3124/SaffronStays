import { Box } from "@mui/material";
import React from "react";
import Card from "../../../Utils/Card";

const CardComp = () => {
  return (
    <Box
      minHeight="70vh"
      px={{ lg: "30px" }}
      display="flex"
      flexWrap="wrap"
      justifyContent="center"
      gap={2} // Space between cards
      marginBottom="50px"
      sx={{
        "& > *": {
          flex: {
            xs: "1 1 90%", // Mobile: 1 card per row (full width)
            sm: "1 1 calc(50% - 16px)", // Tablet: 2 cards per row
            md: "1 1 calc(33.33% - 16px)", // Laptop: 3 cards per row
            lg: "1 1 calc(25% - 16px)", // XL Screens: 4 cards per row
          },
          maxWidth: {
            xs: "100%", 
            sm: "calc(50% - 16px)", 
            md: "calc(33.33% - 16px)", 
            lg: "calc(25% - 16px)", 
          },
        },
      }}
    >
      {Array.from({ length: 8 }).map((_, index) => (
        <Card key={index} />
      ))}
    </Box>
  );
};

export default CardComp;
