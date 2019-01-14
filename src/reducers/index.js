import { combineReducers } from 'redux'
import { loadingBarReducer } from 'react-redux-loading'

import todos from './todos'
import filters from "./filter";

export default combineReducers({
    todos,
    filters,
    loadingBar: loadingBarReducer
})