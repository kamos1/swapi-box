import React, { Component } from 'react';
import './card.css';
import PropTypes from 'prop-types';

const VehicleCard = ({vehicleObject, name, model, car_class, passengers, handleFavorite, favoriteClass, favorites}) => {
  let favClass = favoriteClass(name, favorites);
 return(
   <div className={`card vehicle-card ${favClass}`}>
     <h3>{name}</h3>
     <p>{model}</p>
     <p>{car_class}</p>
     <p>{passengers}</p>
     <button className='favorite'
         onClick={(e) => handleFavorite(vehicleObject)}>
         Favorite
         </button>
 </div>
)
}

export default VehicleCard;

VehicleCard.propTypes = {
  vehicleObject: PropTypes.object,
  name: PropTypes.string,
  model: PropTypes.string,
  car_class: PropTypes.string,
  passengers: PropTypes.string,
  handleFavorite: PropTypes.func,
  favoriteClass: PropTypes.func,
  favorites: PropTypes.array
}
