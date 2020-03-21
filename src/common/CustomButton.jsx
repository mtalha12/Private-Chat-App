import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';
import Icon from '@material-ui/core/Icon';
import SaveIcon from '@material-ui/icons/Save';

const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1),
    },
}));


const CustomButton = ({ color, startIcon, endIcon, title, customStyle, onClick }) => {
    const classes = useStyles();

    return (
        <Button
            variant="contained"
            // color="primary"
            color={color}
            className={classes.button}
            // endIcon={<SaveIcon />}
            // startIcon={<DeleteIcon />}
            startIcon={startIcon}
            endIcon={endIcon}
            style={customStyle}
            onClick={onClick}
        >
            {title}
        </Button>
    )
}
export default CustomButton