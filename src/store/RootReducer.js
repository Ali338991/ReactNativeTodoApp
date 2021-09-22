import { combineReducers } from "redux";
import AuthReducer from "./reducers/AuthReducer";
import TodoReducer from "./reducers/TodoRedcer";


const rootReducer = combineReducers({
    AuthReducer,
    TodoReducer
    
});


export default rootReducer;

