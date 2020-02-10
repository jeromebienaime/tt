import test from "ava"
import {ADD_TODO, REMOVE_TODO, NEXT_TODO, addTodo, removeTodo, nextTodo} from "./todos"

test("action type ADD_TODO is a symbol", t => 
    t.deepEqual(ADD_TODO, "ADD_TODO")
)

test("action type REMOVE_TODO is a symbol", t => 
    t.deepEqual(REMOVE_TODO, "REMOVE_TODO")
)

test("action type NEXT_TODO is a symbol", t => 
    t.deepEqual(NEXT_TODO, "NEXT_TODO")
)

test("action addTodo is a function that accepts a payload", t => {
    const payload = { name: "do the wishes" }

    const result = addTodo(payload)

    t.is(result.payload.name, "do the wishes")
})
test("action addTodo is a function that type is ADD_TODO", t => {
    const payload = { name: "do the wishes" }

    const result = addTodo(payload)

    t.is(result.type, ADD_TODO)
})

test("action removeTodo is a function that accepts a payload", t => {
    const payload = {id: 1}

    const result = removeTodo(payload)

    t.is(result.type, REMOVE_TODO)
})

test("action removeTodo is a function that type is REMOVE_TODO", t=> {
    const payload = { id: 1 }
    
    const result = removeTodo(payload)

    t.is(result.type, REMOVE_TODO)
})

test("action nextTodo is a function that accepts a payload", t => {
    const payload = { timer: 1024 }

    const result = nextTodo(payload)

    t.is(result.payload.timer, 1024)
})
test("action nextTodo is a function that type is NEXT_TODO", t => {
    const payload = { timer: 1024 }
    
    const result = nextTodo(payload)

    t.is(result.payload.timer, 1024)
})