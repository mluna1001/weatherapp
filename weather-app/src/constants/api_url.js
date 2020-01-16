// constantes para el API
const location = "Mexico City,mx";
const api_key = 'a761f2c4f40ca915b2a64b67b609ab90';
const url_base_weather = 'https://api.openweathermap.org/data/2.5/weather';

// Sumatoria de la URL
export const api_weather = `${url_base_weather}?q=${location}&appid=${api_key}`;