import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './finish.scss';

const Finish = ({ minutes, seconds }) => (
  <div className="finish">
    <div className="finish--text">
      <h2>Bravo tu as terminé en</h2>
      <h2><span>{minutes}</span> minutes</h2>
      <h2><span>{seconds}</span> secondes</h2>
      <Link to="/countdown"><button type="button">Play again</button></Link>
      <Link to="/"><button type="button">Home</button></Link>
    </div>
  </div>
);

Finish.propTypes = ({
  minutes: PropTypes.number.isRequired,
  seconds: PropTypes.number.isRequired,
});

export default Finish;
