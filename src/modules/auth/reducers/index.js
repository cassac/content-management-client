import types from '../actionTypes';

const initialState = {
  authenticated: localStorage.token ? true : false,
  // authenticated: false,
  isAdmin: false,
}

const auth = (state = initialState, action) => {
  switch (action.type) {
    case types.USER_SIGNIN:
      return {
        ...action.payload,
        authenticated: true,
      }
    case types.USER_SIGNOUT:
      return {
        authenticated: false,
        isAdmin: false,
      }
    default:
      return state;
  } 
}

module.exports = {
  auth
}