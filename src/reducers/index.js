import { combineReducers } from 'redux';
import { activeGameID, games } from './gamesReducer';
import { profile, profileLogin } from './profileReducer';

const rootReducer = combineReducers({
  activeGameID,
  games,
  profile,
  profileLogin,
});

export default rootReducer;
