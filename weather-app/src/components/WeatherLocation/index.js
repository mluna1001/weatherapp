// Generación de componente
// Se importa la librería de React
import React, { Component } from 'react';
import Location from './Location'
import WeatherData from './WheaterData';
import './styles.css';
import { SUN, WINDY } from '../../constants/weathers' ;

// constantes para el API
const location = "Mexico City,mx";
const api_key = 'a761f2c4f40ca915b2a64b67b609ab90';
const url_base_weather = 'https://api.openweathermap.org/data/2.5/weather';

// Sumatoria de la URL
const api_weather = `${url_base_weather}?q=${location}&appid=${api_key}`;

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
        // Declarar un fetch para recuperar la información del servidor
        fetch(api_weather).then(resolve =>{
            return resolve.json();
        }).then(data => {
            console.log(data)
            debugger;
        });

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