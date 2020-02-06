import initialState from "../initialState"
import {ADD_TIMER, REMOVE_TIMER} from "../actions/timer"

export default function timer (state = initialState, actions) {
    switch (actions.type) {
        case ADD_TIMER: 
            return {...state, timer: 0, running: false}
        case REMOVE_TIMER:
            return {...state, timer: 0, running: false}
        default:
            return state
    }
}