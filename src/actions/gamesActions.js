export const FETCH_GAMES_BEGIN = 'FETCH_GAMES_BEGIN';
export const FETCH_GAMES_SUCCESS = 'FETCH_GAMES_SUCCESS';
export const FETCH_GAMES_FAILURE = 'FETCH_GAMES_FAILURE';
export const SELECT_GAME = 'SELECT_GAME';

export const fetchGamesBegin = () => ({
  type: FETCH_GAMES_BEGIN,
});

export const fetchGamesSuccess = items => ({
  type: FETCH_GAMES_SUCCESS,
  payload: { items },
});

export const fetchGamesFailure = error => ({
  type: FETCH_GAMES_FAILURE,
  payload: { error },
});

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

export function fetchGames() {
  return (dispatch) => {
    dispatch(fetchGamesBegin());
    return fetch(`${process.env.REACT_APP_SERVER_ADDRESS}/games`)
      .then(handleErrors)
      .then(res => res.json())
      .then((json) => {
        dispatch(fetchGamesSuccess(json));
        return json;
      })
      .catch(error => dispatch(fetchGamesFailure(error)));
  };
}

export function selectGame(gameID) {
  return {
    type: SELECT_GAME,
    payload: gameID,
  };
}
