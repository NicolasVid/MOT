import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './clock.scss';

const Clock = ({
  storeTimer,
  score,
}) => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);

  const updateTime = () => {
    if (seconds === 59) {
      setMinutes(minutes + 1);
      setSeconds(0);
    }
    else {
      setSeconds(seconds + 1);
    }
  };

  useEffect(() => {
    storeTimer(minutes, seconds);
  }, [score]);

  useEffect(() => {
    const token = setTimeout(updateTime, 1000);
    return () => {
      clearTimeout(token);
    };
  }, [seconds]);

  return (
    <div className="clock">
      {minutes} : {(seconds < 10) ? `0${seconds}` : `${seconds}`}
    </div>
  );
};

Clock.propTypes = ({
  storeTimer: PropTypes.func.isRequired,
  score: PropTypes.number.isRequired,
});

export default Clock;
