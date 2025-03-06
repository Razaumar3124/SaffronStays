import { Box, Checkbox, FormControlLabel, Paper, Typography } from '@mui/material'
import React, { useState } from 'react'
import hikeImg from "../assets/LoginImg/hike.jpg"
import InputfieldComp from '../Utils/InputfieldComp'
import LoginlogoutaBtn from '../Utils/LoginlogoutaBtn';
import GoogleSigninBtn from '../Utils/GoogleSigninBtn';
import NeworAlreadyacc from '../Utils/NeworAlreadyacc';
import PassInputField from '../Utils/PassInputField';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const Login = () => {

  const [password, setPassword] = useState('');
  
  // const [email, setEmail] = useState("");

  // // Function to handle input changes
  // const handleInputChange = (event) => {
  //   setEmail(event.target.value);
  //   console.log("Email:", event.target.value);
  // };

  return (
    <Box
      height="92vh"
      width="100%"
      display="flex"
      margin={0}
    >
      <Box
        width={{xs: "100%",lg: "50%"}}
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{ boxSizing: "border-box", backgroundColor: "black" }} // Ensures border is inside the width
      >
        <Paper
        elevation={4}
        sx={{width: {xs: "80%",sm: "420px"},height: "70%",display: "flex", flexDirection: "column",alignItems: "center", backgroundColor: "black"}}
        >
          <Typography variant='h4' color='white'>Welcome back</Typography>
          <Typography variant='subtitle2' color='#c2b4b4' mt="6px" mb="5px">Welcome back! Please enter your details.</Typography>
          {/* <InputfieldComp labeltext="Email" value={email} onChange={handleInputChange}/> use this while adding events */}
          <InputfieldComp labeltext="Email"/>
          <PassInputField
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            labeltext="Password"
          />
          <Box
          height="13%"
          width="100%"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          sx={{cursor: "pointer"}}
          fontSize="15px"
          >
            <Box
              color="#c2b4b4"
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              gap="4px"
            >
              <FormControlLabel
                sx={{ margin: 0 }} // Removes default margin
                control={
                  <Checkbox
                    sx={{
                      padding: 0,
                      margin: 0,
                      borderRadius: "4px",
                      color: "#c2b4b4",
                    }}
                  />
                }
                label="Remember for 30 days"
              />
            </Box>
            <Box color="#c2b4b4">Forgot Password</Box>
          </Box>
          <LoginlogoutaBtn btntext="Sign in"/>
          <GoogleSigninBtn />
          <NeworAlreadyacc acc="Don't have an account?" logged="Sign up"/>
        </Paper>
      </Box>
      <Box
        width="50%"
        display={{ xs: "none", lg: "flex" }}
      >
        <img 
          src={hikeImg} 
          style={{ height: "100%", width: "100%", objectFit: "cover" }} 
          alt="" 
        />
      </Box>
    </Box>
  )
}

export default Login;
