import initialState from "./initialState"
import validator from "../validators"
import rootReducer from "./reducers"
import { applyMiddleware, createStore } from "redux"
// import differ from "redux-diff-logger"
import thunk from "redux-thunk"

const store = createStore(
    rootReducer,
    validator.build(initialState),
    applyMiddleware(thunk)
)

export default store
