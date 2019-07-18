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
    return fetch(`${process.env.REACT_APP_SERVER_ADDRESS}/profiles/me`)
      .then(handleErrors)
      .then(res => res.json())
      .then((json) => {
        dispatch(fetchProfileSuccess(json));
        return json;
      })
      .catch(error => dispatch(fetchProfileFailure(error)));
  };
}

export function profileRegister(username, email) {
  return {
    type: PROFILE_REGISTER,
    payload: { username, email },
  };
}
