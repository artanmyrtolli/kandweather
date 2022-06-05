import React from "react";
import { NavLink } from "react-router-dom";
import { weatherContext } from "../../App";
import  WeatherCard  from "../WeatherCard/WeatherCard"
import "./WeatherContainer.css"

const WeatherContainer = () => {
    const format = (value) => {
        return value.map(obj => {
            return (
              <NavLink to={`/${obj.number}`} key={obj.number} className="nav-link">
                <WeatherCard
                name= {obj.name}
                temp= {obj.temperature}
                icon= {obj.icon}
                windSpeed= {obj.windSpeed}
                windDirection= {obj.windDirection}
                shortForecast= {obj.shortForecast}
                />
              </NavLink>

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
