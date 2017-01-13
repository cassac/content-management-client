import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000/';
// axios.defaults.headers.common['authorization'] = localStorage.token;
// `validateStatus` defines whether to resolve or reject the promise for a given
// HTTP response status code. If `validateStatus` returns `true` (or is set to `null`
// or `undefined`), the promise will be resolved; otherwise, the promise will be
// rejected.
axios.defaults.validateStatus = function (status) {
  return status >= 200 && status < 500; 
}

module.exports = {
  axios,
  headerAuthToken: {
    set: () => {
      axios.defaults.headers.common['authorization'] = localStorage.token;
    },
    remove: () => {
      axios.defaults.headers.common['authorization'] = null;      
    }
  },
  userSearchCriteria: [
    'Username',
    'Company',
    'Email',
    'Surname'
  ],
}