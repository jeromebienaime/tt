import test from "ava"
import {ADD_TIMER, REMOVE_TIMER, COUNT, STOP_COUNT, addTimer, removeTimer, count, stopCount} from "./timer"

test("action type ADD_TIMER is a symbol", t =>
    t.deepEqual(ADD_TIMER, "ADD_TIMER")
)
test("action type REMOVE_TIMER is a symbol", t => 
    t.deepEqual(REMOVE_TIMER, "REMOVE_TIMER")
)
test("action type COUNT is a symbol", t => 
    t.deepEqual(COUNT, "COUNT")
)
test("action type STOP_COUNT is a symbol", t => 
    t.deepEqual(STOP_COUNT, "STOP_COUNT")
)


test("action addTimer is a function that accepts a payload", t => {
    const payload = { id: 1 }

    const result = addTimer(payload)

    t.is(result.payload.id, 1)
})
test("action addTimer is a function that action type is ADD_TIMER", t => {
    const payload = { id: 1 }

    const result = addTimer(payload)

    t.is(result.type, ADD_TIMER)
})

test("action removeTimer is a function that accepts a payload", t => {
    const payload = { id: 1 }

    const result = removeTimer(payload);

    t.is(result.payload.id, 1)
})
test("action removeTimer is a function that action type is REMOVE_TIMER", t => {
    const payload = { id: 1 }

    const result = removeTimer(payload)

    t.is(result.type, REMOVE_TIMER)
})

test("action count is a function with no payload", t => {
    const result = count()

    t.true(result.payload == null)
})
test("action count is a function that action type is COUNT", t => {
    const result = count()

    t.is(result.type, COUNT)
})

test("action stopCount is a function with no payload", t=> {
    const result = stopCount()

    t.true(result.payload == null)
})
test("action stopCount is a function that action type is STOP_COUNT", t => {
    const result = stopCount()

    t.is(result.type, STOP_COUNT)
})