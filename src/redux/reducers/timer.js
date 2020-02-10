import initialState from "../initialState"
import {ADD_TIMER, REMOVE_TIMER, COUNT, STOP_COUNT} from "../actions/timer"

export default function timerReducer (state = initialState, actions) {
    switch (actions.type) {
        case ADD_TIMER: 
            return {...state,  value: 0 , running: false}
        case REMOVE_TIMER:
            return {...state, value: 0 , running: false}
        case COUNT:
            return { value: state.value + 1, running: true, started_at: new Date()}
        case STOP_COUNT:
            return {...state, value: state.value, running: false, stopped_at: new Date()}
        default:
            return state
        
    }
}