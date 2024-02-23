// reducers/index.js
import { combineReducers } from "redux";
import myReducer from "./myReducer";
import { blogReducer } from "./blogReducer";

export default combineReducers({
  myReducer,
  blogReducer,
});
