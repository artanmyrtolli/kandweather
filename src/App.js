import './App.css';
import React, { Component, createContext } from 'react';
import { Route } from 'react-router-dom';
import WeatherContainer from './Components/WeatherContainer/WeatherContainer';
import WeatherDetails from './Components/WeatherDetails/WeatherDetails';
import Navbar from './Components/Navbar/Navbar';
import AQI from './Components/AQI/AQI';
import Form from './Components/Form/Form';
import { fetchAirQuality, fetchCityData } from './apiCalls';

export let weatherContext;
export let hourlyLinkContext;
export let airContext;
export let cityContext;
// export let handleChoiceContext;


class App extends Component {
  constructor(){
    super()
    this.state = {
      forecast: [],
      airData: 0,
      cityData: []
    }
  }
  componentDidMount() {
    fetchCityData().then(data => {
      // console.log(data.data.states)
      this.setState({
        ...this.state,
        cityData: data.data.states
      })
    })
    
    fetchAirQuality()
    .then(data=> this.setState({
      ...this.state, 
      airData: data.data.current.pollution.aqius
    }))

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
            ...this.state,
            forecast: filtered,
          })
        })
      })
      }

    handleUserChoice = (event, stateChoice, cityChoice) => {
      event.preventDefault()
      console.log('app fired', stateChoice, cityChoice)
    }

      
  render () {
    // handleChoiceContext = createContext(this.handleUserChoice)
    cityContext = createContext(this.state.cityData)
    airContext = createContext(this.state.airData)  
    weatherContext = createContext(this.state.forecast)
    return (
      <>
      <Navbar />      
      <Form handleUserChoice={this.handleUserChoice}/>
      <Route exact path='/' render = {() =>
      <>
      <AQI />
        <div className="App">
          <WeatherContainer />
        </div>
      </>
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
