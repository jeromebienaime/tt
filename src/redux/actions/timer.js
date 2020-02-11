/**
 *  @file redux/actions/timer.js
 *  @test redux/actions/timer.test.js
 *  @description Defines the actions to manage the timer 
 */

/** 
 * @description ADD_TIMER actionType.
 * @type String
 * @example 
 *  ```js
 *      dispatch({ type: ADD_TIMER, payload: { timer: 0 } }) // ie: dispatch(addTimer({timer: 0}))
 *  ```
 */
export const ADD_TIMER = "ADD_TIMER"

/** 
 * @description REMOVE_TIMER actionType.
 * @type String
 * @example
 *  ```js
 *      dispatch({ type: REMOVE_TIMER, payload: { id: 1 } }) // ie: dispatch(removeTimer({id: 1}))
 *  ```
 */
export const REMOVE_TIMER = "REMOVE_TIMER"

/** 
 * @description: Increments the timer by a value defined in the reducer, at a tick defined in the container
 * @type String
 * @example
 *  ```js
 *      dispatch({ type: COUNT }) // ie: dispatch(count())
 * ```
 */
export const COUNT = "COUNT"

/**
 * @description Stops the increment of the timer
 * @type String
 * @example
 *  ```js
 *      dispatch({ type: STOP_COUNT }) // ie: dispatch(stopCount())
 * ```
 */
export const STOP_COUNT = "STOP_COUNT"

/**
 * @description Add a timer. Not yet implemented since we have an unique timer at the moment.
 * @TODO #1 add a list of timer so we can measure different things in parrallel
 * @param {JSON} payload - new timer
 */
export function addTimer(payload) {
    return {
        type: ADD_TIMER,
        payload
    }
}

/**
 * @description Removes a timer. Not yet implemented since we have an unique timer at the moment.
 * @TODO #1
 * @param {JSON} payload - old timer
 */
export function removeTimer(payload) {
    return {
        type: REMOVE_TIMER,
        payload
    }
}

/**
 * @description Increments the timer by a value defined in the reducer at a tick defined in the container
 * @return { type: Symbol } 
 * @example
 *  ```js
 *      dispatch(count())
 *  ```
 */
export function count() {
    return {
        type: COUNT
    }
}

/**
 * @description Stops the increment of the timer
 * @return { type: Symbol }
 * @example
 *  ```js
 *      dispatch(stopCount())
 * ```
 */
export function stopCount() {
    return {
        type: STOP_COUNT
    }
}
