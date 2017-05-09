import React, { Component } from 'react';
import './App.css';
import Container from '../container/Container';
import Button from '../button/Button';
import cleaner from '../../helpers/helper.js'


class App extends Component {
  constructor() {
    super();
    this.state = {
      category: '',
      categoryData: {}
    }
  }

  fetchFunc(input) {
    fetch(`http://swapi.co/api/${input}`)
      .then((response) => response.json())
      .then((obj) => cleaner(input, obj))
      .then((data) => this.setState({category: input, categoryData: data}))
  }

  render() {
    return (
      <div className="App">
        <h1> SWAPI-Box </h1>
        <Button handleFetch={(input) => {this.fetchFunc(input)}}/>

        <Container category={this.state.category} categoryData={this.state.categoryData}/>
      </div>
    );
  }
}

export default App;
