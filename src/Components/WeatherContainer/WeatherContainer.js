import React from "react";
import { weatherContext } from "../../App";
import  WeatherCard  from "../WeatherCard/WeatherCard"
import "./WeatherContainer.css"

const WeatherContainer = () => {
    const format = (value) => {
        return value.map(obj => {
            return (   
                <WeatherCard
                name= {obj.name}
                temp= {obj.temperature}
                icon= {obj.icon}
                windSpeed= {obj.windSpeed}
                windDirection= {obj.windDirection}
                shortForecast= {obj.shortForecast}
                key={obj.number}
                />
            )
        })
    }

    return (
      <div className="weather-card-wrapper">
        <weatherContext.Consumer>
            {value => format(value)}
        </weatherContext.Consumer>
      </div>
    )
}


export default WeatherContainer
