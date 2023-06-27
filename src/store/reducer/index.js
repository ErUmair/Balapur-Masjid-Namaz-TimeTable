import { counterReducer } from "./reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({counterReducer,});

export default rootReducer;