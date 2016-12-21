import types from '../actionTypes';

const initialState = {
  success: null,
  message: null,
  results: [],
  error: null
}

const users = (state = initialState, action) => {
  switch (action.type) {
    case types.REQUESTED_USERS:
      return Object.assign({}, state, {
        results: action.results
      });
    default:
      return state;
  }
}

export default users;