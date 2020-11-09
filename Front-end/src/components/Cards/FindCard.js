import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './cards.scss';

const FindCard = ({ findCardDatas }) => (
  <div className="cards-findcard">
    <h1>Composant : Findcard</h1>
    {findCardDatas.map((item) => (
      <FontAwesomeIcon className="cards__mycard--items" key={item.id} icon={item.image} size="3x" />
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
