import {
  SELECT_GAME,
  FETCH_GAMES_BEGIN,
  FETCH_GAMES_SUCCESS,
  FETCH_GAMES_FAILURE,
} from '../actions/gamesActions';

const initialState = '';
const initialGames = {
  items: [],
  loading: false,
  error: null,
};

export const activeGameID = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_GAME:
      return action.payload;
    default:
      return state;
  }
};

export const games = (state = initialGames, action) => {
  switch (action.type) {
    case FETCH_GAMES_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_GAMES_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload.items,
      };
    case FETCH_GAMES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
};
