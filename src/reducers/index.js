import { combineReducers } from 'redux';
import { activeGameID, games } from './gamesReducer';
import { profile } from './profileReducer';

const rootReducer = combineReducers({
  activeGameID,
  games,
  profile,
});

export default rootReducer;
