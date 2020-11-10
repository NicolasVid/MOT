import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './finish.scss';

const Finish = ({ minutes, seconds }) => (
  <div className="finish">
    <h1>Composant : Finish</h1>
    <p>Bravo tu as fini en {minutes} minutes et {seconds} secondes</p>
    <Link to="/">Rejouer</Link>
  </div>
);

Finish.propTypes = ({
  minutes: PropTypes.number.isRequired,
  seconds: PropTypes.number.isRequired,
});

export default Finish;
