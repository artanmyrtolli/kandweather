import React from "react";
import { weatherContext } from "../../App";

const WeatherContainer = () => {
    const format = (value) => {
        return value.map(obj => {
            return (
                <h2>{obj.name}</h2>
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