const getFindCardData = (datas, myCardData) => {
  let sameItems = [];
  myCardData.forEach((elem) => {
    sameItems = [...sameItems, datas.find((item) => item.id === elem.id)];
  });
  const shuffledSameItems = [...sameItems].sort(() => 0.5 - Math.random());
  const otherItems = [...datas.filter((item) => !myCardData.includes(item))];
  const shuffledOtherItems = [...otherItems].sort(() => 0.5 - Math.random());
  const findCardData = [...shuffledOtherItems.slice(0, 6), ...shuffledSameItems.slice(0, 1)];
  return findCardData.sort(() => 0.5 - Math.random());
};

export default getFindCardData;
