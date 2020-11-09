import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './cards.scss';

const MyCard = ({ myCardDatas, onClick }) => (
  <div className="cards__mycard">
    <h1>Composant : MyCard</h1>
    {myCardDatas.map((item) => (
      <FontAwesomeIcon 
        className="cards__mycard--items"
        key={item.id}
        icon={item.image}
        size="3x"
        onClick={() => onClick(item.id)}
      />
    ))}
  </div>
);

MyCard.propTypes = ({
  myCardDatas: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      image: PropTypes.object.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onClick: PropTypes.func.isRequired,
});

export default MyCard;
