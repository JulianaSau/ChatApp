import { combineReducers } from "redux";
import userReducer from "./userReducer";
import chatsReducer from "./chatsReducer";

//combines all the reducers into one reducer
const rootReducer = combineReducers({
  userReducer,
  chatsReducer,
});

export default rootReducer;
