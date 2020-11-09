import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import MyCard from './MyCard';
import FindCard from './FindCard';

import './cards.scss';

const Cards = ({
  myCardDatas,
  findCardDatas,
  uniqueId,
  generateMyCardDatas,
  generateFindCardDatas,
  generateUniqueId,
}) => {
  useEffect(() => {
    generateMyCardDatas();
    generateFindCardDatas();
    generateUniqueId();
  }, []);

  const handleClick = (id) => {
    if (id === uniqueId) {
      generateMyCardDatas();
      generateFindCardDatas();
      generateUniqueId();
    }
  };
  return (
    <div className="cards">
      <h1>Composant : cards</h1>
      <FindCard findCardDatas={findCardDatas} />
      <MyCard
        myCardDatas={myCardDatas}
        uniqueId
        onClick={handleClick}
      />
    </div>
  );
};

Cards.propTypes = ({
  myCardDatas: PropTypes.array.isRequired,
  findCardDatas: PropTypes.array.isRequired,
  uniqueId: PropTypes.number.isRequired,
  generateMyCardDatas: PropTypes.func.isRequired,
  generateFindCardDatas: PropTypes.func.isRequired,
  generateUniqueId: PropTypes.func.isRequired,
});

export default Cards;
