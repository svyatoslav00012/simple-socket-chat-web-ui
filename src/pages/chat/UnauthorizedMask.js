import {makeStyles} from "@material-ui/styles";
import React from "react";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
    root: {
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(150, 150, 150, 0.2)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: 'white',
        textAlign: 'center'
    }
})

const UnauthorisedMask = (props) => {
    const classes = useStyles()
    return (<div className={classes.root}>
        <Typography variant='h5' className={classes.text}>You must authorize to enter the chat</Typography>
    </div>)
}

export default React.memo(UnauthorisedMask)