import { TextField } from '@mui/material'
import React from 'react'

const InputfieldComp = ({labeltext, value, onChange}) => {
  return (
    <TextField
        variant="outlined"
        label={`${labeltext}`}
        fullWidth
        value={value} // Controlled input
        onChange={onChange} // onChange event
        sx={{
        input: { color: "#c2b4b4", padding: "14px" }, // Ensures text color and padding
        "& .MuiOutlinedInput-root": {
            height: "55px", // Increases height of the input field
            "& fieldset": { borderColor: "#c2b4b4" }, // Default border color
            "&:hover fieldset": { borderColor: "#c2b4b4" }, // Border color on hover
            "&.Mui-focused fieldset": { borderColor: "#c2b4b4" }, // Border color when focused
        },
        "& .MuiInputLabel-root": { color: "#c2b4b4" }, // Default label color
        "& .MuiInputLabel-root.Mui-focused": { color: "#c2b4b4" }, // Label color when focused
        "& .MuiOutlinedInput-input": {
            padding: "18px 14px", // Adjust padding to center text vertically
        },
        marginTop: "20px"
        }}
    />
  )
}

export default InputfieldComp
