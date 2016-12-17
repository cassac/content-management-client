import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import App from './components/App';
import UsersDashboard from './containers/UsersDashboard';

render(
  <Router history={browserHistory}>
    <Route path='/dashboard' component={App}>
      <Route path='/dashboard/users' component={UsersDashboard} />
    </Route>
  </Router>, 
  document.getElementById('app')
);