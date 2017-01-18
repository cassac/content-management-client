import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
// import { persistStore } from 'redux-persist';
import storeConfig from './reducers';
import App from './modules/common/components/App';
import Signin from './modules/auth/components/Signin';
import UsersDashboard from './modules/users/components/Dashboard';
import UserFiles from './modules/files/components/UserFiles';
import { requireAuth } from './modules/auth/components/auth';

const store = storeConfig();
// persistStore(store);

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route 
        path='/dashboard'
        component={App}
      >
        <Route 
          path='/dashboard/signin' 
          component={Signin} 
        />
        <Route 
          path='/dashboard/users' 
          component={requireAuth(UsersDashboard)} 
        />
        <Route 
          path='/dashboard/:username/files' 
          component={requireAuth(UserFiles)} 
        />
      </Route>
    </Router>
  </Provider>, 
  document.getElementById('app')
);