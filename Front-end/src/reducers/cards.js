import { GENERATE_MY_CARD_DATAS, GENERATE_FIND_CARD_DATAS } from '../actions/cards';
import datas from '../data/items';
import getMyCardData from '../selectors/getMyCardData';
import getFindCardData from '../selectors/getFindCardData';

const initialState = {
  datas,
  findCardData: [],
  myCardData: [],
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
    default:
      return state;
  }
};

export default counter;
