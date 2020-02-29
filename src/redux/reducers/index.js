import { combineReducers } from "redux";
import authReducer from "./authReducer.js";
import errorsReducer from "./errorsReducers";
import profileReducer from "./profileReducers";

export default combineReducers({
  auth: authReducer,
  errors: errorsReducer,
  profile: profileReducer
});
