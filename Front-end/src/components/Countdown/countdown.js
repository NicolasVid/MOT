import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';

import './countdown.scss';

const Countdown = () => {
  const [countdown, setCountdown] = useState(3);
  useEffect(() => {
    setTimeout(() => {
      if (countdown !== 0) setCountdown(countdown - 1);
    }, 1000);
  });
  if (countdown !== 0) {
    return (
      <div className="countdown">
        {countdown}
      </div>
    );
  }
  return <Redirect to="/play" />;
};

export default Countdown;
