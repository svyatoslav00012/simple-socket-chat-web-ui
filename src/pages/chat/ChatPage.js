import {makeStyles} from "@material-ui/core/styles";
import React, {useCallback, useEffect} from "react";
import ChatComponent from "./ChatComponent";
import SocketAPI from "../../data/api/SocketAPI";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import MembersListContainer from "./containers/MembersListContainer";
import ServerSocketMessageTypes from "../../data/constants/ServerSocketMessageTypes";

const useStyles = makeStyles({
    root: {
        width: '100vw',
        height: '100vh',
    },
    mem: {},
    chat: {
        padding: 5
    }

})

const ChatPage = ({
                      curMessage,
                      author,
                      addIncomingMessage,
                      addOutgoingMessage,
                      addSysInfoMessage,
                      addSysErrorMessage,
                      setAuthor,
                      setMembers,
                      setAuthorized
                  }) => {
    const classes = useStyles()

    const handleSend = useCallback(() => {
        if (author) {
            if (curMessage) {
                SocketAPI.sendMessage({text: curMessage, author: author})
                addOutgoingMessage()
            }
        } else addSysErrorMessage('Specify author name firstly')
    }, [curMessage, author])

    const handleMessage = msg => {
        const json = JSON.parse(msg)
        switch (json.type) {
            case ServerSocketMessageTypes.AUTH_RESPONSE:
                if (json.authorized) {
                    setAuthorized(true)
                    addSysInfoMessage('joined')
                } else if (json.error)
                    console.error(json.error)
                break;

            case ServerSocketMessageTypes.LEAVE_RESPONSE:
                if (json.left)
                    setAuthorized(false)
                else console.error('error leaving. ', json.error)
                break;

            case ServerSocketMessageTypes.MEMBERS:
                setMembers(json.members)
                break;

            case ServerSocketMessageTypes.MESSAGE:
                addIncomingMessage(json.message)
                break;
        }
    }

    const connect = () => SocketAPI.connect(
        () => SocketAPI.join(author),
        () => addSysInfoMessage('connection closed'),
        () => addSysErrorMessage('unexpected closing of the connection'),
        handleMessage,
        err => addSysErrorMessage('Something went wrong ' + typeof err === 'string' ? err : '')
    )

    useEffect(() => {
        setAuthor(localStorage.getItem('author'))
    }, [])

    const handleAuthorise = () => {
        if (!author)
            return
        connect()
    }

    const handleLeave = () => {
        SocketAPI.leave()
        setAuthorized(false)
    }


    return (<Grid container>
        <Hidden smDown>
            <Grid item xs={0} md={3} lg={4} className={classes.mem} container justify='center'>
                <MembersListContainer/>
            </Grid>
        </Hidden>
        <Grid item xs={12} md={9} lg={4} className={classes.chat}>
            <ChatComponent onSend={handleSend} onAuthorize={handleAuthorise} onLeave={handleLeave}/>
        </Grid>
        <Grid item xs={0} lg={4}/>
    </Grid>)
}

export default React.memo(ChatPage)