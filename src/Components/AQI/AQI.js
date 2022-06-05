import React from "react";
import { airContext } from "../../App";
import airQualityKey from '../../assets/images/airQualityKey.png'
import "./AQI.css"

const AQI = () => {
    const format = (value) => {
        return (
            <>
            <p>The air quality index is: {`${value}`}</p>
            </>
        )
    }
    return (
        <div className="aqi-wrapper">
        {airContext && 
            <airContext.Consumer>
                {value => format(value)}
            </airContext.Consumer>
        }
        <img className="aqi-key" src={airQualityKey}/>
        </div>
    )
}


export default AQI