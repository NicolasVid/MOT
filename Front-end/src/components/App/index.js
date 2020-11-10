import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import Cards from '../../containers/Cards';
import Clock from '../../containers/Clock';
import Finish from '../Finish';

import './app.scss';

const App = ({
  minutes,
  seconds,
}) => (
  <div className="app">
    <Route exact path="/">
      <Clock />
      <Cards />
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
