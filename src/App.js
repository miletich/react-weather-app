import React from 'react';
import Navigation from './components/Navigation';
import { Grid, Row, Col } from 'react-bootstrap';

const App = ({children}) => {
  return (
    <Grid fluid>
      <Row>
        <Col>
          <Navigation />
        </Col>
      </Row>
      <Row>
        <Col md={6} lg={4} style={{float: 'none', margin: 'auto', textAlign: 'center'}}>
          {children}
        </Col>
      </Row>
    </Grid>
  );
}

export default App;
