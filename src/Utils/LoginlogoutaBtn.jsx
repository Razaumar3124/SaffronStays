import { Button } from '@mui/material'
import React from 'react'

const LoginlogoutaBtn = ({btntext}) => {
  return (
    <Button 
    variant="contained"
    fullWidth
    sx={{height: "10%",bgcolor: "#6666FF", textTransform: "none",fontSize:"15px"}}
    >
        {btntext}
    </Button>
  )
}

export default LoginlogoutaBtn