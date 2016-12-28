import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
// import { persistStore } from 'redux-persist';
import storeConfig from './reducers';
import App from './modules/common/components/App';
import UsersDashboard from './modules/users/components/Dashboard';

const store = storeConfig();
// persistStore(store);

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/dashboard' component={App}>
        <Route path='/dashboard/users' component={UsersDashboard} />
      </Route>
    </Router>
  </Provider>, 
  document.getElementById('app')
);