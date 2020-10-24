import React, {useEffect, useRef} from "react";
import {makeStyles} from "@material-ui/core/styles";
import Zoom from "@material-ui/core/Zoom";
import MessageComponent from "./MessageComponent";
import UnauthorizedMask from "./UnauthorizedMask";

const useStyles = makeStyles({
    root: {
        width: '100%',
        height: 'calc(100vh - 170px)',
        overflowY: 'auto',
        backgroundColor: 'white'
    }
})

const MessagesList = ({authorized, messages, curUser}) => {

    const classes = useStyles()
    const listRef = useRef()

    useEffect(() => {
        listRef.current.scrollTop = listRef.current.scrollHeight
    }, [messages])

    return (<div ref={listRef} className={classes.root}>
        {!authorized && <UnauthorizedMask/>}
        {authorized && messages.map(message => <Zoom key={message.id} in={true}>
            <MessageComponent message={message} curUser={curUser}/>
        </Zoom>)}
    </div>);
}

export default React.memo(MessagesList)