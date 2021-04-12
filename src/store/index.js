import { combineReducers, createStore } from 'redux'
import balanceReducer from './balance/reducer'

const enhancer = window.__REDUX_DEVTOOLS_EXTENSION__
  ? window.__REDUX_DEVTOOLS_EXTENSION__()
  : x => x

const reducer = combineReducers({
  balance: balanceReducer
})
const store = createStore(reducer, enhancer)

export default store
