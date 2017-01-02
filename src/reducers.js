import { 
  createStore,
  compose, 
  applyMiddleware, 
  combineReducers 
} from 'redux';
import { combineForms } from 'react-redux-form';
import thunk from 'redux-thunk';
import { autoRehydrate } from 'redux-persist';
import { users, sortUsers, editUser } from './modules/users/reducers/index';
import requests from './modules/common/reducers/requests';

const form = combineForms({
  editUser,
});

const rootReducer = combineReducers({
  users,
  sortUsers,
  requests,
  form
});

const storeConfig = (initialState) => {
  return createStore(
    rootReducer,
    initialState,
    compose(
      autoRehydrate(),
      applyMiddleware(thunk),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  )
}

export default storeConfig;