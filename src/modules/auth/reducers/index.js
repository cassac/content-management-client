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
    case types.UPDATE_AUTH:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state;
  } 
}

module.exports = {
  auth
}