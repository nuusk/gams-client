import { jwtRequest } from '../helpers/request';
import {
  removeCookie, TOKEN_COOKIE, USERNAME_COOKIE, EMAIL_COOKIE,
} from '../helpers/cookies';

export const FETCH_PROFILE_BEGIN = 'FETCH_PROFILE_BEGIN';
export const FETCH_PROFILE_SUCCESS = 'FETCH_PROFILE_SUCCESS';
export const FETCH_PROFILE_FAILURE = 'FETCH_PROFILE_FAILURE';
export const PROFILE_REGISTER = 'PROFILE_REGISTER';
export const PROFILE_LOGOUT = 'PROFILE_LOGOUT';

export const fetchProfileBegin = () => ({
  type: FETCH_PROFILE_BEGIN,
});

export const fetchProfileSuccess = profile => ({
  type: FETCH_PROFILE_SUCCESS,
  payload: profile,
});

export const fetchProfileFailure = error => ({
  type: FETCH_PROFILE_FAILURE,
  payload: error,
});

export function fetchProfile() {
  return (dispatch) => {
    dispatch(fetchProfileBegin());

    return jwtRequest('/profiles/me', {
      method: 'GET',
    }).then((json) => {
      dispatch(fetchProfileSuccess(json));
      return json;
    });
  };
}

export function profileLogin(username, email) {
  return {
    type: PROFILE_REGISTER,
    payload: { username, email },
  };
}

export function profileLogout() {
  removeCookie(TOKEN_COOKIE);
  removeCookie(USERNAME_COOKIE);
  removeCookie(EMAIL_COOKIE);

  return {
    type: PROFILE_LOGOUT,
  };
}
