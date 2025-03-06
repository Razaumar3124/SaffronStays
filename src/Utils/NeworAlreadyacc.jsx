import { Box } from '@mui/material'
import React from 'react'

const NeworAlreadyacc = ({acc,logged}) => {
  return (
    <Box
        height="10%"
        width="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
        color="#c2b4b4"
        fontSize="15px"
        gap="5px"
        sx={{cursor: "pointer"}}
        >
            {acc}
            <span style={{color: "white"}}>{logged}</span>
    </Box>
  )
}

export default NeworAlreadyacc