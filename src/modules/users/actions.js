import axios from 'axios';
import usersTypes from './actionTypes';
import commonTypes from '../common/actionTypes';

const BASE_URL = 'http://localhost:3000/';

export const sortUsersBy = (criteria, direction) => {
  return {
    type: usersTypes.SORT_USERS_BY,
    criteria,
    direction
  }
}

export const toggleDeleteUserModal = (user) => {
  return {
    type: usersTypes.DELETE_USER_MODAL_OPEN,
    user
  }
}

export const editUserSubmit = (updatedUser) => {
  return dispatch => {
    axios.put(`${BASE_URL}api/users/${updatedUser._id}`)
    .then(response => {
      dispatch({
        type: commonTypes.REQUEST_SUCCESS,
        payload: response.body,
      })
    })
    .catch(error => {
      dispatch({
        type: commonTypes.REQUEST_ERROR,
        payload: {
          message: error.response.statusText, 
          status: error.response.status
        }
      });
    });
  }
}

export const toggleEditUserModal = (user) => {
  return {
    type: usersTypes.EDIT_USER_MODAL_OPEN,
    user
  }
}

export const toggleCreateUserModal = () => {
  return {
    type: usersTypes.CREATE_USER_MODAL_OPEN
  }
}

export const getUserData = (query) => {
  return (dispatch) => {
    axios.get('api/users')
    .then(response => {
      if (response.success) {
        dispatch({
          type: usersTypes.REQUESTED_USERS,
          success: response.success,
          message: response.message,
          results: response.results
        })
      }
      else {
        dispatch({
          type: commonTypes.REQUEST_ERROR,
          payload: response.body
        })
      }
    })
    .catch(error => {
      dispatch({
        type: commonTypes.REQUEST_ERROR,
        payload: {
          message: error.response.statusText, 
          status: error.response.status
        }
      })
    });
  }
}