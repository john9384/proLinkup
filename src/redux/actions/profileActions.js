import axios from "axios";
import {
  GET_PROFILE,
  PROFILE_LOADING,
  GET_ERRORS,
  CLEAR_CURRENT_PROFILE,
  SET_CURRENT_USER
} from "./types";

export const getCurrentProfile = () => dispatch => {
  dispatch(setProfileLoading());
  axios
    .get("http://localhost:4000/profiles")
    .then(res =>
      dispatch({
        type: GET_PROFILE,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_PROFILE,
        payload: {}
      })
    );
};

export const postCurrentProfile = (profileData, history) => dispatch => {
  axios
    .post("http://localhost:4000/profiles")
    .then(res => history.push("/dashboard"))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

export const setProfileLoading = () => {
  return {
    type: PROFILE_LOADING
  };
};
export const clearCurrentUserProfile = () => {
  return {
    type: CLEAR_CURRENT_PROFILE
  };
};
export const deleteAccount = () => dispatch => {
  if (window.confirm("Are you sure? This can Not be undown!")) {
    axios.delete("http://localhost:4000/profiles").then(res =>
      dispatch({
        type: SET_CURRENT_USER,
        payload: {}
      }).catch(err => {
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data
        });
      })
    );
  }
};
export const addExp = (expData, history) => dispatch => {
  axios
    .post("http://localhost:4000/profiles/experience", expData)
    .then(res => history.push("/dashboard"))
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
};
export const addEdu = (expData, history) => dispatch => {
  axios
    .post("http://localhost:4000/profiles/education", expData)
    .then(res => history.push("/dashboard"))
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
};
export const deleteExp = id => dispatch => {
  axios
    .delete(`http://localhost:4000/profiles/experience/${id}`)
    .then(res => dispatch({ type: GET_PROFILE, payload: res.data }))
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
};
export const deleteEdu = id => dispatch => {
  axios
    .delete(`http://localhost:4000/profiles/education/${id}`)
    .then(res => dispatch({ type: GET_PROFILE, payload: res.data }))
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
};
