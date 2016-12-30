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

const formReducer = combineForms({
  editUser,
});

const rootReducer = combineReducers({
  users,
  sortUsers,
  formReducer
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