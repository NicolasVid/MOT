export const STORE_TIMER = 'STORE_TIMER';

export const storeTimer = (minutes, seconds) => ({
  type: STORE_TIMER,
  minutes,
  seconds,
});
