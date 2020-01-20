import React from 'react'
import PropTypes from 'prop-types' // importación de prop-types para validaciones de entradas del componente.
import WeatherIcons from 'react-weathericons'
import './styles.css'
import { CLOUD, SUN, RAIN, SNOW, THUNDER, DRIZZLE  } from '../../../constants/weathers' 

const icons = {
    [CLOUD]: "cloud",
    [SUN]: "day-sunny",
    [RAIN]: "rain",
    [SNOW]: "snow",
    [RAIN]: 'rain',
    [THUNDER]: 'day-thunderstore',
    [DRIZZLE]: 'drizzle'
};

const getWeatherIcon = weatherState => {
    const icon = icons[weatherState];

    const sizeIcon = "4x";

    if (icon)
        return <WeatherIcons className="wicon" name={icon} size={sizeIcon} />;
    else
        return <WeatherIcons className="wicon" name={SUN} size={sizeIcon} />;
};

const WeatherTemperature = ({ temperature, weatherState }) => (
    <div className="weatherTemperatureCont">
        {
            getWeatherIcon(weatherState)
        }
        <span className="temperature">{`${temperature}`}</span>
        <span className="temperatureType">{`°C`}</span>
    </div>
);

WeatherTemperature.propTypes = {
    temperature: PropTypes.number,
    weatherState: PropTypes.string.isRequired
};

export default WeatherTemperature;