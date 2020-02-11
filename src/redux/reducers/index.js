import timerReducer from "./timer"
import todosReducer from "./todos"
import { combineReducers } from "redux"

export default combineReducers({
    timer: timerReducer,
    todos: todosReducer
})
