import React from "react";
import { airContext } from "../../App";
import airQualityKey from '../../assets/images/airQualityKey.png'
import "./AQI.css"

const AQI = () => {
    return (
        <div className="aqi-wrapper">
            {airContext && 
                <airContext.Consumer>
                    {value => <h2>The air quality index is: {`${value}`}</h2>}
                </airContext.Consumer> }
            <img className="aqi-key" src={airQualityKey}/>
        </div>
    )
}


export default AQI