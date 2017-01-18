import types from '../actionTypes';

const initialState = {
  results: [],
  createFileModalOpen: false,
  editFileModalOpen: false,
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