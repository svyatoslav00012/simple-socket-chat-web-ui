import makeStyles from "@material-ui/core/styles/makeStyles";
import React, {useCallback} from "react";
import {IconButton, Input} from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send"
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles({
    root: {
        margin: 10,
        display: 'flex',
        height: 50,
    },
    text: {
        height: '100%',
        flex: 1
    },
    input: {
        backgroundColor: 'white',
        borderRadius: 10
    },
    button: {}
})

const SendMessagePanel = ({authorized, messageText, onMessageTextChange, onSend}) => {
    const classes = useStyles()

    const handleChange = useCallback(e => onMessageTextChange(e.target.value), [onMessageTextChange])
    const handleKey = useCallback(e => {
        if(e.key === 'Enter')
            onSend()
    },[onSend])


    return (<div className={classes.root}>
        <TextField variant='outlined'
                   inputProps={{
                       className: classes.input
                   }}
                   value={messageText}
                   onChange={handleChange}
                   onKeyPress={handleKey}
                   disabled={!authorized}
                   className={classes.text}/>
        <IconButton onClick={onSend} className={classes.button} disabled={!messageText}>
            <SendIcon/>
        </IconButton>
    </div>)
}

export default React.memo(SendMessagePanel)