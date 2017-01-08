import { axios } from '../../config';
import types from './actionTypes';

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