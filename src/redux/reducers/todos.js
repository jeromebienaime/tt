import initialState from "../initialState"
import * as todo from "../actions/todos"
import _ from "lodash"
import chance from "chance"

export default function timerReducer (state = initialState, actions) {
    switch (actions.type) {
    case todo.ADD_TODO:
        return { ...state, items: [...state.items, { id: chance().ssn({ ssnFour: true, dashes: false }), label: actions.payload.name }] }
    case todo.REMOVE_TODO:
        return { ...state, todos: { items: state.items.filter(id => id !== actions.payload.id) } }
    case todo.NEXT_TODO:
        return {
            ...state,
            items: _.initial(state.items) ? _.initial(state.items) : [],
            current: { ..._.last(state.items), time: actions.payload.time, started_at: new Date() },
            history: _.reject(_.concat(state.history, _.isEmpty(state.current) ? Object() : { ...state.current, stopped_at: new Date() }), _.isEmpty),
            running: true,
            finished: _.last(state.items) == null
        }
    default:
        return state
    }
}
