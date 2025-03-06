import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { SlSocialFacebook } from "react-icons/sl";
import { FaInstagram } from "react-icons/fa6";
import { LuTwitter } from "react-icons/lu";
import { RiYoutubeLine } from "react-icons/ri";
import EastIcon from "@mui/icons-material/East";

const StyledBox = ({ children, ...props }) => (
  <Box display="flex" justifyContent="center" gap="10px" alignItems="center" {...props}>
    {children}
  </Box>
);

const CircleButton = ({ children }) => (
  <Button
    variant="outlined"
    color="black"
    sx={{
      height: { xs: "80%", sm: "90%", md: "80%" },
      width: { xs: "17%", sm: "15%", md: "14%", lg: "13%" },
      fontSize: "2em",
      borderRadius: "50%",
      minWidth: "50px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      aspectRatio: "1/1",
    }}
  >
    {children}
  </Button>
);

const InputBox = () => (
  <Box
    height={{ xs: "80%", lg: "80%" }}
    width={{ xs: "100%", lg: "95%" }}
    borderRadius="50px"
    border="2px solid black"
    display="flex"
    alignItems="center"
    overflow="hidden"
    sx={{ backgroundColor: "inherit" }} // Matches the main background
  >
    <input
      style={{
        flex: 1,
        height: "100%",
        padding: "15px",
        border: "none",
        borderRadius: "50px 0 0 50px",
        outline: "none",
        backgroundColor: "transparent", // Matches parent background
        color: "black", // Adjust text color if needed
      }}
      placeholder="Email@mail.com"
    />
    <Button 
      variant="contained" 
      sx={{ 
        backgroundColor: "black", 
        height: "100%", 
        borderRadius: "0 50px 50px 0", 
        minWidth: "50px",
        "&:hover": { backgroundColor: "#333" } // Slight hover effect
      }}
    >
      <EastIcon />
    </Button>
  </Box>
);

const Socials = () => (
  <Box height={{ xs: "45vh", md: "30vh" }} sx={{background: "linear-gradient(180deg, rgba(255,255,255,1) 28%, rgba(107,110,109,1) 100%)"}} display={{ md: "flex" }} justifyContent="center" alignItems="center">
    <Box
      height={{ xs: "49%", md: "100%" }}
      width={{ xs: "100%", md: "49.9%" }}
      display="flex"
      px={{ sm: "20px", lg: "50px" }}
      gap={{ xs: "10px", md: "20px" }}
      flexDirection={{ xs: "column", lg: "row" }}
      justifyContent="center"
      alignItems="center"
    >
      <Typography variant={{ xs: "h5", md: "h4" }} component="h2">
        Leading the way in adventure
      </Typography>
      <StyledBox height={{ xs: "40%", md: "30%" }} width={{ xs: "60%", md: "70%" }}>
        <CircleButton><SlSocialFacebook /></CircleButton>
        <CircleButton><FaInstagram /></CircleButton>
        <CircleButton><LuTwitter /></CircleButton>
        <CircleButton><RiYoutubeLine /></CircleButton>
      </StyledBox>
    </Box>
    <Box height={{ xs: "0.5%", md: "100%" }} sx={{background: {xs: "linear-gradient(240deg, rgba(201,201,201,1) 15%, rgba(0,0,0,1) 73%);", lg:"linear-gradient(180deg, rgba(201,201,201,1) 28%, rgba(0,0,0,1) 73%)"}}} width={{ xs: "100%", md: "0.2%" }} />
    <Box
      height={{ xs: "49%", md: "100%" }}
      width={{ xs: "100%", md: "49.9%" }}
      display="flex"
      px={{ sm: "20px", lg: "50px" }}
      gap={{ xs: "10px", md: "20px" }}
      flexDirection={{ xs: "column", lg: "row" }}
      justifyContent="center"
      alignItems="center"
    >
      <Typography variant={{ xs: "h5", md: "h4" }} component="h2">
        Join our Newsletter
      </Typography>
      <StyledBox height={{ xs: "40%", md: "30%" }} width={{ xs: "70%", md: "90%" }}>
        <InputBox />
      </StyledBox>
    </Box>
  </Box>
);

export default Socials;
