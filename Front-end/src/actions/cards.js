export const GENERATE_MY_CARD_DATAS = 'GENERATE_MY_CARD_DATAS';
export const GENERATE_FIND_CARD_DATAS = 'GENERATE_FIND_CARD_DATAS';
export const GENERATE_UNIQUE_ID = 'GENERATE_UNIQUE_ID';

export const generateMyCardDatas = () => ({
  type: GENERATE_MY_CARD_DATAS,
});

export const generateFindCardDatas = () => ({
  type: GENERATE_FIND_CARD_DATAS,
});

export const generateUniqueId = () => ({
  type: GENERATE_UNIQUE_ID,
});
