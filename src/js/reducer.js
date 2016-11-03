import { combineReducers } from 'redux'
import {
  ADD_TODO,
} from './actions'

const todos = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return state.concat(action.todo)
    default:
      return state
  }
}

export default combineReducers({
  todos
})
