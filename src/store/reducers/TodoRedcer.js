import {ADD_TODO, DELETE_TODO, LOAD_TODO, UPDATE_TODO} from './TodoType';

let initialState = {
  todo: null,
  size: null,
};

function TodoReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO: {
      // if user add Todo
      return {
        ...state,
        // todo: action.payload,
      };
    }
    case LOAD_TODO: {
      console.log('Load');
      let arr = action.payload.values();
      for (const value of arr) {
        console.log('s', value);
        arr = value;
      }
      console.log('asd', arr);

      return {
        ...state,
        todo: action.payload,
        size:arr.size,
      };
    }
    case UPDATE_TODO: {
      console.log('update Reducer Called');

      return {
        ...state,
        todo: action.payload,
      };
    }
    case DELETE_TODO: {
      console.log('Delete Reducer Called');

      return {
        ...state,
        todo: action.payload,
      };
    }

    default:
      return state;
  }
}
export default TodoReducer;
