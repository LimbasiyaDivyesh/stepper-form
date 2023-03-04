import React from "react";
import TextField from "@mui/material/TextField";

const ReactTextField = ({name, value, handleChange, label, helperText, error, type = 'text'}) => {
        return (
        <>
            <TextField
                type={type}
                name={name}
                label={label}
                value={value}
                error={error}
                helperText={error && helperText}
                autoComplete={false}
                variant="outlined"
                onChange={({target}) => handleChange(target)}/>
        </>
    )
};
export default ReactTextField;
