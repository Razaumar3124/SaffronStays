import { Google } from '@mui/icons-material'
import { Button } from '@mui/material'
import React from 'react'

const GoogleSigninBtn = () => {
  return (
    <Button
    variant='outlined'
    fullWidth
    sx={{height: "10%",mt: "15px",color: "white",border: "1px solid #c2b4b4",textTransform: "none",fontSize:"15px",display: "flex", gap: "5px"}}
    >
       <Google /> Sign in with Google
    </Button>
)
}

export default GoogleSigninBtn