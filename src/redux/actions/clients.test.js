import test from "ava"
import nock from "nock"
import * as actions from "./clients"

test("action type ADD_CLIENT is a symbol", t =>
    t.deepEqual(actions.ADD_CLIENT, "ADD_CLIENT")
)
test("action type REMOVE_CLIENT is a symbol", t =>
    t.deepEqual(actions.REMOVE_CLIENT, "REMOVE_CLIENT")
)
test("action type EDIT_CLIENT is a symbol", t =>
    t.deepEqual(actions.EDIT_CLIENT, "EDIT_CLIENT")
)
test("action type ARCHIVE_CLIENT is a symbol", t =>
    t.deepEqual(actions.ARCHIVE_CLIENT, "ARCHIVE_CLIENT")
)
test("action type FETCH_CLIENT_INIT is a symbol", t =>
    t.deepEqual(actions.FETCH_CLIENT_INIT, "FETCH_CLIENT_INIT")
)
test("action type FETCH_CLIENT_RUNNING is a symbol", t =>
    t.deepEqual(actions.FETCH_CLIENT_RUNNING, "FETCH_CLIENT_RUNNING")
)
test("action type FETCH_CLIENT_SUCCESS is a symbol", t =>
    t.deepEqual(actions.FETCH_CLIENT_SUCCESS, "FETCH_CLIENT_SUCCESS")
)
test("action type FETCH_CLIENT_ERROR is a symbol", t =>
    t.deepEqual(actions.FETCH_CLIENT_ERROR, "FETCH_CLIENT_ERROR")
)

test("action addClient is a function that accepts a payload", t => {
    const payload = { name: "client_A" }

    const result = actions.addClient(payload)

    t.is(result.payload.name, "client_A")
})
test("action addClient is a function that type is ADD_CLIENT", t => {
    const payload = { name: "client_A" }

    const result = actions.addClient(payload)

    t.is(result.type, actions.ADD_CLIENT)
})

test("action removeClient is a function that accepts a payload", t => {
    const payload = { id: "4455-78787-8484" }

    const result = actions.removeClient(payload)

    t.is(result.payload.id, payload.id)
})
test("action removeClient is a function that type is REMOVE_CLIENT", t => {
    const payload = { id: "4455-78787-8484" }

    const result = actions.removeClient(payload)

    t.is(result.type, actions.REMOVE_CLIENT)
})

test("action editClient is a function that accepts a payload", t => {
    const payload = { id: "4455-78787-8484", name: "Client B" }

    const result = actions.editClient(payload)

    t.is(result.payload.id, payload.id)
    t.is(result.payload.name, payload.name)
})
test("action editClient is a function that type is EDIT_CLIENT", t => {
    const payload = { enabled: true }

    const result = actions.editClient(payload)

    t.is(result.type, actions.EDIT_CLIENT)
})

test("action fetchClientInit is an async function that returns a result", async t => {
    nock("http://nock.api.com")
        .get("/items")
        .reply(200, "toto")
    const payload = { url: "http://nock.api.com/items/" }

    const result = await actions.fetchClientInit(payload)(() => "toto")
    t.is(result, "toto")
})

test("action fetchClientRunning is a function that type is FETCH_CLIENT_RUNNING", t => {
    const result = actions.fetchClientRunning()

    t.is(result.type, actions.FETCH_CLIENT_RUNNING)
})

test("action fetchClientSuccess is a function that accepts a payload", t => {
    const payload = { items: [{ name: "Client_A", id: 9642 }, { name: "Client_B", id: 8741 }, { name: "Client_C", id: 87987 }] }

    const result = actions.fetchClientSuccess(payload)

    t.is(result.payload.items.length, 3)
})

test("action fetchClientSuccess is a function that type is FETCH_CLIENT_SUCCESS", t => {
    const payload = { items: [{ name: "Client_A", id: 9642 }, { name: "Client_B", id: 8741 }, { name: "Client_C", id: 87987 }] }

    const result = actions.fetchClientSuccess(payload)

    t.is(result.type, actions.FETCH_CLIENT_SUCCESS)
})

test("action fetchClientError is a function that accepts a payload", t => {
    const payload = { error: "error message" }

    const result = actions.fetchClientError(payload)

    t.is(result.payload.error, payload.error)
})
test("action fetchClientError is a function that type is FETCH_CLIENT_ERROR", t => {
    const payload = { error: "error message" }

    const result = actions.fetchClientError(payload)

    t.is(result.type, actions.FETCH_CLIENT_ERROR)
})
