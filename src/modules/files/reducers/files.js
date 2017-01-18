import types from '../actionTypes';

const initialState = {
  results: [],
  createFileModalOpen: false,
  editFileModalOpen: false,
  editFileId: null,
  editFileComment: null,
  deleteFileModalOpen: false,
}

const files = (state = initialState, action) => {
  switch (action.type) {
    case types.CREATE_FILE_MODAL_OPEN:
      return {
        ...state,
        createFileModalOpen: !state.createFileModalOpen,
      }
    case types.EDIT_FILE_MODAL_OPEN:
      return {
        ...state,
        editFileModalOpen: !state.editFileModalOpen,
        editFileId: state.editFileModalOpen ? null : action.file._id,
        editFileComment: state.editFileModalOpen ? null : action.file.comment,
      }
    case types.DELETE_FILE_MODAL_OPEN:
      return {
        ...state,
        deleteFileModalOpen: !state.deleteFileModalOpen,
      }
    default: 
      return state;
  }
}