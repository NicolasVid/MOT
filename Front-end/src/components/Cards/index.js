import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import MyCard from './MyCard';
import FindCard from './FindCard';

import './cards.scss';

const Cards = ({
  myCardDatas,
  findCardDatas,
  uniqueId,
  score,
  generateMyCardDatas,
  generateFindCardDatas,
  generateUniqueId,
  incrementScore,
}) => {
  useEffect(() => {
    generateMyCardDatas();
    generateFindCardDatas();
    generateUniqueId();
    return () => {
      incrementScore(-1);
    };
  }, []);

  const handleClick = (id) => {
    if (id === uniqueId) {
      generateMyCardDatas();
      generateFindCardDatas();
      generateUniqueId();
      incrementScore(score);
    }
  };
  if (score < 20) {
    return (
      <div className="cards">
        <h1>Ton score {score}</h1>
        <FindCard findCardDatas={findCardDatas} />
        <MyCard
          myCardDatas={myCardDatas}
          uniqueId
          onClick={handleClick}
        />
      </div>
    );
  }
  return <Redirect to="/finish" />;
};

Cards.propTypes = ({
  myCardDatas: PropTypes.array.isRequired,
  findCardDatas: PropTypes.array.isRequired,
  uniqueId: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
  generateMyCardDatas: PropTypes.func.isRequired,
  generateFindCardDatas: PropTypes.func.isRequired,
  generateUniqueId: PropTypes.func.isRequired,
  incrementScore: PropTypes.func.isRequired,
});

export default Cards;
