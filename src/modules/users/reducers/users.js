import types from '../actionTypes';

const initialState = {
  success: null,
  message: null,
  results: [],
  newUserModalOpen: false,
  editUserModalOpen: false,
  editUserId: null,
  deleteUserModalOpen: false,
  deleteUserId: null,
  error: null,
}

const users = (state = initialState, action) => {
  switch (action.type) {
    case types.REQUESTED_USERS:
      return {
        ...state,
        results: action.results
      };
    case types.NEW_USER_MODAL_OPEN:
      return {
        ...state,
        newUserModalOpen: !state.newUserModalOpen
      };
    case types.EDIT_USER_MODAL_OPEN:
      return {
        ...state,
        editUserModalOpen: !state.editUserModalOpen,
        editUserId: state.editUserModalOpen ? null : action.user._id,
        editUsername: state.editUserModalOpen ? null : action.user.username,
        editUserEmail: state.editUserModalOpen ? null : action.user.email,
        editUserCompany: state.editUserModalOpen ? null : action.user.company,
      }
    case types.DELETE_USER_MODAL_OPEN:
      return {
        ...state,
        deleteUserModalOpen: !state.deleteUserModalOpen,
        deleteUserId: state.deleteUserModalOpen ? null : action.user._id 
      }
    default:
      return state;
  }
}

export default users;