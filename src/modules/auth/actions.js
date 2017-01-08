import { browserHistory } from 'react-router';
import { axios } from '../../config';
import types from './actionTypes' ;
import { 
  handleRequestSuccess, 
  handleRequestError, 
  handleRequestFail, 
} from '../common/actions';

export const signInRequest = (credentials) => {
  return dispatch => {
    axios.post(`auth/signin`, credentials)
    .then(response => {
      localStorage.setItem('token', response.data.token);
      dispatch({ type: types.USER_SIGNIN });
      dispatch(handleRequestSuccess(response));
      browserHistory.push('/dashboard/users');
    })
    .catch(error => {
      dispatch(handleRequestError(error));
    })
  }
}