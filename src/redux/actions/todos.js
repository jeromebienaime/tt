/**
 * @file redux/actions/todos.js
 * @test redux/actions/todos.test.js
 * @description Defines the actions to manage a list of todos
 */

/** @type STRING */
export const ADD_TODO = `ADD_TODO`

/** @type STRING */
export const REMOVE_TODO = `REMOVE_TODO`

/** @type STRING */
export const NEXT_TODO = `NEXT_TODO`

/** Adds a todo to the list
 * @param {JSON} payload - new todo
 */
export function addTodo (payload) {
    return {
        type: ADD_TODO,
        payload
    }
}

/** Removes a todo from the list
 * @param {JSON} payload - old todo
 */
export function removeTodo (payload) {
    return {
        type: REMOVE_TODO,
        payload
    }
}

/** Set the next todo in the list as active todo
 * @param {JSON} payload - todo
 */
export function nextTodo (payload) {
    return {
        type: NEXT_TODO,
        payload
        }
}

