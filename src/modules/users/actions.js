import axios from 'axios';
import types from './actionTypes';

export const sortUsersBy = (criteria, direction) => {
  return {
    type: types.SORT_USERS_BY,
    criteria,
    direction
  }
}

export const toggleDeleteUserModal = (user) => {
  return {
    type: types.DELETE_USER_MODAL_OPEN,
    user
  }
}

export const editUserSubmit = (updatedUser) => {
  return {
    type: types.EDIT_USER_SUBMIT,
    // type: types.EDIT_USER_DATA_CLEAR,
    updatedUser
  }
}

export const editUserPOST = (updatedUser) => {
  return dispatch => {
    axios.post(`api/users/${updatedUser._id}`)
    .then(response => {
      dispatch({
        // add action
      })
    })
    .catch(error => {
      dispatch({
        type: types.REQUEST_ERROR,
        payload: { 
          // add payload
        }
      })
    });
  }
}

export const toggleEditUserModal = (user) => {
  return {
    type: types.EDIT_USER_MODAL_OPEN,
    user
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