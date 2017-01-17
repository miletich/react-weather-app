import React, { Component } from 'react';

class WeatherMessage extends Component {
  render() {
    return (
      <div>
        <h3>It's {this.props.temp} in {this.props.location}.</h3>
      </div>
    );
  }
}

export default WeatherMessage;
