import initialState from "./initialState"
import rootReducer from "./reducers"

import { applyMiddleware, createStore } from 'redux';
 
// Logger with default options
import logger from 'redux-logger'
const store = createStore(
  rootReducer,
  applyMiddleware(logger),
  initialState
)