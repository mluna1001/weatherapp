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

  handleSelectionLocation = city => {
    console.log(`handleSelectionLocation ${city}`);
  }

  render() {
    return (
      <div className="App">
        <LocationList 
          cities={cities}
          onSelectedLocation={this.handleSelectionLocation}></LocationList>
      </div>
    );
  }
}

export default App;
