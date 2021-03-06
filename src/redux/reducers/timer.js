/**
 * @file redux/reducers/timer.js
 * @test redux/reducers/timer.test.js
 * @description Reduce the timer part of the state given action type
 * 
 */
import initialState from "../initialState"
import * as timer from "../actions/timer"
import is from "is_js"

/**
 * 
 * @param {JSON[default=initialState]} state - valid timer 
 * @param {JSON[default={}]} actions - action type and optional payload
 * @return {JSON} state reduced
 */
export default function timerReducer (state = initialState, actions = {}) {
    if (state == null) {
        state = initialState
    }
    if (is.undefined(actions.type)) {
        /** @TODO format error */
        return {...state, error: "timerReducer actions.type actions has no type" }
    }
    switch (actions.type) {
    case timer.ADD_TIMER:
    case timer.REMOVE_TIMER:
        return { ...state, value: 0 }
    case timer.TOGGLE_TIMER:
        return is.boolean(actions.payload)
            ? { ...state, enabled: actions.payload }
            : { ...state, error: "timerReducer:TOGGLE_TIMER payload is not a boolean" }
    case timer.COUNT:
        return is.not.undefined(state.value) && is.number(state.value)
            ? { ...state, value: state.value + 1, started_at: new Date() }
            : { ...state, error: "timerReducer:COUNT state.value is not countable" }
    case timer.STOP_COUNT:
        return is.not.undefined(state.value) && is.number(state.value)
            ? { ...state, value: state.value, stopped_at: new Date() }
            : { ...state, error: "timerReducer:STOP_COUNT state.value is not countable" }
    default:
        return state
    }
}
