import initialState from "../initialState"
import * as timer from "../actions/timer"

export default function timerReducer (state = initialState, actions) {
    switch (actions.type) {
    case timer.ADD_TIMER:
        return { ...state, value: 0 }
    case timer.REMOVE_TIMER:
        return { ...state, value: 0 }
    case timer.TOGGLE_TIMER:
        return { ...state, enabled: actions.payload }
    case timer.COUNT:
        return { ...state, value: state.value + 1, started_at: new Date() }
    case timer.STOP_COUNT:
        return { ...state, value: state.value, stopped_at: new Date() }
    default:
        return state
    }
}
