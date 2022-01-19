import { combineReducers } from "redux";
import appReducer from "./appReducer";

//combines all the reducers into one reducer
const rootReducer = combineReducers({
    appReducer,
});

export default rootReducer;