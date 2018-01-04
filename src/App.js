import React, { Component } from 'react';
import Button from './Button';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Button />
        <Button theme="main" />
        <Button theme="positive" />
        <Button theme="negative" />
      </div>
    );
  }
}

export default App;
