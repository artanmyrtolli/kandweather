import React from 'react';
import './WeatherCard.css'
const WeatherCard = (props) => {
  console.log('<<<>>>',props)
  return (
    <div className="weatherCard-box">
      <h2>{props.name}</h2>
      <p>{props.shortForecast}</p>
      <p>{props.temp}°F</p>
      <p>Winds: {props.windSpeed} from the {props.windDirection}</p>
    </div>
  )
}

export default WeatherCard;
