import axios from "axios";

import {
  ADD_POST,
  GET_ERRORS,
  CLEAR_ERRORS,
  GET_POSTS,
  GET_POST,
  POST_LOADING,
  DELETE_POST,
  UPDATE_POST
} from "./types";

const baseUrl = process.env.REACT_APP_BASE_URL;


/**
 * User post data to create post in testimony post feed
 * @param {object} postData 
 */
export const addPost = postData => dispatch => {
  dispatch(clearErrors());
  axios
    .post(`${baseUrl}/posts`, postData)
    .then(res =>
      dispatch({
        type: ADD_POST,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};


/**
 * Fetching post data for the testimony page post feed. 
 * 
 * @param {Function} postData 
 */
export const getPosts = postData => dispatch => {
  dispatch(setPostLoading());
  axios
    .get(`${baseUrl}/posts`, postData)
    .then(res =>
      dispatch({
        type: GET_POSTS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_POSTS,
        payload: null
      })
    );
};


/**
 * By id user is liking a post
 * Not backend functionality for this.*so it is unused.
 * @param {String} id 
 */
export const addLike = id => dispatch => {
  axios
    .post(`${baseUrl}/posts/like/${id}`)
    .then(res => dispatch(getPosts()))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

/**
 * Unliking post by id
 * Not backend functionality for this.*so it is unused.
 * @param {string} id 
 * @param {object} postData 
 */
export const removeLike = (id, postData) => dispatch => {
  axios
    .post(`${baseUrl}/posts/unlike/${id}`, postData)
    .then(res => dispatch(getPosts()))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

/**
 * This gives the user the ability to comment on the post. Not backend functionality for this.
 * so it is unused. 
 * @param {string} postId 
 * @param {string} commentData 
 */
export const addComment = (postId, commentData) => dispatch => {
  dispatch(clearErrors());
  axios
    .post(`${baseUrl}/posts/comment/${postId}`, commentData)
    .then(res =>
      dispatch({
        type: GET_POST,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

/**
 * Delete a comment. 
 * 
 * @param {string} postId 
 * @param {string} commentId 
 */
export const deleteComment = (postId, commentId) => dispatch => {
  axios
    .delete(`${baseUrl}/posts/comment/${postId}/${commentId}`)
    .then(res =>
      dispatch({
        type: GET_POST,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Set loading state
export const setPostLoading = () => {
  return {
    type: POST_LOADING
  };
};

// Clear errors
export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS
  };
};


/**
 * Fetching Post Text for inputs in Update Form For Editing!
 * 
 * @param {string} id 
 */
export const getPost = id => async dispatch => {
  const res = await axios.get(`${baseUrl}/posts/${id}`);
  dispatch({
    type: GET_POST,
    payload: res.data
  });
};




/**
 * So far this is only allowing a user who is Admin to Update post by id
 * @param {object} post 
 * @param {string} id 
 */
export const updatePost = (post, id) => async dispatch => {
  const res = await axios.put(`${baseUrl}/posts/${id}`, post);
  dispatch({
    type: UPDATE_POST,
    payload: res.data
  });
};

/**
 * So far this is only allowing a user who is Admin to delete post by id 
 * @param {string} id 
 */
export const deletePost = id => dispatch => {
  axios
    .delete(`${baseUrl}/posts/${id}`)
    .then(res =>
      dispatch({
        type: DELETE_POST,
        payload: id
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};