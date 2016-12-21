import { 
  createStore,
  compose, 
  applyMiddleware, 
  combineReducers 
} from 'redux';
import thunk from 'redux-thunk';
import { autoRehydrate } from 'redux-persist';
import { users } from './modules/users/reducers/index';

const rootReducer = combineReducers({
  users
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