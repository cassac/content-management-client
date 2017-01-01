import types from '../actionTypes';

const initialState = {
  userId: null,
  username: null,
  email: null,
  company: null,
};

const editUser = (state = initialState, action) => {
  switch (action.type) {
    case types.EDIT_USER_DATA:
      return {
        ...state,
        _id: action._id,
        username: action.username,
        email: action.email,
        company: action.company,
      }
    case types.EDIT_USER_DATA_CLEAR:
      return initialState;
    default:
      return state;
  }
}

export default initialState;