import React from 'react'
import WeatherExtraInfo from './WeatherExtraInfo'
import WeaterTemperature from './WeatherTemperature'

const WeatherData = () => (
    <div>
        <WeaterTemperature />
        <WeatherExtraInfo humidity={80} wind={"10 m/s"} />
    </div>
);

export default WeatherData;