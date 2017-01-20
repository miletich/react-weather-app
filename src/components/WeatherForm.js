import React, { Component } from 'react';
import { Button, FormGroup, FormControl } from 'react-bootstrap';
import ReactDOM from 'react-dom';

class WeatherForm extends Component {
  constructor(props) {
    super(props);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onFormSubmit(e){
    e.preventDefault();

    const location = ReactDOM.findDOMNode(this.location).value;

    if (location.length > 0) {
      ReactDOM.findDOMNode(this.location).value = '';
      this.props.onSearch(location);
    }
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <FormGroup>
          <FormControl type="text"
            bsSize="large"
            ref={(c) => this.location=c}/>
        </FormGroup>
        <FormGroup>
          <Button type="submit"
            bsSize="large"
            bsStyle="primary"
            block>
            Submit
          </Button>
        </FormGroup>
      </form>
    );
  }
}

export default WeatherForm;
