import { browserHistory } from 'react-router';
import { axios, headerAuthToken } from '../../config';
import userTypes from '../users/actions';
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
      headerAuthToken.set();
      dispatch({ type: types.USER_SIGNIN });
      dispatch(handleRequestSuccess(response));
      browserHistory.push('/dashboard/users');
    })
    .catch(error => {
      dispatch(handleRequestError(error));
    })
  }
}

export const signOutRequest = () => {
  return dispatch => {
    dispatch({
      type: types.USER_SIGNOUT
    })
    localStorage.removeItem('token');
    headerAuthToken.remove();
    dispatch({
      type: userTypes.RESET_USERS_STATE
    })
    dispatch(handleRequestSuccess({
      data: {
        message: 'Successfully logged out',
        success: true,
        status: 200
      } 
    }));
    browserHistory.push('/dashboard/signin');
  }
}