import axios from 'axios';
import types from './actionTypes';

export const sortUsersBy = (criteria, direction) => {
  return {
    type: SORT_USERS_BY,
    criteria,
    direction
  }
}

export const toggleNewUserModal = () => {
  return {
    type: types.NEW_USER_MODAL_OPEN
  }
}

export const getUserData = (query) => {
  return (dispatch) => {
    axios.get('api/users')
    .then(response => {
      if (response.success) {
        dispatch({
          type: types.REQUESTED_USERS,
          success: response.success,
          message: response.message,
          results: response.results
        })
      }
      else {
        dispatch({
          type: types.REQUEST_USERS_ERROR,
          success: response.success,
          message: response.message
        })
      }
    })
    .catch(error => {
      dispatch({
        type: types.REQUEST_USERS_ERROR,
        success: response.success,
        message: response.message
      });
    });
  }
}