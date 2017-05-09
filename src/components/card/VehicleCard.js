
import React, { Component } from 'react';
import PropTypes from 'prop-types';

const VehicleCard = ({model, car_class, passengers}) => {
  return(
    <div>
  <h3>{model}</h3>
  <p>{car_class}</p>
  <p>{passengers}</p>
  </div>
)
}

export default VehicleCard;
