import React, { Component } from 'react';
import PropTypes from 'prop-types';


class PeopleCard extends Component {
  constructor(){
    super()
    this.state= {
      homeworld: '',
      population: '',
      species: '',
      language: ''
    }
  }

  componentDidMount(){
    this.fetchHomeworld(this.props.homeworld)
    this.fetchSpecies(this.props.species)
  }

  fetchHomeworld(api) {
    fetch(api)
      .then((response)=>{return response.json()})
      .then((data) => this.setState({homeworld: data.name, population: data.population}))
  }

  fetchSpecies(api) {
    fetch(api)
      .then((response)=>{return response.json()})
      .then((data) => this.setState({species: data.name, language:data.language}))
    }

  render() {
    return (
      <div>
        <h3>{this.props.name}</h3>
        <p>Homeworld: {this.state.homeworld}</p>
        <p>Population: {this.state.population}</p>
        <p>Species: {this.state.species}</p>
        <p>Language: {this.state.language}</p>
      </div>
    )
  }
}

export default PeopleCard;
