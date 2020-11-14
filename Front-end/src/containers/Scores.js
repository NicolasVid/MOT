import { connect } from 'react-redux';

import Scores from '../components/Scores';

import { postScore, getScores } from '../actions/scores';

const mapStateToProps = (state) => ({
  scores: state.scores.scores,
});

const mapDispatchToProps = (dispatch) => ({
  postScore: (name, minutes, seconds) => {
    dispatch(postScore(name, minutes, seconds));
  },
  getScores: () => {
    dispatch(getScores());
  },
});

const ScoresContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Scores);

export default ScoresContainer;
