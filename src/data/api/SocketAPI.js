import ClientSocketMessageTypes from "../constants/ClientSocketMessageTypes";

class SocketAPI{
    socket = null

    join = author => this.sendJson({
        type: ClientSocketMessageTypes.JOIN,
        author
    })

    leave = () => this.sendJson({
        type: ClientSocketMessageTypes.LEAVE
    })

    sendMessage = msgObj => this.sendJson({
        type: ClientSocketMessageTypes.MESSAGE,
        msgObj
    })

    connect = (onOpen, onCleanClose, onHardClose, onReceive, onError) => {
        this.socket = new WebSocket(`ws://${location.host}/socket`, 'echo-protocol')
        this.socket.onopen = onOpen
        this.socket.onclose = event => {
            if (event.wasClean) {
                onCleanClose()
            } else {
                onHardClose()
            }
            console.info('Код: ' + event.code + ' причина: ' + event.reason);
        };

        this.socket.onmessage = e => onReceive(e.data)

        this.socket.onerror = onError
    }

    sendJson = json => this.send(JSON.stringify(json))

    send = message => this.socket.send(message)

}

export default new SocketAPI()