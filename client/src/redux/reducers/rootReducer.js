import { combineReducers } from "redux";
import userReducer from "./userReducer";
import chatsReducer from "./chatsReducer";
import messageReducer from "./messageReducer";

//combines all the reducers into one reducer
const rootReducer = combineReducers({
  users: userReducer,
  chats: chatsReducer,
  messages: messageReducer,
});

export default rootReducer;
