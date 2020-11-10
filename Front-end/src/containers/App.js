import { connect } from 'react-redux';

import App from '../components/App';

const mapStateToProps = (state) => ({
  minutes: state.clock.minutes,
  seconds: state.clock.seconds,
});

const mapDispatchToProps = {};

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

export default AppContainer;
