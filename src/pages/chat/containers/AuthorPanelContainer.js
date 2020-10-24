import {setAuthor} from "../../../data/redux/chat/chatActions";
import {connect} from "react-redux";
import React from "react";
import AuthorPanel from "../AuthorPanel";

const mapStateToProps = state => ({
    author: state.chat.get('author'),
    authorized: state.chat.get('authorized')
})

const mapDispatchToProps = {
    setAuthor
}

const AuthorPanelContainer = props => <AuthorPanel {...props}/>

export default connect(mapStateToProps, mapDispatchToProps)(AuthorPanelContainer)