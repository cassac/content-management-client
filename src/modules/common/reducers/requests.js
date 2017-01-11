import types from '../actionTypes';

const initialState = {
  success: null,
  message: null,
  status: null,
  displayMessage: true,
};

const requests = (state = initialState, action) => {
  const { payload } = action;
  switch (action.type) {
    case types.REQUEST_SUCCESS:
      return {
        ...state,
        success: payload.success,
        message: payload.message
      }
    case types.REQUEST_ERROR:
      return {
        ...state,
        success: false,
        ...payload
      }
    case types.REQUEST_MESSAGE_DISPLAY:
      return {
        ...state,
        displayMessage: !state.displayMessage
      }
    case types.REQUEST_REDUCER_CLEAR:
      return initialState;
    default:
      return state;
  }
}

export default requests;