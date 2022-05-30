import React from "react";
import { NavLink } from "react-router-dom"
import { weatherContext } from "../../App";
import  WeatherCard  from "../WeatherCard/WeatherCard"

const WeatherContainer = () => {
    const format = (value) => {
        return value.map(obj => {
            return (
              <NavLink to="/details">
                <WeatherCard
                name= {obj.name}
                temp= {obj.temperature}
                windSpeed= {obj.windSpeed}
                windDirection= {obj.windDirection}
                shortForecast= {obj.shortForecast}
                key={obj.number}
                />
              </NavLink>

            )
        })
    }

    return (
        <weatherContext.Consumer>
            {value => format(value)}
        </weatherContext.Consumer>
    )
}


export default WeatherContainer
