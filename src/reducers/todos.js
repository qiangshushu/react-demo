import undoable from 'redux-undo';

import { ADD_TODO, TOGGLE_TODO } from '../actions';

const todos = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, { id: action.id, text: action.text, completed: false }];
    case TOGGLE_TODO:
      return state.map(todo => {
        if (action.id === todo.id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
    default:
      return state;
  }
};

const undoableTodos = undoable(todos);

export default undoableTodos;
