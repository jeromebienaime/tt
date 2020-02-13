import test from "ava"
import * as actions from "./todos"

test("action type ADD_TODO is a symbol", t =>
    t.deepEqual(actions.ADD_TODO, "ADD_TODO")
)

test("action type TOGGLE_EDIT_TODO is a symbol", t =>
    t.deepEqual(actions.TOGGLE_EDIT_TODO, "TOGGLE_EDIT_TODO")
)

test("action type EDIT_TODO is a symbol", t =>
    t.deepEqual(actions.EDIT_TODO, "EDIT_TODO")
)

test("action type REMOVE_TODO is a symbol", t =>
    t.deepEqual(actions.REMOVE_TODO, "REMOVE_TODO")
)

test("action type NEXT_TODO is a symbol", t =>
    t.deepEqual(actions.NEXT_TODO, "NEXT_TODO")
)

test("action addTodo is a function that accepts a payload", t => {
    const payload = { name: "do the wishes" }

    const result = actions.addTodo(payload)

    t.is(result.payload.name, "do the wishes")
})
test("action addTodo is a function that type is ADD_TODO", t => {
    const payload = { name: "do the wishes" }

    const result = actions.addTodo(payload)

    t.is(result.type, actions.ADD_TODO)
})

test("action toggleEditTodo is a function that accepts a payload", t => {
    const payload = { enabled: true }

    const result = actions.toggleEditTodo(payload)

    t.true(result.payload.enabled)
})
test("action toggleEditTodo is a function that type is TOGGLE_EDIT_TODO", t => {
    const payload = { enabled: true }

    const result = actions.toggleEditTodo(payload)

    t.is(result.type, actions.TOGGLE_EDIT_TODO)
})

test("action editTodo is a function that accepts a payload", t => {
    const payload = { label: "do the laundry", id: 5648 }

    const result = actions.editTodo(payload)

    t.is(result.payload.label, "do the laundry")
    t.is(result.payload.id, 5648)
})

test("action removeTodo is a function that accepts a payload", t => {
    const payload = { id: 1 }

    const result = actions.removeTodo(payload)

    t.is(result.type, actions.REMOVE_TODO)
})

test("action removeTodo is a function that type is REMOVE_TODO", t => {
    const payload = { id: 1 }

    const result = actions.removeTodo(payload)

    t.is(result.type, actions.REMOVE_TODO)
})

test("action nextTodo is a function that accepts a payload", t => {
    const payload = { timer: 1024 }

    const result = actions.nextTodo(payload)

    t.is(result.payload.timer, 1024)
})
test("action nextTodo is a function that type is NEXT_TODO", t => {
    const payload = { timer: 1024 }

    const result = actions.nextTodo(payload)

    t.is(result.payload.timer, 1024)
})
