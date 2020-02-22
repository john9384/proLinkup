import { combineReducers } from "redux";
import authReducer from "./authReducer.js";
import errorsReducer from "./errorsReducers";

export default combineReducers({
  auth: authReducer,
  errors: errorsReducer
});
