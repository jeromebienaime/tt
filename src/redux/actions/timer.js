export const ADD_TIMER = `ADD_TIMER`
export const REMOVE_TIMER = `REMOVE_TIMER`
export const COUNT = `COUNT`

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

export function count () {
    return {
        type: COUNT
    }
}
