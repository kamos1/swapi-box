import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

const Button = ({ handleClick, people, planets, vehicles, category, favorites }) => (
    <div className='buttons'>

      <button className='ppl-btn' onClick={() => handleClick('people')}>people</button>

      <button className='plnt-btn' onClick={() => handleClick('planets')}>planets</button>

      <button className='veh-btn' onClick={() => handleClick('vehicles')}>vehicles</button>

      <button className='fav-btn' onClick={() => handleClick('fav')}>View favorites: {favorites.length} </button>

    </div>
  );

export default Button;


Button.propTypes = {
  handleClick: PropTypes.func,
  people: PropTypes.object,
  planets: PropTypes.object,
  vehicles: PropTypes.object,
  category: PropTypes.string,
  favorites: PropTypes.array,
};
