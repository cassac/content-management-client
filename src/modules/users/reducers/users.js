import types from '../actionTypes';

const initialState = {
  results: [],
  createUserModalOpen: false,
  editUserModalOpen: false,
  editUserId: null,
  editUsername: null,
  editUserEmail: null,
  editUserCompany: null,
  deleteUserModalOpen: false,
  deleteUserId: null,
  deleteUsername: null,
  deleteUserEmail: null,
  deleteUserCompany: null,
}

const users = (state = initialState, action) => {
  switch (action.type) {
    case types.REQUEST_USERS:
      return {
        ...state,
        ...action.payload
      };
    case types.CREATE_USER_MODAL_OPEN:
      return {
        ...state,
        createUserModalOpen: !state.createUserModalOpen
      };
    case types.CREATE_USER_SUCCESS:
      return {
        ...state,
        results: [...state.results, action.payload],
      }
    case types.EDIT_USER_MODAL_OPEN:
      return {
        ...state,
        editUserModalOpen: !state.editUserModalOpen,
        editUserId: state.editUserModalOpen ? null : action.user._id,
        editUsername: state.editUserModalOpen ? null : action.user.username,
        editUserEmail: state.editUserModalOpen ? null : action.user.email,
        editUserCompany: state.editUserModalOpen ? null : action.user.company,
      }
    case types.EDIT_USER_SUCCESS:
      const { payload } = action;
      return {
        ...state,
        results: state.results.map(user => {
          if (payload._id === user._id) {
            return payload;
          }
          return user;
        }),
      }
    case types.DELETE_USER_MODAL_OPEN:
      return {
        ...state,
        deleteUserModalOpen: !state.deleteUserModalOpen,
        deleteUserId: state.deleteUserModalOpen ? null : action.user._id, 
        deleteUsername: state.deleteUserModalOpen ? null : action.user.username, 
        deleteUserEmail: state.deleteUserModalOpen ? null : action.user.email, 
        deleteUserCompany: state.deleteUserModalOpen ? null : action.user.company, 
      }
    case types.SORT_USERS_BY:
      const sortBy = (a, b) => {
        if (action.direction === 'ascending') {
          if (a[action.criteria.toLowerCase()] < b[action.criteria.toLowerCase()]) {
            return -1;
          }
          return 1;
        }
        else { // descending
          if (a[action.criteria.toLowerCase()] < b[action.criteria.toLowerCase()]) {
            return 1;
          }
          return -1;
        }
      }
      return {
        ...state,
        results: state.results.slice().sort(sortBy), // use slice to copy array
      }
    default:
      return state;
  }
}

export default users;