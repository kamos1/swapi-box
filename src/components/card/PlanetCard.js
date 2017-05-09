import React, { Component } from 'react';
import PropTypes from 'prop-types';


class PeopleCard extends Component {
  constructor(){
    super()
    this.state= {
      residents: []
    }
  }
  componentDidMount(){
    let {residents} = this.props
    residents.forEach(resident => {
      this.fetchResidents(resident)
    })
  }

  fetchResidents(api) {
    let array = this.state.residents
    fetch(api)
      .then((response)=>{return response.json()})
      .then((data) => {
        array.push(data.name)
        this.setState({residents: array})})
  }

  render() {
    return (
      <div>
        <h3>{this.props.name}</h3>
        <p>Terrain: {this.props.terrain}</p>
        <p>Population: {this.props.population}</p>
        <p>Climate: {this.props.climate}</p>
        <p>Residents: {this.state.residents}</p>

      </div>
    )
  }
}

export default PeopleCard;
