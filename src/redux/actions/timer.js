export default ADD_TIMER = `ADD_TIMER`
export default REMOVE_TIMER = `REMOVE_TIMER`

export function addTimer (payload) {
    return {
        type: ADD_TIMER,
        payload
    }
}

export function removeTimer (payload) {
    return {
        type: REMOVE_TIMER,
        payload
    }
}
