import React from "react";
import AuthorPanel from "./AuthorPanel";
import MessagesList from "./MessagesList";
import SendMessagePanel from "./SendMessagePanel";
import {makeStyles} from "@material-ui/core/styles";
import AuthorPanelContainer from "./containers/AuthorPanelContainer";
import MessagesListContainer from "./containers/MessagesListContainer";
import SendMessagePanelContainer from "./containers/SendMessagePanelContainer";

const useStyles = makeStyles({
    root: {
        // display: 'flex',
        // flexDirection: 'column',
        width: '100%',
        height: '100%',
        padding: 5,
        backgroundColor: 'lightGrey',
        borderRadius: 10
    }
})

const ChatComponent = ({onSend, onAuthorize, onLeave}) => {

    const classes = useStyles()

    return (<div className={classes.root}>
        <AuthorPanelContainer onAuthorize={onAuthorize} onLeave={onLeave}/>
        <MessagesListContainer/>
        <SendMessagePanelContainer onSend={onSend}/>
    </div>)
}

export default React.memo(ChatComponent)