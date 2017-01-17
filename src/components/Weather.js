import React, { Component } from 'react';
import WeatherForm from './WeatherForm'
import WeatherMessage from './WeatherMessage';

class Weather extends Component {
  render() {
    return (
      <div>
        <h3>Wethaer</h3>
        <WeatherForm />
        <WeatherMessage />
      </div>
    );
  }
}

export default Weather;
