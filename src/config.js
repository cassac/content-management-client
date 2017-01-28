import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000/';
axios.defaults.headers.common['authorization'] = localStorage.token;
// `validateStatus` defines whether to resolve or reject the promise for a given
// HTTP response status code. If `validateStatus` returns `true` (or is set to `null`
// or `undefined`), the promise will be resolved; otherwise, the promise will be
// rejected.
axios.defaults.validateStatus = function (status) {
  return status >= 200 && status <= 500; 
}

module.exports = {
  // Configuration
  userFilterCriteria: [
    'Username',
    'Company',
    'Email',
    'Name'
  ],
  axios,
  // Helpers
  parseFilename: (filePath) => {
    if (!filePath) return '';
    const parts = filePath.split('/');
    return parts[parts.length - 1];
  },
  parseFileSize: (fileSize) => {
    return parseFloat(fileSize / 1000000).toFixed(3); // to MB
  },
  parseContentType: (type) => {
    if (!type) return '';
    else if (type.length < 20) return type;
    return type.substring(0, 16).concat('...');
  },
  headerAuthToken: {
    set: () => {
      axios.defaults.headers.common['authorization'] = localStorage.token;
    },
    remove: () => {
      axios.defaults.headers.common['authorization'] = null;      
    }
  },
  attachListeners: () => {
    const listItems = document.querySelectorAll('.userListItem');
    listItems.forEach(item => {
      item.addEventListener('mouseenter', ({target}) => {
        target.classList.add('hoverItem');
        target.lastChild.classList.remove('showOnHover');
      });
      item.addEventListener('mouseleave', ({target}) => {
        target.classList.remove('hoverItem');
        target.lastChild.classList.add('showOnHover');
      });
    });
  }
}