export const GET_SCORES = 'GET_SCORES';
export const STORE_SCORES = 'STORE_SCORES';
export const POST_SCORE = 'POST_SCORE';
export const STORE_MESSAGE = 'STORE_MESSAGE';
export const TOGGLE_PENDING = 'TOGGLE_PENDING';

export const getScores = () => ({
  type: GET_SCORES,
});

export const postScore = (name, minutes, seconds) => ({
  type: POST_SCORE,
  name,
  minutes,
  seconds,
});

export const storeScores = (scores) => ({
  type: STORE_SCORES,
  scores,
});

export const storeMessage = (message) => ({
  type: STORE_MESSAGE,
  message,
});

export const togglePending = (bool) => ({
  type: TOGGLE_PENDING,
  bool,
});
