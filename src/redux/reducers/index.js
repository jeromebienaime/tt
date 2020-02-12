import timerReducer from "./timer"
import todosReducer from "./todos"
import { combineReducers } from "redux"
import clientsReducer from "./clients"

export default combineReducers({
    timer: timerReducer,
    todos: todosReducer,
    clients: clientsReducer
})
