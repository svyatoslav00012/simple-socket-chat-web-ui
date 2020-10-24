import ChatPage from "../ChatPage";
import React from "react";
import {connect} from "react-redux";
import {
    addIncomingMessage,
    addOutgoingMessage,
    addSysErrorMessage,
    addSysInfoMessage, setAuthor, setAuthorized,
    setMembers
} from "../../../data/redux/chat/chatActions";

const mapStateToProps = state => ({
    curMessage: state.chat.get('curMessage'),
    author: state.chat.get('author'),
})

const mapDispatchToProps = {
    addSysErrorMessage,
    addSysInfoMessage,
    addIncomingMessage,
    addOutgoingMessage,
    setMembers,
    setAuthor,
    setAuthorized
}

const ChatPageContainer = props => <ChatPage {...props}/>

export default connect(mapStateToProps, mapDispatchToProps)(ChatPageContainer)