import { GENERATE_DATAS, generateFindCardDatas } from '../actions/cards';

const cardsMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case GENERATE_DATAS: {
      store.dispatch(generateFindCardDatas());
      next(action);
      break;
    }
    default:
      next(action);
  }
};

export default cardsMiddleware;
