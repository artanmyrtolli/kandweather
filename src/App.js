import './App.css';
import React, { Component, createContext } from 'react';
import { Route } from 'react-router-dom';
import WeatherContainer from './Components/WeatherContainer/WeatherContainer';
import WeatherDetails from './Components/WeatherDetails/WeatherDetails';

export let weatherContext;
export let hourlyLinkContext;

class App extends Component {
  constructor(){
    super()
    this.state = {
      forecast: []

    }
  }
  componentDidMount() {
    fetch('https://api.weather.gov/points/39.7392,-104.9903')
      .then(response => response.json())
      .then(data => {
        hourlyLinkContext = createContext(data.properties.forecastHourly)
        fetch(data.properties.forecast)
        .then(response => response.json())
        .then(data => {
          let filtered = data.properties.periods.filter(element => element.isDaytime).map((item, index) => {
             return item = {...item, number:  index + 1}})
          this.setState({
            forecast: filtered
          })
        })
      })
  }

  render () {
    weatherContext = createContext(this.state.forecast)
    return (
      <>
      <Route exact path='/' render = {() =>
      <div className="App">
        <WeatherContainer />
      </div>
    }
      />
      <Route exact path='/:number' render = {({ match }) =>
        <WeatherDetails number={ match.params.number } />
      }
      />
      </>
    );
  }
}

export default App;
