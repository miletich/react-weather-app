import React, { Component } from 'react';
import WeatherForm from './WeatherForm'
import WeatherMessage from './WeatherMessage';
import apixu from './../../api/apixu';
import ErrorModal from './ErrorModal';

class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
    };
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(location){
    let that = this;

    this.setState({
      isLoading: true,
      errorMessage: undefined,
      location: undefined,
      temp: undefined,
    });

    apixu.getTemp(location).then(function (temp) {
      that.setState({
        location: location,
        temp: temp,
        isLoading: false
      });
    }, function (e) {
      that.setState({
        isLoading: false,
        errorMessage: e.message
      });
    });
  }

  componentDidMount() {
    const location = this.props.location.query.location;

    if (location && location.length > 0) {
      this.handleSearch(location);
      window.location.hash = '#/';
    }
  }


    componentWillReceiveProps(newProps) {
      const location = newProps.location.query.location;

      if (location && location.length > 0) {
        this.handleSearch(location);
        window.location.hash = '#/';
      }
    }

  render() {
    let {isLoading, temp, location, errorMessage } = this.state;

    function renderMessage() {
      if (isLoading) {
        return <h3>Fetching weather...</h3>;
      } else if (temp && location) {
        return <WeatherMessage location={location} temp={temp}/>
      }
    }

    function renderModal() {
      if (errorMessage) {
        return <ErrorModal message={errorMessage}/>;
      }
    }

    return (
      <div>
        <h1 className='page-title'>Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
        {renderModal()}
      </div>
    );
  }
}

export default Weather;
