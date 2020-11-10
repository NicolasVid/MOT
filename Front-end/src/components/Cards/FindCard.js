import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './cards.scss';

const FindCard = ({ findCardDatas }) => (
  <div className="cards__findcard">
    {findCardDatas.map((item, index) => (
      <FontAwesomeIcon
        className={`cards__findcard--items${index}`}
        key={item.id}
        icon={item.image}
        size="3x"
        color={item.color}
        style={{ width: `${Math.floor(Math.random() * (80 - 20 + 1)) + 20}px` }}
      />
    ))}
  </div>
);

FindCard.propTypes = ({
  findCardDatas: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      image: PropTypes.object.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
});

export default FindCard;
