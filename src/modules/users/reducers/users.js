import types from '../actionTypes';

const initialState = {
  success: null,
  message: null,
  results: [],
  newUserModalOpen: false,
  error: null
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
    default:
      return state;
  }
}

export default users;