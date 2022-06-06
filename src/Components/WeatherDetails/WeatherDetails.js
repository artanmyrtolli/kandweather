import React, { Component } from 'react';
import { hourlyLinkContext } from "../../App";
import "./WeatherDetails.css"

class WeatherDetails extends Component {
  constructor() {
    super();
    this.state = {
      hourlyArray:[],
      fetched:false
    }
  }

fetchHourly = (value) => {
  fetch(value)
  .then(response => response.json())
  .then(data => {
      const filtered = data.properties.periods.filter((element, index) => index < 24).map(item => {
        return (
          <div key={item.number} className="hour-details">
          {parseInt(item.startTime.substring(11,13)) < 12 ? <h2>{item.startTime.substring(11,13)}:00 am</h2> :
        parseInt(item.startTime.substring(11,13)) === 12 ? <h2>{item.startTime.substring(11,13)}:00 pm</h2> :
      <h2>{parseInt(item.startTime.substring(11,13) - 12)}:00 pm</h2>}
        <p>{item.shortForecast}</p>
        <p>{item.temperature}°F</p>
        <p>{item.windSpeed} from the {item.windDirection}</p>
          </div>
        )
      })
        this.setState({
          hourlyArray:filtered,
          fetched:true
        })
    })
  } 

  render(){
    return (
      <div className='details-wrapper'>
      {this.state.fetched ? "" :
      <hourlyLinkContext.Consumer>
        {value => this.fetchHourly(value)}
      </hourlyLinkContext.Consumer>
      }
      {this.state.hourlyArray}
      </div>
    )
  }
}

export default WeatherDetails;
