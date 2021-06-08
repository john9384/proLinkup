import {
  ADD_POST,
  GET_POSTS,
  GET_POST,
  DELETE_POST,
  POST_LOADING,
} from "../actions/types";

const initialState = {
  list: [],
  single: {},
  loading: false,
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_POSTS:
      return {
        ...state,
        list: action.payload,
        loading: false,
      };
    case GET_POST:
      return {
        ...state,
        single: action.payload,
        loading: false,
      };
    case ADD_POST:
      return {
        ...state,
        list: action.payload,
      };
    case DELETE_POST:
      return {
        ...state,
        list: action.payload,
      };
    default:
      return state;
  }
};

export default postReducer;
