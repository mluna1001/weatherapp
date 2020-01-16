// Generación de componente
// Se importa la librería de React
import React, { Component } from 'react';
import transformWeather from "../../services/transformWeather";
import { api_weather } from "../../constants/api_url";
import Location from './Location'
import WeatherData from './WheaterData';
import './styles.css';
import { SUN } from '../../constants/weathers' ;

const data = {
    temperature: 5,
    weatherState: SUN,
    humidity: 10,
    wind: '10 m/s'
};
// Se genera el contenido del componente, haciendo uso de Babel, ya en forma JSX
class WeatherLocation extends Component {
    
    constructor () {
        super();
        this.state = { 
            city: 'Mexico City',
            data: data
        };
    }

    handleUpdateClick = () => {
        // Declarar un fetch para recuperar la información del servidor
        fetch(api_weather).then(resolve =>{
            return resolve.json();
        }).then(data => {
            const newWeather = transformWeather(data);
            console.log(newWeather)
            debugger;
            this.setState({
                data: newWeather
            });
        });
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