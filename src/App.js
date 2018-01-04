import React, { Component } from 'react';
import Button from './Button';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Button />
        <Button style="main" />
        <Button style="positive" />
        <Button style="negative" />
      </div>
    );
  }
}

export default App;
