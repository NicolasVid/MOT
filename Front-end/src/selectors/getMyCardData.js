const getMyCardData = (datas) => {
  const shuffled = [...datas].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 5);
};

export default getMyCardData;