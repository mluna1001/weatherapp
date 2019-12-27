// Generación de componente
// Se importa la librería de React
import React from 'react';
import Location from './Location'
import WeatherData from './WeatherData';

// Se genera el contenido del componente, haciendo uso de Babel, ya en forma JSX
const WeatherLocation = () => (
    <div>
        <Location city={"Guadalajara"}></Location>
        <WeatherData></WeatherData>
    </div>
);

// Se exporta en cualquier parte de la aplicación, está disponible
export default WeatherLocation;