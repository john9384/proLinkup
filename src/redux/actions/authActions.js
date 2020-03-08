import axios from "axios";
import { GET_ERRORS, SET_CURRENT_USER } from "./types";
import setAuthToken from "../../helpers/setAuthToken";
import jwt_decode from "jwt-decode";

export const signupUser = (userData, history) => dispatch => {
  axios
    .post("http://localhost:4000/users/sign-up", userData)
    .then(res => {
      history.push("/login");
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
};
export const loginUser = userData => dispatch => {
  axios
    .post("http://localhost:4000/users/login", userData)
    .then(res => {
      const { token } = res.data.content;
      localStorage.setItem("jwtToken", token);
      setAuthToken(token);
      console.log("token should display here");
      console.log(token);
      const decoded = jwt_decode(token);
      console.log(decoded);
      dispatch(setCurrentUser(decoded));
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
};

export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};
export const logoutUser = () => dispatch => {
  localStorage.removeItem("jwtToken");
  setAuthToken(false);
  dispatch(setCurrentUser({}));
};

export const addExp = (expData, history) => dispatch => {
  axios
    .post("http://localhost:4000/users/login", expData)
    .then(res => history.push("/dashboard"))
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
};
