import { STORE_SCORES, STORE_MESSAGE, TOGGLE_PENDING } from '../actions/scores';
import sortScores from '../selectors/sortScores';

const initialState = {
  scores: [],
  message: '',
  pending: false,
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
    case TOGGLE_PENDING:
      return {
        ...state,
        pending: action.bool,
      };
    default:
      return state;
  }
};

export default counter;
