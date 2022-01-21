import { combineReducers } from "redux";
import appReducer from "./appReducer";
import userReducer from "./appReducer";

//combines all the reducers into one reducer
const rootReducer = combineReducers({
  appReducer,
  userReducer,
});

export default rootReducer;
