import {combineReducers, createStore} from "redux";
import chatReducer from "./chat/chatReducer";

const rootReducer = combineReducers({
    chat: chatReducer
});

const store = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;