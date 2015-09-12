import { createReducer } from './createReducer';

import { LOGIN_SUCCESS, LOGIN_FAILED } from 'actions/login';
import { LOGOUT } from 'actions/logout';
import { SESSION_INFO_FETCHED } from 'actions/getSessionInfo';

const initialState = {
  loggedIn: false,
  token: null
};

export default createReducer(initialState, {
  [LOGIN_SUCCESS]: (state, data) => {
    localStorage.setItem('auth-token', data.token);
    console.log('Login successful');
    return {
      ...state,
      loggedIn: true,
      token: data.token
    };
  },
  [LOGIN_FAILED]: (state, data) => {
    console.warn('Login failed');
    return {
      ...state,
      loggedIn: false,
      token: null
    };
  },
  [LOGOUT]: (state, data) => {
    console.log('Logout');
    return {
      ...state,
      loggedIn: false,
      token: null
    };
  },
  [SESSION_INFO_FETCHED]: (state, data) => {
    console.log('Session info', data);
    return {
      ...state,
      loggedIn: true,
      session: data
    };
  }
});
