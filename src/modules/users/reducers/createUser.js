import types from '../actionTypes';

const initialState = {
  username: null,
  email: null,
  company: null,
};

const createUser = (state = initialState, action) => {
  switch (action.type) {
    case types.CREATE_USER_DATA_CLEAR:
      return initialState;
    default:
      return state;
  }
}

export default createUser;