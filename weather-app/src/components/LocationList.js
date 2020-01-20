import React from 'react';
import PropTypes from 'prop-types'
import WeatherLocation from './WeatherLocation';


const LocationList = ({ cities, onSelectedLocation }) => {
    const handleWeatherLocationClick = city => {
        console.log("handleWeatherLocationClick");
        onSelectedLocation(city);
    };
    
    const strToComponents = cities => (
        cities.map( city => (
            <WeatherLocation 
                key={city} 
                city={city} 
                onWeatherLocationClick={() => handleWeatherLocationClick(city)} />))
    );
    


    // Para declarar un elemento debe tener un key único para identificar cada elemento del array de componentes
    return (<div>       
        { strToComponents(cities) } 
    </div>);
};

LocationList.propTypes = {
    cities: PropTypes.array.isRequired,
    onSelectedLocation: PropTypes.func,
}

export default LocationList;