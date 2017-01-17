import React, { Component } from 'react';
import Navigation from './components/Navigation';

const App = ({children}) => {
  return (
    <div>
      <Navigation />
      <h1>Main Component</h1>
      {children}
    </div>
  )
}

export default App;
