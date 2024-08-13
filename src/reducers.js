// reducers.js
import { ADD_TASK, TOGGLE_TASK, EDIT_TASK } from './actions';

const initialState = {
  tasks: [],
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      const newTask = {
        id: state.tasks.length + 1,
        description: action.payload.description,
        isDone: false,
      };
      return { ...state, tasks: [...state.tasks, newTask] };
    case TOGGLE_TASK:
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task.id === action.payload.id ? { ...task, isDone: !task.isDone } : task
        ),
      };
    case EDIT_TASK:
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task.id === action.payload.id ? { ...task, description: action.payload.description } : task
        ),
      };
    default:
      return state;
  }
};

export default taskReducer;
