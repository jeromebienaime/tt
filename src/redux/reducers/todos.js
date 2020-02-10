import initialState from "../initialState"
import { ADD_TODO, REMOVE_TODO, NEXT_TODO } from "../actions/todos"
import _ from "lodash"

export default function timerReducer(state = initialState, actions) {
    console.log(actions)
    switch (actions.type) {
        case ADD_TODO:
            return { ...state, todos: { items: [...state.items, actions.payload] } }
        case REMOVE_TODO:
            return { ...state, todos: { items: state.items.filter(id => id !== actions.payload.id) } }
        case NEXT_TODO:
            return { ...state,
                 items: _.initial(state.items) || [], 
                 current: {..._.last(state.items), time: actions.payload}, 
                 running: true, 
                 finished: (state.items.length - 1) == 0} 
        default:
            return state

    }
}