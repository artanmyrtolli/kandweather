import './App.css';
import React, { Component, createContext } from 'react';
import WeatherContainer from './Components/WeatherContainer/WeatherContainer';

export let weatherContext;

class App extends Component {
  constructor(){
    super()
    this.state = {
      forecast: []
    }
  }
  componentDidMount() {
    fetch('https://api.weather.gov/points/35.0844,-106.6504')
      .then(response => response.json())
      .then(data => {
        fetch(data.properties.forecast)
        .then(response => response.json())
        .then(data => {
          let filtered = data.properties.periods.filter(element => element.isDaytime)
          this.setState({
            forecast: filtered
          })
        })
      })
  }

  render () {
    weatherContext = createContext(this.state.forecast)
    console.log(weatherContext);
    return (
      <div className="App">
        <WeatherContainer/>
      </div>
    );
  }
}

export default App;
