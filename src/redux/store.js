import initialState from "./initialState"
import rootReducer from "./reducers"

import { applyMiddleware, createStore } from 'redux';
 
// Logger with default options
import logger from 'redux-logger'
import differ from 'redux-diff-logger';

const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(differ)
)

export default store