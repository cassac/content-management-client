import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import App from './components/App';
import UsersDashboard from './containers/UsersDashboard';

const store = persistStore(configureStore());

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