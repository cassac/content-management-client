import React from 'react';
import { browserHistory } from 'react-router';

const PageNotFound = () => {
  (function redirect() {
    setTimeout(function() {
      browserHistory.push('/dashboard/signin');
    }, 2000);
  })();
  return (
    <p>Page not found. Redirecting...</p>
  )
}

export default PageNotFound;