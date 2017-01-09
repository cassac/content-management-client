import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000/';
axios.defaults.headers.common['authorization'] = localStorage.token;

module.exports = {
  axios,
  userSearchCriteria: [
    'Username',
    'Company',
    'Email',
    'Last name'
  ],
}