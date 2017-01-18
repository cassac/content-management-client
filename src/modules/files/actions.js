import fileTypes from './actionTypes';

export const toggleCreateFileModal = () => {
  return {
    type: fileTypes.CREATE_FILE_MODAL_OPEN,
  }
}

export const toggleEditFileModal = file => {
  return {
    type: fileTypes.EDIT_FILE_MODAL_OPEN,
    file
  }
}

export const toggleDeleteFileModal = file => {
  return {
    type: fileTypes.DELETE_FILE_MODAL_OPEN,
    file
  }
}

export const createFileSubmit = (userId, file) => {
  return dispatch => {
    axios.post(`api/users/${userId}/file`, file)
    .then(response => {
      if (response.data.success) {
        dispatch(handleRequestSuccess(response));
        dispatch({
          type: fileTypes.CREATE_FILE_SUCCESS,
          payload: response.data.results
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

export const editFileSubmit = (userId, file) => {
  return dispatch => {
    axios.put(`api/users/${userId}/file/${file._id}`, file)
    .then(response => {
      if (response.data.success) {
        dispatch(handleRequestSuccess(response));
        dispatch({
          type: fileTypes.EDIT_FILE_SUCCESS,
          payload: response.data.results,
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

export const deleteFileSubmit = (userId, file) => {
  return dispatch => {
    axios.delete(`api/users/${userId}/file/${file._id}`)
    .then(response => {
      if (response.data.success) {
        dispatch(handleRequestSuccess(response));
        dispatch({
          type: fileTypes.DELETE_FILE_SUCCESS,
          payload: {_id: file._id},
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