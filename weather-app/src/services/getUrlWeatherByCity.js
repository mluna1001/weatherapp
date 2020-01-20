import { url_base_weather, api_key } from './../constants/api_url'

const getUrlWeatherByCity = city => {
    // Sumatoria de la URL
    return `${url_base_weather}?q=${city}&appid=${api_key}`;
}

export default getUrlWeatherByCity;