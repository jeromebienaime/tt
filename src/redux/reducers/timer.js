import initialState from "../initialState"
import {ADD_TIMER, REMOVE_TIMER, COUNT} from "../actions/timer"

export default function timerReducer (state = initialState, actions) {
    switch (actions.type) {
        case ADD_TIMER: 
            return {...state,  value: 0 , running: false}
        case REMOVE_TIMER:
            return {...state, value: 0 , running: false}
        case COUNT:
            return { value: state.value + 1}
        default:
            return state
        
    }
}