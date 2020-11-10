import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import Cards from '../../containers/Cards';
import Clock from '../../containers/Clock';
import Home from '../Home';
import Finish from '../Finish';

import './app.scss';
import Countdown from '../Countdown/countdown';

const App = ({
  minutes,
  seconds,
}) => (
  <div className="app">
    <Route exact path="/">
      <Home />
    </Route>
    <Route exact path="/countdown">
      <Countdown />
    </Route>
    <Route exact path="/play">
      <Cards />
      <Clock />
    </Route>
    <Route exact path="/finish">
      <Finish
        minutes={minutes}
        seconds={seconds}
      />
    </Route>
  </div>
);

App.propTypes = ({
  minutes: PropTypes.number.isRequired,
  seconds: PropTypes.number.isRequired,
});

export default App;
