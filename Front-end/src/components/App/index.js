import React from 'react';
import Cards from '../../containers/Cards';
import Clock from '../Clock';

import './app.scss';

const App = () => (
  <div className="app">
    <h1>Composant : App</h1>
    <Cards />
    <Clock />
  </div>
);

export default App;
