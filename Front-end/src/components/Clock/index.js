import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './clock.scss';

const Clock = ({
  storeTimer,
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
    const token = setTimeout(updateTime, 1000);
    return () => {
      clearTimeout(token);
      storeTimer(minutes, seconds);
    };
  });

  return (
    <div className="clock">
      <h1>Composant : clock</h1>
      <p>
        time: {minutes}:{(seconds < 10) ? `0${seconds}` : `${seconds}`}
      </p>
    </div>
  );
};

Clock.propTypes = ({
  storeTimer: PropTypes.func.isRequired,
});

export default Clock;
