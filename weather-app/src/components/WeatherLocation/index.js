// Generación de componente
// Se importa la librería de React
import React, { Component } from 'react';
import Location from './Location'
import WeatherData from './WheaterData';
import './styles.css';
import { SUN, WINDY } from '../../constants/weathers' ;

const data = {
    temperature: 5,
    weatherState: SUN,
    humidity: 10,
    wind: '10 m/s'
};

const data2 = {
    temperature: 15,
    weatherState: WINDY,
    humidity: 20,
    wind: '10 m/s'
};

// Se genera el contenido del componente, haciendo uso de Babel, ya en forma JSX
class WeatherLocation extends Component {
    
    constructor () {
        super();
        this.state = { 
            city: 'Barcelona',
            data: data
        };
    }

    handleUpdateClick = () => {
        console.log('actualizado');
        this.setState({ data: data2})
    } 

    render() {

        const { city, data } = this.state;

        return (
            <div className="weatherLocationCont">
                <Location city={ city }></Location>
                <WeatherData data={ data }></WeatherData>
                <button onClick={ this.handleUpdateClick }>Actualizar</button>
            </div>
        );
    }
}

// Se exporta en cualquier parte de la aplicación, está disponible
export default WeatherLocation;