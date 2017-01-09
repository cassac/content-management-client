import types from '../actionTypes';

const initialState = {
  authenticated: false
}

const auth = (state = initialState, action) => {
  switch (action.type) {
    case types.USER_SIGNIN:
      return {
        authenticated: true,
      }
    case types.USER_SIGNOUT:
      return {
        authenticated: false,
      }
    default:
      return state;
  } 
}

module.exports = {
  auth
}