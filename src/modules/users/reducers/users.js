import { userFilterCriteria } from '../../../config';
import types from '../actionTypes';

const initialState = {
  results: [],
  filteredResults: [],
  filterTerm: null,
  createUserModalOpen: false,
  editUserModalOpen: false,
  editUserId: null,
  editUsername: null,
  editUserEmail: null,
  editUserFirstName: null,
  editUserLastName: null,
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
        editUserFirstName: state.editUserModalOpen ? null : action.user.firstName,
        editUserLastName: state.editUserModalOpen ? null : action.user.lastName,
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
    case types.DELETE_USER_SUCCESS:
      return {
        ...state,
        results: state.results.filter(user => user._id !== action.payload._id),
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
            return 1;
          }
          return -1;
        }
        else { // descending
          if (a[action.criteria.toLowerCase()] < b[action.criteria.toLowerCase()]) {
            return -1;
          }
          return 1;
        }
      }
      return {
        ...state,
        results: state.results.slice().sort(sortBy), // use slice to copy array
      }
    case types.FILTER_USERS:
      // use filterTerm as a filter for user object values
      const filtered = state.results.filter(user => {
        for (let k in user) {
          const value = String(user[k]);
          if (value.toLowerCase().indexOf(action.filterTerm.toLowerCase()) !== -1) {
            return user;
          }
        }
      });
      return {
        ...state,
        filterTerm: action.filterTerm,
        filteredResults: filtered
      }
    case types.RESET_USERS_STORE:
      return initialState;
    default:
      return state;
  }
}

export default users;