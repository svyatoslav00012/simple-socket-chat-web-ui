import {makeStyles} from "@material-ui/core/styles";
import React from 'react'
import {Typography} from "@material-ui/core";
import MessageTypes from "../../data/constants/MessageTypes";
import InfoIcon from "@material-ui/icons/Info"
import ErrorIcon from "@material-ui/icons/Error"

const getJustify = type => {
    switch (type){
        case MessageTypes.OUTGOING:
            return 'flex-end';
        case MessageTypes.INCOMING:
            return 'flex-start';
        default:
            return 'center'
    }
}

const getBackground = type => {
    switch (type){
        case MessageTypes.OUTGOING:
            return 'lightblue';
        case MessageTypes.INCOMING:
            return 'lightgrey';
        default:
            return 'transparent'
    }
}

const getColor = type => {
    switch (type){
        case MessageTypes.SYS_INFO:
            return 'blue';
        case MessageTypes.SYS_ERR:
            return 'red';
        default:
            return undefined
    }
}

const useStyles = makeStyles({
    messageArea: {
        width: '100%',
        display: 'flex',
        justifyContent: props => getJustify(props.type)
    },
    messageRoot: props => ({
        backgroundColor: getBackground(props.type),
        color: getColor(props.type),
        borderRadius: 20,
        padding: 10,
        margin: 10,
        display: props.isSystem ? 'flex' : undefined
    }),
    header: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    author: {
        marginRight: 10,
        fontWeight: 900
    },
    text: {

    },
    time: {
        color: 'lightyellow'
    }
});


const MessageComponent = ({message}) => {

    const {id, text, type, author, time} = message

    const isSystem = type === MessageTypes.SYS_ERR || type === MessageTypes.SYS_INFO

    const classes = useStyles({type, isSystem})

    return (<div className={classes.messageArea}>
        <div className={classes.messageRoot}>
            {!isSystem && <div className={classes.header}>
                <Typography variant='body2' className={classes.author}>{author}</Typography>
                <Typography className={classes.time} variant='body2'>{new Date(time).toLocaleTimeString()}</Typography>
            </div>}
            {type === MessageTypes.SYS_INFO && <InfoIcon/>}
            {type === MessageTypes.SYS_ERR && <ErrorIcon/>}
            <Typography className={classes.text}>{text}</Typography>
        </div>
    </div>);
}

export default React.memo(MessageComponent)