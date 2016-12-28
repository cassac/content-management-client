import types from '../actionTypes';

const initialState = {
  criteria: null,
  direction: null
}

const sortUsers = (state = initialState, action) => {
  switch (action.type) {
    case types.SORT_USERS_BY_CRITERIA:
      return {
        ...state,
        criteria: action.criteria
      };
    case types.SORT_USERS_BY_DIRECTION:
      return {
        ...state,
        direction: action.direction
      };
    default:
      return state;
  }
}

export default sortUsers;