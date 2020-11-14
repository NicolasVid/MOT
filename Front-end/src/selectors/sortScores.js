const sortScores = (scores) => scores.sort((a, b) => {
  if (a.minutes !== b.minutes) return parseFloat(a.minutes) - parseFloat(b.minutes);

  return parseFloat(a.seconds) - parseFloat(b.seconds);
});
export default sortScores;
