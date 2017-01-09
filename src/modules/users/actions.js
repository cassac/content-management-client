import { axios } from '../../config';
import usersTypes from './actionTypes';
import commonTypes from '../common/actionTypes';
import { 
  handleRequestSuccess, 
  handleRequestError, 
  handleRequestFail 
} from '../common/actions';

export const sortUsersBy = (criteria, direction) => {
  return {
    type: usersTypes.SORT_USERS_BY,
    criteria,
    direction
  }
}

export const deleteUserSubmit = (userId) => {
  return dispatch => {
    axios.delete(`api/users/${userId}`)
    .then(response => {
      dispatch(handleRequestSuccess(response));
    })
    .catch(error => {
      dispatch(handleRequestFail(error));
    });
  }
}

export const createUserSubmit = (newUser) => {
  return dispatch => {
    axios.post(`auth/signup`, newUser)
    .then(response => {
      dispatch(handleRequestSuccess(response));
      dispatch({
        type: usersTypes.CREATE_USER_SUCCESS,
        payload: response.data.results
      });
      dispatch({
        type: usersTypes.CREATE_USER_MODAL_OPEN
      });
    })
    .catch(error => {
      dispatch(handleRequestFail(error));
    });
  }
}

export const editUserSubmit = (updatedUser) => {
  return dispatch => {
    axios.put(`api/users/${updatedUser._id}`, updatedUser)
    .then(response => {
      dispatch(handleRequestSuccess(response));
      dispatch({
        type: usersTypes.EDIT_USER_SUCCESS,
        payload: response.data.results
      });
      dispatch({
        type: usersTypes.EDIT_USER_MODAL_OPEN
      });
    })
    .catch(error => {
      dispatch(handleRequestFail(error));
    });
  }
}

export const toggleDeleteUserModal = (user) => {
  return {
    type: usersTypes.DELETE_USER_MODAL_OPEN,
    user
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

export const getUsers = (cb) => {
  return (dispatch) => {
    axios.get('api/users')
    .then(response => {
      if (response.data.success) {
        dispatch(handleRequestSuccess(response));
        dispatch({
          type: usersTypes.REQUEST_USERS,
          payload: response.data
        })
      }
      else {
        dispatch(handleRequestError(response));
      }
      // invoke callback if present
      if (cb) cb();
    })
    .catch(error => {
      dispatch(handleRequestFail(error));
    });
  }
}