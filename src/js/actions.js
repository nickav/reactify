import $ from './dollar'

export const ADD_TODO = 'ADD_TODO'

export const addTodo = (task) => ({
  type: ADD_TODO,
  todo: {
    id: new Date().getTime(),
    task
  }
})
