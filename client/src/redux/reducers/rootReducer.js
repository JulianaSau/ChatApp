import { combineReducers } from "redux";
import userReducer from "./userReducer";
import chatsReducer from "./chatsReducer";

//combines all the reducers into one reducer
const rootReducer = combineReducers({
  users: userReducer,
  chats: chatsReducer,
});

export default rootReducer;
