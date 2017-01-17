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
/*
class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <h1>Main Component</h1>
        {this.props.children}
      </div>
    )
  }
}
*/

export default App;
