import {setCurrentMessage, setSendMessage} from "../../../data/redux/chat/chatActions";
import {connect} from "react-redux";
import React from "react";
import SendMessagePanel from "../SendMessagePanel";

const mapStateToProps = state => ({
    messageText: state.chat.get('curMessage'),
    authorized: state.chat.get('authorized')
})

const mapDispatchToProps = {
    onMessageTextChange: setCurrentMessage
}

const SendMessagePanelContainer = props => <SendMessagePanel {...props}/>

export default connect(mapStateToProps, mapDispatchToProps)(SendMessagePanelContainer)