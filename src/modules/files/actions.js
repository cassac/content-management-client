import types from './actionTypes';

export const toggleCreateFileModal = () => {
  return {
    type: types.CREATE_FILE_MODAL_OPEN,
  }
}

export const toggleEditFileModal = file => {
  return {
    type: types.EDIT_FILE_MODAL_OPEN,
    file
  }
}

export const toggleDeleteFileModal = file => {
  return {
    type: types.DELETE_FILE_MODAL_OPEN,
    file
  }
}