import timerReducer from "./timer"
import {combineReducers} from "redux"

export default combineReducers({
    timer:timerReducer
})