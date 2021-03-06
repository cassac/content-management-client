import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import storeConfig from './reducers';
import App from './modules/common/components/App';
import PageNotFound from './modules/common/components/404';
import Signin from './modules/auth/components/Signin';
import UsersDashboard from './modules/users/components/Dashboard';
import UserFiles from './modules/files/components/UserFiles';
import { requireAuth } from './modules/auth/components/auth';
import { authRedirect } from './modules/auth/components/redirect';

const store = storeConfig();
persistStore(store);

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route 
        path='/dashboard'
        component={App}
      >
        <Route 
          path='/dashboard/signin' 
          component={authRedirect(Signin)} 
        />
        <Route 
          path='/dashboard/users' 
          component={requireAuth(UsersDashboard)} 
        />
        <Route 
          path='/dashboard/:userId/files' 
          component={requireAuth(UserFiles)} 
        />
        <Route 
          path='*'
          component={PageNotFound}
        />
      </Route>
    </Router>
  </Provider>, 
  document.getElementById('app')
);