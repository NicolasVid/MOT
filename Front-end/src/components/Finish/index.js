import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { faTrophy } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './finish.scss';

const Finish = ({
  minutes,
  seconds,
  postScore,
  message,
  score,
  incrementScore,
  storeMessage,
}) => {
  const [name, setName] = useState('');
  useEffect(() => () => {
    incrementScore(0);
    storeMessage('');
  }, []);
  const handleSubmit = (event) => {
    event.preventDefault();
    if (name !== '' && score === 20) {
      postScore(name, minutes, seconds);
    }
    else {
      storeMessage('Shame on you :)');
    }
  };
  const handleChange = (event) => {
    setName(event.target.value);
  };
  return (
    <div className="finish">
      <div className="finish--text">
        <h2>Congratulations, your time is</h2>
        <h2><span>{minutes}</span> minutes</h2>
        <h2><span>{seconds}</span> seconds</h2>
        {(message === '')
          ? (
            <form onSubmit={handleSubmit}>
              <h2>Enter you name to submit your</h2>
              <input
                type="text"
                placeholder="Your name"
                onChange={handleChange}
                maxLength="8"
              />
              <button type="submit">Post my score</button>
            </form>
          )
          : <h2 className="finish__message">{message}</h2>}
        <Link to="/countdown"><button type="button">Play again</button></Link>
        <Link to="/"><button type="button">Home</button></Link>
      </div>
      <Link to="/scores">
        <FontAwesomeIcon
          className="finish--scores"
          icon={faTrophy}
          size="3x"
        />
      </Link>
    </div>
  );
};

Finish.propTypes = ({
  minutes: PropTypes.number.isRequired,
  seconds: PropTypes.number.isRequired,
  postScore: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  incrementScore: PropTypes.func.isRequired,
  storeMessage: PropTypes.func.isRequired,
});

export default Finish;
