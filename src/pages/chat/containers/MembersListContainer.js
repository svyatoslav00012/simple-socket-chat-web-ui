import {setAuthor} from "../../../data/redux/chat/chatActions";
import {connect} from "react-redux";
import React from "react";
import AuthorPanel from "../AuthorPanel";
import MembersList from "../MembersList";

const mapStateToProps = state => ({
    members: state.chat.get('members').toJS(),
})

const mapDispatchToProps = {}

const MembersListContainer = props => <MembersList {...props}/>

export default connect(mapStateToProps, mapDispatchToProps)(MembersListContainer)