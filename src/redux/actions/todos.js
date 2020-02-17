/**
 * @file redux/actions/todos.js
 * @test redux/actions/todos.test.js
 * @description Defines the actions to manage a list of todos
 */

/**
 * @description ADD_TODO actionType
 * @type String
 * @example
 * ```js
 *      dispatch({ type: ADD_TODO, payload: { name: "do the wishes" } })
 * ```
 */
export const ADD_TODO = "ADD_TODO"

/**
 * @description TOGGLE_EDIT_TODO actionType
 * @type String
 * @example
 * ```js
 *      dispatch({ type: TOGGLE_EDIT_TODO, payload: { enabled: true } })
 * ```
 */
export const TOGGLE_EDIT_TODO = "TOGGLE_EDIT_TODO"

/**
 * @description EDIT_TODO actionType
 * @type String
 * @example
 * ```js
 *      dispatch({ type: EDIT_TODO, payload: { id: 4685, label: "do the laundry" } })
 * ```
 */
export const EDIT_TODO = "EDIT_TODO"

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
 * @description Enable or disable the edit of a todo
 * @param {JSON} payload - enabled?
 * @example
 * ```js
 *      dispatch(toggleEditTodo({ enabled: false }))
 * ```
 */
export function toggleEditTodo (payload) {
    return {
        type: TOGGLE_EDIT_TODO,
        payload
    }
}

/**
 * @description Edit a todo
 * @param {JSON} payload
 * @example
 * ```js
 *      dispatch(editTodo({ id: 2315, label: "Do it" }))
 * ```
 */
export function editTodo (payload) {
    return {
        type: EDIT_TODO,
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
