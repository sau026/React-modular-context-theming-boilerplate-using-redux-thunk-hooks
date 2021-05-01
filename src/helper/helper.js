import React from 'react';
import history from '../config/history';

export const browserRedirect = location => {
  history.push(location);
}

// export const parseJwt = token => {
//   if (token) {
//     const base64Url = token.split('.')[1];
//     const base64 = base64Url.replace('-', '+').replace('_', '/');
//     return JSON.parse(window.atob(base64));
//   }
//   return null;
// };

export const checkAuthorization = () => {
  const storedToken = localStorage.getItem('token');

  if (storedToken) {
    return true;
  }

  return false;
};

export const handleLogout = () => {
  localStorage.removeItem('token')
  browserRedirect('/login')
}