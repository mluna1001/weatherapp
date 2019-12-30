import React from 'react'
import WeatherExtraInfo from './WeatherExtraInfo'
import WeaterTemperature from './WeatherTemperature'
import { CLOUD, CLOUDY, SUN, RAIN, SNOW, WINDY, FOG, } from '../../../constants/weathers' 

const WeatherData = () => (
    <div>
        <WeaterTemperature temperature={20} weatherState={RAIN} />
        <WeatherExtraInfo humidity={80} wind={"10 m/s"} />
    </div>
);

export default WeatherData;