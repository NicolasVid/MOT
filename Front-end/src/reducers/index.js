import { combineReducers } from 'redux';
import cards from './cards';
import clock from './clock';
import scores from './scores';

export default combineReducers({
  cards,
  clock,
  scores,
});
