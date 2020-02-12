import * as clients from "../actions/clients"
import initialState from "../initialState"
import _ from "lodash"

export default function clientsReducer (state = initialState, actions) {
    switch (actions.type) {
    case clients.FETCH_CLIENT_INIT:
        return { ...state, loading: true, init: true }
    case clients.FETCH_CLIENT_RUNNING:
        return { ...state, loading: true, init: false }
    case clients.FETCH_CLIENT_SUCCESS:
        return { ...state, loading: false, init: false, error: null, items: _.flatten([...state.items, actions.payload.items]) }
    case clients.FETCH_CLIENT_ERROR:
        return { ...state, loading: false, init: false, error: actions.payload.error }
    default:
        return state
    }
}
