import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './scores.scss';

const Scores = ({ getScores, scores }) => {
  useEffect(() => {
    getScores();
  }, []);
  return (
    <div className="scores">
      <Link to="/">
        <FontAwesomeIcon
          className="scores--home"
          icon={faHome}
          size="3x"
          color="black"
        />
      </Link>
      <h1>Score Board</h1>
      <div className="scores__head">
        <ul>
          <li>Name</li>
          <li>Time</li>
        </ul>
      </div>
      {scores.map((score) => (
        // eslint-disable-next-line no-underscore-dangle
        <div className="scores__row" key={score._id}>
          <ul>
            <li>{score.name}</li>
            <li>{score.minutes} : {(score.seconds < 10) ? `0${score.seconds}` : `${score.seconds}`}</li>
          </ul>
        </div>
      ))}
    </div>
  );
};

Scores.propTypes = ({
  getScores: PropTypes.func.isRequired,
  scores: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      minutes: PropTypes.number.isRequired,
      seconds: PropTypes.number.isRequired,
    }),
  ).isRequired,
});

export default Scores;
