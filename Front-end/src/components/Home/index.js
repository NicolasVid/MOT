import React from 'react';
import { Link } from 'react-router-dom';

import './home.scss';

const Home = () => (
  <div className="home">
    <div className="home--text">
      <h2><span>1</span> timer</h2>
      <h2><span>20</span> cards</h2>
      <h1>How fast can you be ?</h1>
      <Link to="/countdown"><button type="button">Start</button></Link>
    </div>
  </div>
);

export default Home;
