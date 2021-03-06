import React, { Component } from 'react';
import { LinkContainer, IndexLinkContainer } from 'react-router-bootstrap';
import { Navbar, NavItem, Nav, FormGroup, FormControl, Button } from 'react-bootstrap';
import ReactDOM from 'react-dom';

class Navigation extends Component {
  constructor(props) {
    super();
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    const location = ReactDOM.findDOMNode(this.location).value;
    const encodedLocation = encodeURIComponent(location);

    if (location.length > 0) {
      ReactDOM.findDOMNode(this.location).value ='';
      window.location.hash = '#/?location=' + encodedLocation;
    }
  }

  render() {
    return (
      <Navbar staticTop>
        <Navbar.Header>
           <Navbar.Brand>
             React Weather App
           </Navbar.Brand>
           <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <IndexLinkContainer to="/">
              <NavItem eventKey={1}>Get Weather</NavItem>
            </IndexLinkContainer>
            <LinkContainer to="/about">
              <NavItem eventKey={2}>About</NavItem>
            </LinkContainer>
            <LinkContainer to="/examples">
              <NavItem eventKey={3}>Examples</NavItem>
            </LinkContainer>
          </Nav>
          <Navbar.Form pullRight>
            <form onSubmit={this.onSubmit}>
              <FormGroup>
                <FormControl type="search"
                  ref={(c) => this.location=c}
                  placeholder="Search..."/>
              </FormGroup>
              {'  '}
              <Button bsStyle="primary" type="submit">Get Weather</Button>
            </form>
          </Navbar.Form>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Navigation;
