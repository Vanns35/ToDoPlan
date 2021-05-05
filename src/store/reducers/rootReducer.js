import toDoReducer from './toDoReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  toDo: toDoReducer
});

export default rootReducer

// the key name will be the data property on the state object