import { axios } from '../../config';
import fileTypes from './actionTypes';
import { 
  handleRequestSuccess, 
  handleRequestError, 
  handleRequestFail 
} from '../common/actions';

export const toggleUploadFileModal = () => {
  return {
    type: fileTypes.UPLOAD_FILE_MODAL_OPEN,
  }
}

export const toggleEditFileModal = file => {
  return {
    type: fileTypes.EDIT_FILE_MODAL_OPEN,
    file
  }
}

export const toggleDeleteFileModal = (file = {}) => {
  return {
    type: fileTypes.DELETE_FILE_MODAL_OPEN,
    file
  }
}

export const getUserFiles = (userId, cb) => {
  return dispatch => {
    axios.get(`api/users/${userId}/files`)
    .then(response => {
      if (response.data.success) {
        dispatch(handleRequestSuccess(response));
        dispatch({
          type: fileTypes.REQUEST_USER_FILES,
          payload: response.data.results,        
        });
        if (cb) cb();
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

export const uploadFileSubmit = (userId, data) => {
  return dispatch => {
    axios.post(`/api/users/${userId}/files`, data)
    .then(response => {
      if (response.data.success) {
        dispatch(handleRequestSuccess(response));
        dispatch({
          type: fileTypes.UPLOAD_FILE_SUCCESS,
          payload: response.data.results
        });
        dispatch({
          type: fileTypes.UPLOAD_FILE_MODAL_OPEN
        });
      }
      else {
        dispatch(handleRequestError(response));
      }
    })
    .catch(error => {
      dispatch(handleRequestFail(response));
    })
  }
}

export const editFileOnChangeHandler = (field, value) => {
  return {
    type: fileTypes.EDIT_FILE_ON_CHANGE,
    payload: { field, value },
  }
}

export const editFileSubmit = (userId, file) => {
  return dispatch => {
    axios.put(`api/users/${userId}/files/${file._id}`, file)
    .then(response => {
      if (response.data.success) {
        dispatch(handleRequestSuccess(response));
        dispatch({
          type: fileTypes.EDIT_FILE_SUCCESS,
          payload: response.data.results,
        });
        dispatch({
          type: fileTypes.EDIT_FILE_MODAL_OPEN,
        })
      }
      else {
        dispatch(handleRequestError(response));
      }
    })
    .catch(error => {
      dispatch(handleRequestFail(response));
    })
  }
}

export const deleteFileSubmit = (userId, fileId) => {
  return dispatch => {
    axios.delete(`api/users/${userId}/files/${fileId}`)
    .then(response => {
      if (response.data.success) {
        dispatch(handleRequestSuccess(response));
        dispatch({
          type: fileTypes.DELETE_FILE_SUCCESS,
          payload: { fileId },
        });
        dispatch({
          type: fileTypes.DELETE_FILE_MODAL_OPEN,
          file: {},
        });
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