import initialState from "../initialState"
import * as timer from "../actions/timer"

export default function timerReducer (state = initialState, actions) {
    switch (actions.type) {
    case timer.ADD_TIMER:
        return { ...state, value: 0, running: false }
    case timer.REMOVE_TIMER:
        return { ...state, value: 0, running: false }
    case timer.COUNT:
        return { value: state.value + 1, running: true, started_at: new Date() }
    case timer.STOP_COUNT:
        return { ...state, value: state.value, running: false, stopped_at: new Date() }
    default:
        return state
    }
}
