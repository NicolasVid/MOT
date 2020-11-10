import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './cards.scss';

const MyCard = ({ myCardDatas, onClick }) => (
  <div className="cards__mycard">
    {myCardDatas.map((item, index) => (
      <FontAwesomeIcon
        className={`cards__mycard--items${index}`}
        key={item.id}
        icon={item.image}
        size="3x"
        color={item.color}
        onClick={() => onClick(item.id)}
        style={{ width: `${Math.floor(Math.random() * (80 - 20 + 1)) + 20}px` }}
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
