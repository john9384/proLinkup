import axios from "axios";

import {
  ADD_POST,
  GET_ERRORS,
  CLEAR_ERRORS,
  GET_POSTS,
  GET_POST,
  POST_LOADING,
  DELETE_POST,
} from "./types";
import config from "../../config";
// Add Post
export const addPost = (postData) => (dispatch) => {
  dispatch(clearErrors());
  axios
    .post(`${config.api.prefix}/post`, postData)
    .then((res) =>
      dispatch({
        type: ADD_POST,
        payload: res.data,
      })
    )
    .catch((err) => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      });
    });
};

export const getPosts = () => (dispatch) => {
  dispatch(setPostLoading());
  axios
    .get(`${config.api.prefix}/post`)
    .then((res) =>
      dispatch({
        type: GET_POSTS,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: GET_POSTS,
        payload: null,
      })
    );
};

export const getPost = (id) => (dispatch) => {
  dispatch(setPostLoading());
  axios
    .get(`${config.api.prefix}/post/${id}`)
    .then((res) =>
      dispatch({
        type: GET_POST,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: GET_POST,
        payload: null,
      })
    );
};

// Delete Post
export const deletePost = (id) => (dispatch) => {
  dispatch(clearErrors());
  axios
    .delete(`${config.api.prefix}/post/${id}`)
    .then((res) =>
      dispatch({
        type: DELETE_POST,
        payload: res.data,
      })
    )
    .catch(() =>
      dispatch({
        type: DELETE_POST,
        payload: id,
      })
    );
};

// Add Like
export const addLike = (id) => (dispatch) => {
  axios
    .post(`${config.api.prefix}/post/like/${id}`)
    .then((res) => dispatch(getPosts()))
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    );
};

// Remove Like
export const removeLike = (id) => (dispatch) => {
  axios
    .post(`${config.api.prefix}/post/unlike/${id}`)
    .then((res) => dispatch(getPosts()))
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    );
};

// Add Comment
export const addComment = (postId, commentData) => (dispatch) => {
  dispatch(clearErrors());
  axios
    .post(`${config.api.prefix}/post/comment/${postId}`, commentData)
    .then((res) =>
      dispatch({
        type: GET_POST,
        payload: res.data,
      })
    )
    .catch((err) => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      });
    });
};

// Delete Comment
export const deleteComment = (postId, commentId, history) => (dispatch) => {
  axios
    .delete(`${config.api.prefix}/post/comment/${postId}/${commentId}`)
    .then((res) =>
      dispatch({
        type: GET_POST,
        payload: res.data,
      })
    )
    .then(() => {
      history.push(`/post/${postId}`);
    })
    .catch((err) => {
      dispatch({
        type: GET_ERRORS,
        payload: postId,
      });
    });
};

// Set loading state
export const setPostLoading = () => {
  return {
    type: POST_LOADING,
  };
};

// Clear errors
export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS,
  };
};
