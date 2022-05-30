import React, { Component } from 'react';
import { hourlyLinkContext } from "../../App";

class WeatherDetails extends Component {
  constructor() {
    super();
    this.state = {}
  }

fetchHourly = (value) => {
  fetch(value)
  .then(response => response.json())
  .then(data => {
    if(this.props.number === "1") {
      const filtered = data.properties.periods.filter((element, index) => index < 24)
        console.log(filtered)
    }
  })
}



  render(){
    console.log(this.props)
    return (
      <hourlyLinkContext.Consumer>
        {value => this.fetchHourly(value)}
      </hourlyLinkContext.Consumer>
    )
  }
}

export default WeatherDetails;
