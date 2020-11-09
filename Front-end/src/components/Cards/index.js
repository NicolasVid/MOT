import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import MyCard from './MyCard';
import FindCard from './FindCard';

import './cards.scss';

const Cards = ({
  myCardData,
  findCardData,
  generateMyCardDatas,
  generateFindCardDatas,
}) => {
  useEffect(() => {
    generateMyCardDatas();
    generateFindCardDatas();
  }, []);
  return (
    <div className="cards">
      <h1>Composant : cards</h1>
      <FindCard findCardData={findCardData} />
      <MyCard myCardData={myCardData} />
    </div>
  );
};

Cards.propTypes = ({
  myCardData: PropTypes.array.isRequired,
  findCardData: PropTypes.array.isRequired,
  generateMyCardDatas: PropTypes.func.isRequired,
  generateFindCardDatas: PropTypes.func.isRequired,
});

export default Cards;
