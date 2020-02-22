import axios from "axios";
import { GET_ERRORS } from "./types";

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
