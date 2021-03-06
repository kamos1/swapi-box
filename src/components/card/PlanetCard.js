import React from 'react';
import './card.css';
import PropTypes from 'prop-types';
import favoriteClass from '../../helpers/favoriteClass';

const PlanetCard = ({ planetObject, name, population, residents, terrain, climate, handleFavorite, favorites }) => {
  const favClass = favoriteClass(name, favorites);
  return (
    <div className={`card planet-card ${favClass}`} >
      <h3>{name}</h3>
      <p>Population: {population}</p>
      <p>Terrain: {terrain}</p>
      <p>Climate: {climate}</p>
      <p>Residents:</p>{residents.map(resident => <span>{resident} </span>)}
      <button className='favorite'
        onClick={() => handleFavorite(planetObject)}>
        Favorite
      </button>
    </div>
  );
};

export default PlanetCard;

PlanetCard.propTypes = {
  planetObject: PropTypes.object,
  name: PropTypes.string,
  population: PropTypes.string,
  residents: PropTypes.array,
  terrain: PropTypes.string,
  climate: PropTypes.string,
  handleFavorite: PropTypes.func,
  favoriteClass: PropTypes.func,
  favorites: PropTypes.array,
};
