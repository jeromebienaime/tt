/**
 * @file redux/actions/todos.js
 * @test redux/actions/todos.test.js
 * @description Defines the actions to manage a list of todos
 */

/**
 * @description ADD_TODO actionType.
 * @type String
 * @example
 * ```js
 *      dispatch({ type: ADD_TODO, payload: { name: "do the wishes" } })
 * ```
 */
export const ADD_TODO = "ADD_TODO"

/**
 * @description REMOVE_TODO actionType
 * @type String
 * @example
 * ```js
 *      dispatch({ type: REMOVE_TODO, payload: { id: 1} })
 * ```
 * */
export const REMOVE_TODO = "REMOVE_TODO"

/**
 * @description NEXT_TODO actionType
 * @type String
 * @example
 * ```js
 *      dispatch({ type: NEXT_TODO , payload: { name: "do the wishes" } })
 * ```
 */
export const NEXT_TODO = "NEXT_TODO"

/**
 * @description Adds a todo to the list
 * @param {JSON} payload - new todo
 * @example
 * ```js
 *      dispatch(addTodo({ name: "do the wishes" }))
 * ```
 */
export function addTodo (payload) {
    return {
        type: ADD_TODO,
        payload
    }
}

/**
 * @description Removes a todo from the list
 * @param {JSON} payload - old todo
 * @example
 * ```js
 *      dispatch(removeTodo({ id: 1 }))
 * ```
 */
export function removeTodo (payload) {
    return {
        type: REMOVE_TODO,
        payload
    }
}

/**
 * @description Set the next todo in the list as active todo
 * @param {time: number} payload - timer for the todo
 * @example
 * ```js
 *      dispatch(nextTodo({ time: 1240 }))
 *  ```
 */
export function nextTodo (payload) {
    return {
        type: NEXT_TODO,
        payload
    }
}
