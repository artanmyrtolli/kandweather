import React from 'react';
import './WeatherCard.css'
const WeatherCard = (props) => {
  return (
    <div className="weatherCard-box">
      <h2>{props.name}</h2>
      <p>{props.shortForecast}</p>
      <p>{props.temp}°F</p>
      <img src={props.icon}/>
      <p>Winds: {props.windSpeed} from the {props.windDirection}</p>
    </div>
  )
}

export default WeatherCard;
