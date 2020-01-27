import React from "react";
import WheaterData from "./../WeatherLocation/WheaterData";
import PropTypes from "prop-types";

const ForecastItem = ({ weekDay, hour, data }) => (
    <div>
        <div><h3>{weekDay}- {hour} hs</h3></div>
        <WheaterData data={data}></WheaterData>
    </div>
);

ForecastItem.propTypes = {
    weekDay: PropTypes.string.isRequired,
    hour: PropTypes.number.isRequired,
    data: PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.string.isRequired,
    }),
};

export default ForecastItem;