import types from './actionTypes';

export const handleRequestSuccess = (response) => {
  return {
    type: types.REQUEST_SUCCESS,
    payload: response.body
  }
}

export const handleRequestError = ({response}) => {
  return {
    type: types.REQUEST_ERROR,
    payload: response.data
  }
}

export const handleRequestFail = (error) => {
  return {
    type: types.REQUEST_ERROR,
    payload: {
      message: error.response.statusText, 
      status: error.response.status
    }
  }
}