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
    case types.CREATE_FILE_SUCCESS:
      return {
        ...state,
        results: [...state.results, action.payload],
      }
    case types.EDIT_FILE_MODAL_OPEN:
      return {
        ...state,
        editFileModalOpen: !state.editFileModalOpen,
        editFileId: state.editFileModalOpen ? null : action.file._id,
        editFileComment: state.editFileModalOpen ? null : action.file.comment,
      }
    case types.EDIT_FILE_SUCCESS:
      const { payload } = action;
      return {
        ...state,
        results: state.results.map(file => {
          if (payload._id === file._id) {
            return payload;
          }
          return file;
        }),
      }
    case types.DELETE_FILE_MODAL_OPEN:
      return {
        ...state,
        deleteFileModalOpen: !state.deleteFileModalOpen,
      }
    case types.DELETE_USER_SUCCESS:
      return {
        ...state,
        results: state.results.filter(file => file._id !== action.payload._id),
      }
    default: 
      return state;
  }
}