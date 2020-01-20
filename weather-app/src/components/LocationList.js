import React from 'react';
import WeatherLocation from './WeatherLocation';

const LocationList = () => (
    <div>
        <WeatherLocation city="Mexico City,mx"></WeatherLocation>
        <WeatherLocation city="Bogota,col"></WeatherLocation>
        <WeatherLocation city="Buenos Aires,ar"></WeatherLocation>
    </div>
);

export default LocationList;