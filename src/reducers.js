import { 
  createStore,
  compose, 
  applyMiddleware, 
  combineReducers, 
} from 'redux';
import { 
  users, 
  editUser, 
  createUser, 
} from './modules/users/reducers/index';
import { combineForms } from 'react-redux-form';
import thunk from 'redux-thunk';
import { autoRehydrate } from 'redux-persist';
import requests from './modules/common/reducers/requests';

const form = combineForms({
  editUser,
  createUser,
});

const rootReducer = combineReducers({
  users,
  requests,
  form,
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