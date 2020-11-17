import React from 'react';
import { Link } from 'react-router-dom';
import { faTrophy } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './home.scss';

const Home = () => (
  <div className="home">
    <div className="home--text">
      <h2><span>1</span> timer</h2>
      <h2><span>20</span> cards</h2>
      <h1>How fast can you be ?</h1>
      <Link to="/countdown"><button type="button">Start</button></Link>
    </div>
    <Link to="/scores">
      <FontAwesomeIcon
        className="home--scores"
        icon={faTrophy}
        size="3x"
        color="black"
      />
    </Link>
    <div className="home--rules">
      <h2>Rules</h2>
      <ul>
        <li>Tap the symbol in common for both cards</li>
        <li>If you tap the wrong symbol you loose 1 point</li>
        <li>Reach 20 points to end the game</li>
      </ul>
    </div>
  </div>
);

export default Home;
