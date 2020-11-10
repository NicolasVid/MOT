import { connect } from 'react-redux';

import Clock from '../components/Clock';

import {
  storeTimer,
} from '../actions/clock';

const mapStateToProps = (state) => ({
  score: state.cards.score,
});

const mapDispatchToProps = (dispatch) => ({
  storeTimer: (minutes, seconds) => {
    dispatch(storeTimer(minutes, seconds));
  },
});

const ClockContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Clock);

export default ClockContainer;
