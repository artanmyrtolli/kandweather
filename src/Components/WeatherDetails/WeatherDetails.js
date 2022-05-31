import React, { Component } from 'react';
import { hourlyLinkContext } from "../../App";

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
    console.log('Data',data)
      const filtered = data.properties.periods.filter((element, index) => index < 24).map(item => {
        return (
          <div>
          {parseInt(item.startTime.substring(11,13)) < 12 ? <h2>{item.startTime.substring(11,13)}:00 am</h2> :
        parseInt(item.startTime.substring(11,13)) === 12 ? <h2>{item.startTime.substring(11,13)}:00 pm</h2> :
      <h2>{parseInt(item.startTime.substring(11,13) - 12)}:00 pm</h2>}

          </div>
        )
      })
        console.log(filtered)
        this.setState({
          hourlyArray:filtered,
          fetched:true
        })
  })
}



  render(){
    console.log(this.props)
    return (
      <>
      {this.state.fetched ? "" :
      <hourlyLinkContext.Consumer>
        {value => this.fetchHourly(value)}
      </hourlyLinkContext.Consumer>
      }
      {this.state.hourlyArray}
      </>
    )
  }
}

export default WeatherDetails;
