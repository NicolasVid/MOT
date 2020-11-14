import React from 'react';
import { Route } from 'react-router-dom';
import Cards from '../../containers/Cards';
import Clock from '../../containers/Clock';
import Home from '../Home';
import Finish from '../../containers/Finish';
import Countdown from '../Countdown/countdown';
import Scores from '../../containers/Scores';

import './app.scss';

const App = () => (
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
      <Finish />
    </Route>
    <Route exact path="/scores">
      <Scores />
    </Route>
  </div>
);

export default App;
