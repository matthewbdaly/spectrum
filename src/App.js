import React, { Component } from 'react';
import Button from './Button';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Button>Default Button</Button>
        <Button theme="main">Button with the main theme</Button>
        <Button theme="positive">Button with the positive theme</Button>
        <Button theme="negative">Button with the negative theme</Button>
        <Button theme="main inverse">Button with the inverse main theme</Button>
        <Button theme="positive inverse">Button with the inverse positive theme</Button>
        <Button theme="negative inverse">Button with the inverse negative theme</Button>
      </div>
    );
  }
}

export default App;
