import React, { Component } from "react";
import PropTypes from "prop-types";
import ForecastItem from "./ForecastItem";
import transformForecast from "./../services/transformForecast";
import "./styles.css";

/*

const days = [
    'Lunes',
    'Martes',
    'Miércoles',
    'Jueves',
    'Viernes'
]

const data = {
    temperature: 10,
    humidity: 10,
    weatherState: "cloud",
    wind: 'normal'
}

*/

const api_key = "a761f2c4f40ca915b2a64b67b609ab90";
const url = "http://api.openweathermap.org/data/2.5/forecast";

class ForecastExtended extends Component {
    
    constructor(){
        super();
        this.state = { forecastData: null };
    }

    componentDidMount(){
        // la petición pueder ser hecha vía fetch o axios
        this.updateCity(this.props.city);
    }

    componentDidUpdate(nextProps) {
        if (nextProps.city !== this.props.city) {
            this.setState( { forecastData: null });
            this.updateCity(this.props.city);
        }
    }
    

    updateCity = city => {
        const url_forecast = `${url}?q=${city}&appid=${api_key}`;

        fetch(url_forecast).then(data => { 
            return data.json();
        }).then(weather_data => {
            console.log(weather_data);
            const forecastData = transformForecast(weather_data);
            console.log(forecastData);
            this.setState({ forecastData })
        }).catch(error => {
            console.log(error);
        });
    };

    renderForecastItemDays(forecastData) {
        return forecastData.map(forecast => <ForecastItem key={`${forecast.weekDay}${forecast.hour}`} weekDay={forecast.weekDay} hour={forecast.hour} data={forecast.data}></ForecastItem>);
    }
    
    renderProgress = () => {
        return "Cargando pronóstico extendido";
    }

    render () {
        const { city } = this.props;
        const { forecastData } = this.state;

        return (
            <div>
                <h2 className="forecast-title">Pronóstico Extendido para { city }</h2>
                { 
                    forecastData ?
                        this.renderForecastItemDays(forecastData) :
                        this.renderProgress()
                }
            </div>
        );
    } 
}

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
};

export default ForecastExtended;