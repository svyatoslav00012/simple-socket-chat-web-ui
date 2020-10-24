import {connect} from "react-redux";
import React from "react";
import MessagesList from "../MessagesList";

const mapStateToProps = state => ({
    messages: state.chat.get('messages').toJS(),
    authorized: state.chat.get('authorized')
})

const mapDispatchToProps = {}

const MessagesListContainer = props => <MessagesList {...props}/>

export default connect(mapStateToProps, mapDispatchToProps)(MessagesListContainer)