// Generación de componente
// Se importa la librería de React
import React, { Component } from 'react';
import PropTypes from 'prop-types'
import CircularProgress from '@material-ui/core/CircularProgress'
import transformWeather from "../../services/transformWeather";
import getUrlWeatherByCity from "../../services/getUrlWeatherByCity";
import Location from './Location'
import WeatherData from './WheaterData';
import './styles.css';

// Se genera el contenido del componente, haciendo uso de Babel, ya en forma JSX
class WeatherLocation extends Component {
    
    constructor (props) {
        super(props);

        const { city } = props;

        this.state = { 
            city,
            data: null
        };
        console.log("constructor");
    }

    componentDidMount() {
        console.log("componentDidMount");
        this.handleUpdateClick();
    }
    
    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate");
    }
    
    // Estos dos métodos serán eliminados en la versión 17 de React
    /*
    componentWillMount() {
        console.log("UNSAFE componentWillMount");
    }

    componentWillUpdate(nextProps, nextState) {
        console.log("UNSAFE componentWillUpdate");
    }*/
    
    

    handleUpdateClick = () => {
        // importante enviar el parámetro de la ciudad dentro del state
        const api_weather = getUrlWeatherByCity(this.state.city);

        // Declarar un fetch para recuperar la información del servidor
        fetch(api_weather).then(resolve =>{
            return resolve.json();
        }).then(data => {
            console.log("Resultado del handleUpdateClick");
            const newWeather = transformWeather(data);
            console.log(newWeather)
            //debugger;
            this.setState({
                data: newWeather
            });
        });
    } 

    render() {
        //console.log("render");
        const { onWeatherLocationClick } = this.props;
        const { city, data } = this.state;

        return (
            <div className="weatherLocationCont" onClick={onWeatherLocationClick}>
                <Location city={ city }></Location>
                { data ? <WeatherData data={ data }></WeatherData> : <CircularProgress size={50} /> }
            </div>
        );
    }
}

WeatherLocation.propTypes = {
    city: PropTypes.string.isRequired,
    onWeatherLocationClick: PropTypes.func,
}

// Se exporta en cualquier parte de la aplicación, está disponible
export default WeatherLocation;