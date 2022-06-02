import React from "react";
import { airContext } from "../../App";
import airQualityKey from '../../assets/images/airQualityKey.png'

const AQI = () => {
    console.log('aqi log', airContext)
    const format = (value) => {
        return (
            <>
            <p>The air quality index is: {`${value}`}</p>
            </>
        )
    }
    return (
        <>
        {airContext && 
            <airContext.Consumer>
                {value => format(value)}
            </airContext.Consumer>
        }
        <img className="aqi-key" src={airQualityKey}/>
        </>
    )
}


export default AQI