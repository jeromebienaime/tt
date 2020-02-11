import test from "ava"
import * as actions from "./timer"

test("action type ADD_TIMER is a symbol", t =>
    t.deepEqual(actions.ADD_TIMER, "ADD_TIMER")
)
test("action type REMOVE_TIMER is a symbol", t =>
    t.deepEqual(actions.REMOVE_TIMER, "REMOVE_TIMER")
)
test("action type TOGGLE_TIMER is a symbol", t =>
    t.deepEqual(actions.TOGGLE_TIMER, "TOGGLE_TIMER")
)

test("action type COUNT is a symbol", t =>
    t.deepEqual(actions.COUNT, "COUNT")
)
test("action type STOP_COUNT is a symbol", t =>
    t.deepEqual(actions.STOP_COUNT, "STOP_COUNT")
)

test("action addTimer is a function that accepts a payload", t => {
    const payload = { id: 1 }

    const result = actions.addTimer(payload)

    t.is(result.payload.id, 1)
})
test("action addTimer is a function that action type is ADD_TIMER", t => {
    const payload = { id: 1 }

    const result = actions.addTimer(payload)

    t.is(result.type, actions.ADD_TIMER)
})

test("action removeTimer is a function that accepts a payload", t => {
    const payload = { id: 1 }

    const result = actions.removeTimer(payload)

    t.is(result.payload.id, 1)
})
test("action removeTimer is a function that action type is REMOVE_TIMER", t => {
    const payload = { id: 1 }

    const result = actions.removeTimer(payload)

    t.is(result.type, actions.REMOVE_TIMER)
})

test("action toggleTimer is a function that accepts a payload", t => {
    const payload = { enabled: true }

    const result = actions.toggleTimer(payload)

    t.true(result.payload.enabled)
})
test("action toggleTimer is a function that action type is TOGGLE_TIMER", t => {
    const payload = { enabled: true }

    const result = actions.toggleTimer(payload)

    t.is(result.type, actions.TOGGLE_TIMER)
})

test("action count is a function with no payload", t => {
    const result = actions.count()

    t.true(result.payload == null)
})
test("action count is a function that action type is COUNT", t => {
    const result = actions.count()

    t.is(result.type, actions.COUNT)
})

test("action stopCount is a function with no payload", t => {
    const result = actions.stopCount()

    t.true(result.payload == null)
})
test("action stopCount is a function that action type is STOP_COUNT", t => {
    const result = actions.stopCount()

    t.is(result.type, actions.STOP_COUNT)
})
