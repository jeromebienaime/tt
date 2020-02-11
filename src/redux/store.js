import initialState from "./initialState"
import rootReducer from "./reducers"
import { applyMiddleware, createStore } from "redux"
import differ from "redux-diff-logger"

const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(differ)
)

export default store
