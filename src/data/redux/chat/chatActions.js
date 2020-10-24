import ChatActionTypes from "./ChatActionTypes";


export const addOutgoingMessage = () => ({
    type: ChatActionTypes.ADD_OUTGOING_MESSAGE
})

export const addIncomingMessage = msgObj => ({
    type: ChatActionTypes.ADD_INCOMING_MESSAGE,
    payload: {msgObj}
})

export const addSysInfoMessage = message => ({
    type: ChatActionTypes.ADD_SYS_INFO_MESSAGE,
    payload: {message}
})

export const addSysErrorMessage = message => ({
    type: ChatActionTypes.ADD_SYS_ERR_MESSAGE,
    payload: {message}
})

export const setMembers = members => ({
    type: ChatActionTypes.SET_MEMBERS,
    payload: {members}
})

export const setAuthor = author => ({
    type: ChatActionTypes.SET_AUTHOR,
    payload: {author}
})

export const setCurrentMessage = curMessage => ({
    type: ChatActionTypes.SET_CURRENT_MESSAGE,
    payload: {curMessage}
})

export const setAuthorized = authorized => ({
    type: ChatActionTypes.SET_AUTHORIZED,
    payload: {authorized}
})