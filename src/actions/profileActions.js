import { jwtRequest } from '../helpers/request';

export const FETCH_PROFILE_BEGIN = 'FETCH_PROFILE_BEGIN';
export const FETCH_PROFILE_SUCCESS = 'FETCH_PROFILE_SUCCESS';
export const FETCH_PROFILE_FAILURE = 'FETCH_PROFILE_FAILURE';
export const PROFILE_REGISTER = 'PROFILE_REGISTER';

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

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

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
