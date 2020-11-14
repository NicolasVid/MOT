import { STORE_SCORES, STORE_MESSAGE } from '../actions/scores';
import sortScores from '../selectors/sortScores';

const initialState = {
  scores: [],
  message: '',
};

const counter = (state = initialState, action = {}) => {
  switch (action.type) {
    case STORE_SCORES:
      return {
        ...state,
        scores: sortScores(action.scores),
      };
    case STORE_MESSAGE:
      return {
        ...state,
        message: action.message,
      };
    default:
      return state;
  }
};

export default counter;
