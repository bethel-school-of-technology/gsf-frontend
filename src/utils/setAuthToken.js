import axios from 'axios';

const setAuthToken = token => {
  if (token) {
    //apply to every request
    axios.defaults.headers.common['x-auth-token'] = token;
  } else {
    // DELETE AUTH HEADER
    delete axios.defaults.headers.common['x-auth-token'];
  }
};
export default setAuthToken;
