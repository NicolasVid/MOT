import { combineReducers } from 'redux';
import cards from './cards';
import clock from './clock';

export default combineReducers({
  cards,
  clock,
});
