import initialState from "../initialState"

export function timer (state = initialState, actions) {
    switch (actions.type) {
        case ADD_TIMER: 
            return {...state, timer: 0, running: false}
        case REMOVE_TIMER:
            return {...state, timer: 0, running: false, history: [...history, state.timer]}
    }
}