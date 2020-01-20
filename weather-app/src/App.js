import React, { Component } from 'react';
import LocationList from './components/LocationList';
import './App.css';

const cities = [
  'Mexico City,mx',
  'Bogota,col',
  'Buenos Aires,ar',
  'Kansas City,us',
  'Madrid,es',
  'Lima,pe'
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <LocationList cities={cities}></LocationList>
      </div>
    );
  }
}

export default App;
