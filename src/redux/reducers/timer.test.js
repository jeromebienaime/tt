import test from "ava"
import reducer from "./timer"
import initialState from "../initialState"
import { ADD_TIMER, REMOVE_TIMER, TOGGLE_TIMER, COUNT, STOP_COUNT } from "../actions/timer"
import is from "is_js"

test("reduce with only a state should return the state as is", t => {
    const state = { value: 145 }

    const result = reducer(state)

    t.deepEqual(result, state)
})

test("reduce without params should return initialState ", t => {
    const state = initialState

    const result = reducer()

    t.deepEqual(state, result)
})

test("reduce without action type should return the state as is", t => {
    const state = { value: 145 }
    const action = { toto: true }

    const result = reducer(state, action)

    t.deepEqual(result, state)
})

test("reduce should add a timer", t => {
    const state = { }
    const action = { type: ADD_TIMER }

    const result = reducer(state, action)

    t.deepEqual(result, { value: 0 })
})

test("reduce should remove a timer", t => {
    const state = { }
    const action = { type: REMOVE_TIMER }

    const result = reducer(state, action)

    t.deepEqual(result, { value: 0 })
})

test("reduce should enable a timer", t => {
    const state = { }
    const action = { type: TOGGLE_TIMER, payload: true }

    const result = reducer(state, action)

    t.deepEqual(result, { enabled: true })
})

test("reduce should disable a timer", t => {
    const state = { }
    const action = { type: TOGGLE_TIMER, payload: false }

    const result = reducer(state, action)

    t.deepEqual(result, { enabled: false })
})

test("reduce should not toggle timer if payload is not a boolean", t => {
    const state = { value: 145 }
    const action = { type: TOGGLE_TIMER, payload: "tota" }

    const result = reducer(state, action)

    t.true(is.not.null(result.error))
    t.true(result.enabled == null)
})

test("reduce should count timer", t => {
    const state = { value: 0 }
    const action = { type: COUNT }

    const result = reducer(state, action)

    t.true(result.value === state.value + 1)
})
test("reduce should not count timer if value is not a countable", t => {
    const state = { }
    const action = { type: COUNT }

    const result = reducer(state, action)

    t.true(is.not.null(result.error))
    t.true(result.started_at == null)
})

test("reduce should stop counting", t => {
    const state = { value: 10 }
    const action = { type: STOP_COUNT }

    const result = reducer(state, action)

    t.true(result.value === state.value)
    t.true(is.not.null(result.stopped_at))
})

test("reduce should not stop counting if value is not a countable", t => {
    const state = { }
    const action = { type: STOP_COUNT }

    const result = reducer(state, action)

    t.true(is.not.null(result.error))
    t.true(result.stopped_at == null)
})
