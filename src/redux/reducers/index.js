import { combineReducers } from "redux";
import authReducer from "./authReducer.js";
import errorsReducer from "./errorsReducers";
import profileReducer from "./profileReducers";
import postReducer from "./postReducer"

export default combineReducers({
  auth: authReducer,
  errors: errorsReducer,
  profile: profileReducer,
  post: postReducer
});
