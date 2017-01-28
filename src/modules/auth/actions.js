import { browserHistory } from 'react-router';
import { axios, headerAuthToken } from '../../config';
import usersTypes from '../users/actionTypes';
import filesTypes from '../files/actionTypes';
import authTypes from './actionTypes' ;
import { 
  handleRequestSuccess, 
  handleRequestError, 
  handleRequestFail, 
} from '../common/actions';

export const signInRequest = (credentials) => {
  return dispatch => {
    axios.post(`auth/signin`, credentials)
    .then(response => {
      if (response.data.success) {
        localStorage.setItem('token', response.data.token);
        headerAuthToken.set();
        dispatch({ 
          type: authTypes.USER_SIGNIN,
          payload: response.data.results
        });
        dispatch(handleRequestSuccess(response));
        if (response.data.results.isAdmin) {
          browserHistory.push('/dashboard/users');
        }
        else {
          browserHistory.push(`/dashboard/${response.data.results._id}/files`);          
        }
      }
      else {
        dispatch(handleRequestError(response));
      }
    })
    .catch(error => {
      dispatch(handleRequestFail(error));
    })
  }
}

export const signOutRequest = () => {
  return dispatch => {
    dispatch({
      type: authTypes.USER_SIGNOUT
    })
    localStorage.removeItem('token');
    headerAuthToken.remove();
    dispatch({
      type: filesTypes.RESET_STATE
    });
    dispatch({
      type: usersTypes.RESET_STATE
    });
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