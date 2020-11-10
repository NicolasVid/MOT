import { STORE_TIMER } from '../actions/clock';

const initialState = {
  minutes: 0,
  seconds: 0,
};

const counter = (state = initialState, action = {}) => {
  switch (action.type) {
    case STORE_TIMER:
      return {
        ...state,
        minutes: action.minutes,
        seconds: action.seconds,
      };
    default:
      return state;
  }
};

export default counter;
