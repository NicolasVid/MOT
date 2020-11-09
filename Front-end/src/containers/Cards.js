import { connect } from 'react-redux';

import Cards from '../components/Cards';

import { generateMyCardDatas, generateFindCardDatas } from '../actions/cards';

const mapStateToProps = (state) => ({
  myCardData: state.cards.myCardData,
  findCardData: state.cards.findCardData,
});

const mapDispatchToProps = (dispatch) => ({
  generateMyCardDatas: () => {
    dispatch(generateMyCardDatas());
  },
  generateFindCardDatas: () => {
    dispatch(generateFindCardDatas());
  },
});

const CardsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Cards);

export default CardsContainer;
