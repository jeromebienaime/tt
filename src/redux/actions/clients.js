/**
 *  @file redux/actions/client.js
 *  @test redux/actions/client.test.js
 *  @description Defines the actions to manage clients
 */

import Axios from "axios"

export const ADD_CLIENT = "ADD_CLIENT"
export const REMOVE_CLIENT = "REMOVE_CLIENT"
export const EDIT_CLIENT = "EDIT_CLIENT"
export const ARCHIVE_CLIENT = "ARCHIVE_CLIENT"

export const FETCH_CLIENT_INIT = "FETCH_CLIENT_INIT"
export const FETCH_CLIENT_RUNNING = "FETCH_CLIENT_RUNNING"
export const FETCH_CLIENT_SUCCESS = "FETCH_CLIENT_SUCCESS"
export const FETCH_CLIENT_ERROR = "FETCH_CLIENT_ERROR"

export function addClient (payload) {
    return {
        type: ADD_CLIENT,
        payload
    }
}

export function removeClient (payload) {
    return {
        type: REMOVE_CLIENT,
        payload
    }
}

export function editClient (payload) {
    return {
        type: EDIT_CLIENT,
        payload
    }
}
export function fetchClientInit (payload) {
    return dispatch => {
        dispatch(fetchClientRunning)
        const url = payload.url
            ? payload.url : "https://3000-ee3a291c-1bfc-4163-90a5-fa09a6cbe864.ws-eu01.gitpod.io/items"
        return Axios.get(url)
            .then(result => dispatch(fetchClientSuccess({ items: result.data })))
            .catch(e => dispatch(fetchClientError({ error: e })))
    }
}
export function fetchClientRunning () {
    return { type: FETCH_CLIENT_RUNNING }
}
export function fetchClientSuccess (payload) {
    return { type: FETCH_CLIENT_SUCCESS, payload }
}
export function fetchClientError (payload) {
    return { type: FETCH_CLIENT_ERROR, payload }
}
