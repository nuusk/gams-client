import { combineReducers } from 'redux';
import { activeGameID, games } from './gamesReducer';

const rootReducer = combineReducers({
  activeGameID,
  games,
});

export default rootReducer;
