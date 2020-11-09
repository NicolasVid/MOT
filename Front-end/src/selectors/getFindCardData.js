const getFindCardData = (datas, myCardData) => {
  let sameItems = [];
  myCardData.forEach((elem) => {
    sameItems = [...sameItems, datas.find((item) => item.id === elem.id)];
  });
  const shuffledSameItems = [...sameItems].sort(() => 0.5 - Math.random());
  const otherItems = [...datas.filter((item) => !myCardData.includes(item))];
  const shuffledOtherItems = [...otherItems].sort(() => 0.5 - Math.random());
  return [...shuffledOtherItems.slice(0, 4), ...shuffledSameItems.slice(0, 1)];
};

export default getFindCardData;
