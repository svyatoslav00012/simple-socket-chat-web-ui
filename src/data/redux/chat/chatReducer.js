import Immutable from 'immutable'
import ChatActionTypes from "./ChatActionTypes";
import Message from "../../immutableEntities/Message";
import MessageTypes from "../../constants/MessageTypes";

const defaultState = new Immutable.OrderedMap({
    messages: new Immutable.List(),
    author: '',
    curMessage: '',
    members: new Immutable.List(),
    authorized: false
})

const chatReducer = (state = defaultState, action) => {
    switch (action.type){
        case ChatActionTypes.ADD_INCOMING_MESSAGE:
            return state.update('messages', _ => _.push(new Message({
                type: MessageTypes.INCOMING,
                ...action.payload.msgObj
            })))

        case ChatActionTypes.ADD_OUTGOING_MESSAGE:
            return state.update('messages', _ => _.push(new Message({
                type: MessageTypes.OUTGOING,
                text: state.get('curMessage'),
                author: state.get('author'),
            })))
                .set('curMessage', '')

        case ChatActionTypes.ADD_SYS_INFO_MESSAGE:
            return state.update('messages', _ => _.push(new Message({
                type: MessageTypes.SYS_INFO,
                text: action.payload.message,
                author: 'System',
            })))

        case ChatActionTypes.ADD_SYS_ERR_MESSAGE:
            return state.update('messages', _ => _.push(new Message({
                type: MessageTypes.SYS_ERR,
                text: action.payload.message,
                author: 'System',
            })))

        case ChatActionTypes.SET_AUTHOR:
            return state.set('author', action.payload.author)

        case ChatActionTypes.SET_CURRENT_MESSAGE:
            return state.set('curMessage', action.payload.curMessage)

        case ChatActionTypes.SET_MEMBERS:
            return state.set('members', new Immutable.List(action.payload.members))

        case ChatActionTypes.SET_AUTHORIZED:
            return state
                .set('authorized', action.payload.authorized)
                .set('messages', new Immutable.List())

        default:
            return state;
    }
}

export default chatReducer