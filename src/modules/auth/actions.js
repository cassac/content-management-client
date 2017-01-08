import axios from 'axios';
import types from './actionTypes';

axios.defaults.baseURL = 'http://localhost:3000/';
axios.defaults.headers.common['authorization'] = localStorage.token;

export default SignInRequest = (credentials) => {
  return dispatch => {
    axios.post(`auth/signin`, credentials)
    .then(response => {
      // dispatch
    })
    .catch(error => {
      // dispatch
    })
  }
}