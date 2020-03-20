import React from 'react';
import {
    // Grid,
    // Typography,
    // FormControl,
    // TextField,
    // Select,
    Input,
    // MenuItem,
    // Button
} from '@material-ui/core';


{/* <Input placeholder="Placeholder" inputProps={{ 'aria-label': 'description' }} /> */ }

const InputField = ({ placeholder, type, name, value, onChange, customStyle }) => {

    return (
        <div>
            <Input placeholder={placeholder}
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                // className={classes.input}
                style={customStyle}
            />
        </div>
    )
}

export default InputField