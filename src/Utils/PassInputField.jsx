import {
    TextField,
    InputAdornment,
    IconButton,
    Tooltip,
} from "@mui/material";
import {
    Visibility,
    VisibilityOff,
    Check,
    Close,
} from "@mui/icons-material";
import React, { useState } from "react";

const PassInputField = ({ labeltext, value, onChange }) => {
    const [showPassword, setShowPassword] = useState(false);
    const [isFocused, setIsFocused] = useState(false); // State for focus

    // Password validation criteria
    const isMinLength = value.length >= 8;
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(value);
    const hasAlphanumeric = /^(?=.*[a-zA-Z])(?=.*\d).+$/.test(value);

    const validationTooltip = (
        <div>
            <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                {isMinLength ? (
                    <Check fontSize="small" color="success" />
                ) : (
                    <Close fontSize="small" color="error" />
                )}
                <span>At least 8 characters</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                {hasSpecialChar ? (
                    <Check fontSize="small" color="success" />
                ) : (
                    <Close fontSize="small" color="error" />
                )}
                <span>Contains a special character</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                {hasAlphanumeric ? (
                    <Check fontSize="small" color="success" />
                ) : (
                    <Close fontSize="small" color="error" />
                )}
                <span>Includes letters and numbers</span>
            </div>
        </div>
    );

    return (
        <Tooltip 
            title={validationTooltip} 
            arrow
            open={isFocused} // Show tooltip when input is focused
            placement="bottom" // Changed from "right" to "left"
        >
            <TextField
                type={showPassword ? "text" : "password"}
                variant="outlined"
                label={labeltext}
                fullWidth
                value={value}
                onChange={onChange}
                onFocus={() => setIsFocused(true)} // Show tooltip on focus
                onBlur={() => setIsFocused(false)} // Hide tooltip when focus is lost
                sx={{
                    input: { color: "#c2b4b4", padding: "14px" },
                    "& .MuiOutlinedInput-root": {
                        height: "55px",
                        "& fieldset": { borderColor: "#c2b4b4" },
                        "&:hover fieldset": { borderColor: "#c2b4b4" },
                        "&.Mui-focused fieldset": { borderColor: "#c2b4b4" },
                    },
                    "& .MuiInputLabel-root": { color: "#c2b4b4" },
                    "& .MuiInputLabel-root.Mui-focused": { color: "#c2b4b4" },
                    "& .MuiOutlinedInput-input": {
                        padding: "18px 14px",
                    },
                    marginTop: "20px",
                }}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end" sx={{ gap: 1 }}>
                            <IconButton
                                onClick={() => setShowPassword(!showPassword)}
                                edge="end"
                                sx={{ color: "#c2b4b4" }}
                            >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                    ),
                }}
            />
        </Tooltip>
    );
};

export default PassInputField;