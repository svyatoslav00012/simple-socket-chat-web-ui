import Immutable from 'immutable'
import {uuidv4} from "../helpers/helpers";
import MessageTypes from "../constants/MessageTypes";

const defaultProps = {
    id: uuidv4(),
    text: '',
    type: MessageTypes.INCOMING,
    author: 'AuthorName',
    time: Date.now()
}

class Message extends new Immutable.Record(defaultProps){
    constructor(props) {
        props.id = uuidv4();
        props.time = Date.now()
        super(props);
    }
}

export default Message