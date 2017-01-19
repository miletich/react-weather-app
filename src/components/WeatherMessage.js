import React from 'react';

const WeatherMessage = ({temp, location}) => {
  return (
    <div>
      <h3>It's {temp} in {location}.</h3>
    </div>
  );
}

export default WeatherMessage;
