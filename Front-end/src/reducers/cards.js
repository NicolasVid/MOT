import {
  GENERATE_MY_CARD_DATAS,
  GENERATE_FIND_CARD_DATAS,
  GENERATE_UNIQUE_ID,
  INCREMENT_SCORE,
} from '../actions/cards';

import datas from '../data/items';
import getMyCardData from '../selectors/getMyCardData';
import getFindCardData from '../selectors/getFindCardData';
import getUniqueId from '../selectors/getUniqueId';

const initialState = {
  datas,
  myCardData: [],
  findCardData: [],
  uniqueId: 0,
  score: 0,
};

const counter = (state = initialState, action = {}) => {
  switch (action.type) {
    case GENERATE_MY_CARD_DATAS:
      return {
        ...state,
        myCardData: getMyCardData(state.datas),
      };
    case GENERATE_FIND_CARD_DATAS:
      return {
        ...state,
        findCardData: getFindCardData(state.datas, state.myCardData),
      };
    case GENERATE_UNIQUE_ID:
      return {
        ...state,
        uniqueId: getUniqueId(state.myCardData, state.findCardData),
      };
    case INCREMENT_SCORE:
      return {
        ...state,
        score: action.score + 1,
      };
    default:
      return state;
  }
};

export default counter;
