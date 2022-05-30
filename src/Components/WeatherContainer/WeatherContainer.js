import React from "react";
import { weatherContext } from "../../App";
import  WeatherCard  from "../WeatherCard/WeatherCard"

const WeatherContainer = () => {
    const format = (value) => {
        return value.map(obj => {
            return (
                <WeatherCard
                name= {obj.name}
                temp= {obj.temperature}
                windSpeed= {obj.windSpeed}
                windDirection= {obj.windDirection}
                shortForecast= {obj.shortForecast}/>

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
