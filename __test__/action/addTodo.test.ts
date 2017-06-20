import * as actions from '../../src/action/TodoActions'
// import * as types from '../../constants/ActionTypes'

describe('actions', () => {
  it('should create an action to add a todo', () => {
    const text = 'Finish docs'
    const expectedAction = {
      type: 'ADD_TODO',
      text
    }
    expect(actions.addTodo(text)).toEqual(expectedAction)
  })
})