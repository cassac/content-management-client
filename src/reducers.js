import { 
  createStore,
  compose, 
  applyMiddleware, 
  combineReducers 
} from 'redux';
import thunk from 'redux-thunk';
import { autoRehydrate } from 'redux-persist';
import usersReducer from './modules/users/reducers';

const rootReducer = combineReducers({
  users: usersReducer
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