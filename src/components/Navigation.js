import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';

const Navigation = (props) => {
  return (
    <div>
      <h1>Navigation</h1>
      <IndexLink to="/" activeClassName="active" activeStyle={{ color: 'red' }}>Get Weather</IndexLink>
      <Link to="/about" activeClassName="active" activeStyle={{ color: 'red' }}>About</Link>
      <Link to="/examples" activeClassName="active" activeStyle={{ color: 'red' }}>Examples</Link>
    </div>
  );
}

export default Navigation;
