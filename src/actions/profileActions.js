import axios from "axios";

import {
  GET_PROFILE,
  GET_PROFILES,
  PROFILE_LOADING,
  CLEAR_CURRENT_PROFILE,
  GET_ERRORS,
  SET_CURRENT_USER
} from "./types";

const baseUrl = process.env.REACT_APP_BASE_URL;


/**
 * Get current signed in user by id
 * @param {object} userData 
 */
export const getCurrentProfile = userData => dispatch => {
  dispatch(setProfileLoading());
  axios
    .get(`${baseUrl}/users/me`, userData)
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

// Get profile by handle by profile id 
export const getProfileByHandle = () => dispatch => {
  dispatch(setProfileLoading());
  axios
    .get(`${baseUrl}/users/me`)
    .then(res =>
      dispatch({
        type: GET_PROFILE,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_PROFILE,
        payload: null
      })
    );
};


/**
 * Create personal info FOR the Profile
 * @param {object} profileData 
 * @param {func} history 
 */
export const createInfo = (profileData, history) => dispatch => {
  axios
    .post(`${baseUrl}/profiles`, profileData)
    .then(res => history.push("/dashboard"))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};



/**
 * Delete experiences in create profile 
 * @param {string} id 
 */
export const deleteExperience = id => dispatch => {
  axios
    .delete(`${baseUrl}/profile/experience/${id}`)
    .then(res =>
      dispatch({
        type: GET_PROFILE,
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


// Get all profiles to view and connect with other users

export const getProfiles = () => dispatch => {
  dispatch(setProfileLoading());
  axios
    .get(`${baseUrl}/profile/all`)
    .then(res =>
      dispatch({
        type: GET_PROFILES,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_PROFILES,
        payload: null
      })
    );
};

// Delete account & profile

export const deleteAccount = () => dispatch => {
  if (window.confirm("Are you sure? This can NOT be undone!")) {
    axios
      .delete(`${baseUrl}/sprofile`)
      .then(res =>
        dispatch({
          type: SET_CURRENT_USER,
          payload: {}
        })
      )
      .catch(err =>
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data
        })
      );
  }
};

// Profile loading
export const setProfileLoading = () => {
  return {
    type: PROFILE_LOADING
  };
};

// Clear profile
export const clearCurrentProfile = () => {
  return {
    type: CLEAR_CURRENT_PROFILE
  };
};
