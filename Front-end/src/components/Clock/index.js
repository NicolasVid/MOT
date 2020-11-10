import React, { useState, useEffect } from 'react';

import './clock.scss';

const Clock = () => {
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
    return function cleanUp() {
      clearTimeout(token);
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

export default Clock;
