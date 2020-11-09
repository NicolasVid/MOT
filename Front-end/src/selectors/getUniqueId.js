const getUniqueId = (myCardData, findCardData) => {
  let uniqueId = 0;
  myCardData.forEach((elem) => {
    const result = findCardData.find((item) => item.id === elem.id);
    if (result) uniqueId = result.id;
  });
  return uniqueId;
};

export default getUniqueId;
