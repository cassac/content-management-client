import types from '../actionTypes';

const initialState = {
  success: null,
  message: null,
  status: null,
};

const requests = (state = initialState, action) => {
  const { payload } = action;
  switch (action.type) {
    case types.REQUEST_SUCCESS:
      return {
        ...payload
      }
    case types.REQUEST_ERROR:
      return {
        success: false,
        ...payload
      }
    case types.REQUEST_REDUCER_CLEAR:
      return initialState;
    default:
      return state;
  }
}

export default requests;