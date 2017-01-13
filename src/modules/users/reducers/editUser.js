import types from '../actionTypes';

const initialState = {
  _id: null,
  username: null,
  email: null,
  company: null,
  password: null,
  confirmPassword: null,
  checkbox: null
};

const editUser = (state = initialState, action) => {
  switch (action.type) {
    case types.EDIT_USER_DATA_CLEAR:
      return initialState;
    default:
      return state;
  }
}

export default editUser;