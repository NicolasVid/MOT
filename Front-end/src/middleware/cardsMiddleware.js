import axios from 'axios';
import {
  POST_SCORE,
  GET_SCORES,
  storeScores,
  storeMessage,
} from '../actions/scores';

const cardsMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case POST_SCORE: {
      axios.post('https://secure-ravine-46979.herokuapp.com/api/scores',
        {
          name: action.name,
          minutes: action.minutes,
          seconds: action.seconds,
        })
        .then((response) => {
          store.dispatch(storeMessage(response.data.message));
        })
        .catch((error) => {
          console.log(error);
        });
      next(action);
      break;
    }
    case GET_SCORES: {
      axios.get('https://secure-ravine-46979.herokuapp.com/api/scores')
        .then((response) => {
          store.dispatch(storeScores(response.data));
        })
        .catch((error) => {
          console.log(error);
        });
      next(action);
      break;
    }
    default:
      next(action);
  }
};

export default cardsMiddleware;
