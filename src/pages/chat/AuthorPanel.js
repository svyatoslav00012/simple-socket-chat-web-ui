import {makeStyles} from "@material-ui/styles";
import React, {useCallback} from "react";
import TextField from "@material-ui/core/TextField";
import {set} from "immutable";
import Button from "@material-ui/core/Button";
import {Typography} from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        display: 'flex',
        justifyContent: 'space-between',
        height: 50,
        margin: 10
    },
    field: {
    },
    bold: {
        fontWeight: 900
    },
    leaveButton: {
        backgroundColor: 'red'
    }
})

const AuthorPanel = ({authorized, author, setAuthor, onAuthorize, onLeave}) => {
    const classes = useStyles()

    const handleChange = useCallback(e => {
        setAuthor(e.target.value)
        localStorage.setItem('author', e.target.value)
    })

    return (<div className={classes.root}>
        {!authorized && <>
            <Button onClick={onAuthorize}
                    variant='contained'>Join</Button>
            <TextField value={author}
                       className={classes.field}
                       label='Author'
                       variant='filled'
                       onChange={handleChange}/>
        </>}
        {authorized && <>
            <Button onClick={onLeave} className={classes.leaveButton} variant='contained'>Leave chat</Button>
            <Typography variant='h5'>Joined as <span className={classes.bold}>{author}</span></Typography>
        </>}
    </div>);
}

export default React.memo(AuthorPanel)