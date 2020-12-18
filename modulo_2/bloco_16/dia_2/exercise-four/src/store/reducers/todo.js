import { ADD_TODO, FILTER_TODOS, TOOGLE_TODO } from '../actions/todo';

const INITIAL_STATE = {
  todos: [],
  currentId: 1,
  filter: 'all',
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        todos: [
          ...state.todos,
          {
            id: state.currentId,
            text: action.text,
            completed: false,
          },
        ],
        currentId: state.currentId + 1,
      };
    case FILTER_TODOS:
      return {
        ...state,
        filter: action.filter,
      };
    case TOOGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          return (todo.id === action.id) ? { ...todo, completed: !todo.completed } : todo;
        }),
      };
    default:
      return state;
  }
};

export default reducer;
