import React from "react";
import { NavLink } from "react-router-dom"
import { weatherContext } from "../../App";
import  WeatherCard  from "../WeatherCard/WeatherCard"

const WeatherContainer = () => {
    const format = (value) => {
        return value.map(obj => {
            return (
              <NavLink to={`/${obj.number}`} key={obj.number}>
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
      <>
        <NavLink to="/24-hours">
          <button className="24hr-btn">Next 24Hrs</button>
        </NavLink>
        <weatherContext.Consumer>
            {value => format(value)}
        </weatherContext.Consumer>
      </>
    )
}


export default WeatherContainer
