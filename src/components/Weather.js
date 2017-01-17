import React, { Component } from 'react';
import WeatherForm from './WeatherForm'
import WeatherMessage from './WeatherMessage';

class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: 'Belgrade',
      temp: '30'
    }
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(location){
    this.setState({
      location: location,
      temp: -5
    })
  }

  render() {
    return (
      <div>
        <h3>Weather</h3>
        <WeatherForm onSearch={this.handleSearch}/>
        <WeatherMessage location={this.state.location} temp={this.state.temp}/>
      </div>
    );
  }
}

export default Weather;
