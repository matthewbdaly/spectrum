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
        <Button theme="main inverse" />
        <Button theme="positive inverse" />
        <Button theme="negative inverse" />
      </div>
    );
  }
}

export default App;
