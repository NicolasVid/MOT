import { connect } from 'react-redux';

import Finish from '../components/Finish';
import { postScore, storeMessage } from '../actions/scores';
import { incrementScore } from '../actions/cards';

const mapStateToProps = (state) => ({
  minutes: state.clock.minutes,
  seconds: state.clock.seconds,
  message: state.scores.message,
  score: state.cards.score,
  pending: state.scores.pending,
});

const mapDispatchToProps = (dispatch) => ({
  postScore: (name, minutes, seconds) => {
    dispatch(postScore(name, minutes, seconds));
  },
  incrementScore: (score) => {
    dispatch(incrementScore(score));
  },
  storeMessage: (message) => {
    dispatch(storeMessage(message));
  },
});

const FinishContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Finish);

export default FinishContainer;
