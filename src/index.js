import React from 'react';
import { Route, Router, IndexRoute, hashHistory } from 'react-router';
import ReactDOM from 'react-dom';
import App from './App';
import Weather from './components/Weather';
import About from './components/About';
import Examples from './components/Examples';
import './index.css';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Weather} />
      <Route path="about" component={About} />
      <Route path="examples" component={Examples} />
    </Route>
  </Router>,
  document.getElementById('root')
);
