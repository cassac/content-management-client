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