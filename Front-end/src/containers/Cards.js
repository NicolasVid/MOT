import { connect } from 'react-redux';

import Cards from '../components/Cards';

import { generateMyCardDatas, generateFindCardDatas, generateUniqueId } from '../actions/cards';

const mapStateToProps = (state) => ({
  myCardDatas: state.cards.myCardData,
  findCardDatas: state.cards.findCardData,
  uniqueId: state.cards.uniqueId,
});

const mapDispatchToProps = (dispatch) => ({
  generateMyCardDatas: () => {
    dispatch(generateMyCardDatas());
  },
  generateFindCardDatas: () => {
    dispatch(generateFindCardDatas());
  },
  generateUniqueId: () => {
    dispatch(generateUniqueId());
  },
});

const CardsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Cards);

export default CardsContainer;
