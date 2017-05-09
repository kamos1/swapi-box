import React, { Component } from 'react';

import PeopleCard from '../card/PeopleCard';
import PlanetCard from '../card/PlanetCard';
import VehicleCard from '../card/VehicleCard';
import PropTypes from 'prop-types'

const renderPeople = (categoryData) => {
  console.log(categoryData)
  return  Object.keys(categoryData).map((person, index)=> {
    return <PeopleCard key={index}          name={categoryData[person].name} species={categoryData[person].species} homeworld={categoryData[person].homeworld}/>
  })
}

const renderPlanets = (categoryData) => {
  return Object.keys(categoryData).map((planet, index)=>{
    return <PlanetCard key={index}
    name={categoryData[planet].name}
    population={categoryData[planet].population}
    residents={categoryData[planet].residents}
    terrain={categoryData[planet].terrain}
    climate={categoryData[planet].climate}/>
  })
}

const renderVehicles = (categoryData) => {
  return Object.keys(categoryData).map((vehicle, index)=>{
    return <VehicleCard key={index} model={categoryData[vehicle].model} car_class={categoryData[vehicle].class} passengers={categoryData[vehicle].passengers}/>
  })
}


const renderCards = (category, categoryData )=>{
  switch(category){
    case 'people':
      return renderPeople(categoryData);
      break;
    case'planets':
      return renderPlanets(categoryData);
      break;
    case 'vehicles':
      return renderVehicles(categoryData);
  }
}

const Container = ({ category, categoryData }) => {
  return (
    <div>
      {renderCards(category, categoryData)}
    </div>
  )
}

export default Container;


Container.Proptypes = {

}
